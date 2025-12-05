/**
 * Geocoding Helper - Optional enhancement for zip code validation
 * This file provides geocoding functionality with proper error handling
 * 
 * ⚠️ SECURITY WARNING: API keys in client-side code are always visible.
 * You MUST restrict this key in Google Cloud Console:
 * 1. Go to: https://console.cloud.google.com/apis/credentials
 * 2. Click your API key → Application restrictions
 * 3. Add only your domain: https://yourdomain.com/*
 * 4. Under API restrictions, allow only "Geocoding API"
 * 
 * Consider rotating this key if it was previously committed to git.
 */

// Configuration - Google Maps API key
// TODO: Rotate this key if it was exposed in git history
// TODO: Restrict this key to your domain in Google Cloud Console
const GOOGLE_MAPS_API_KEY = 'AIzaSyBNCkA17FuQrsLjToDkdWX_3Z3UHWVId3Q';

// Cache for geocoding results to reduce API calls
const geocodeCache = new Map();

// Rate limiting - track last request time
let lastRequestTime = 0;
const MIN_REQUEST_INTERVAL = 200; // Minimum 200ms between requests (5 requests per second max)

/**
 * Geocode a zip code to get coordinates and address details
 * @param {string} zipCode - The zip code to geocode
 * @returns {Promise<Object>} - Geocoding result with coordinates and address
 */
async function geocodeZipCode(zipCode) {
  // If no API key is set, return null (fallback to local search)
  if (!GOOGLE_MAPS_API_KEY || GOOGLE_MAPS_API_KEY === 'YOUR_API_KEY_HERE') {
    console.warn('Google Maps API key not configured. Using local search only.');
    return null;
  }

  // Check cache first
  if (geocodeCache.has(zipCode)) {
    console.log('Using cached geocoding result for:', zipCode);
    return geocodeCache.get(zipCode);
  }

  // Rate limiting - wait if needed
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
    await new Promise(resolve => setTimeout(resolve, MIN_REQUEST_INTERVAL - timeSinceLastRequest));
  }
  lastRequestTime = Date.now();

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(zipCode)}&key=${GOOGLE_MAPS_API_KEY}`
    );

    const data = await response.json();

    // Handle different API response statuses
    if (data.status === 'REQUEST_DENIED') {
      console.error('Geocoding API Error:', data.error_message || 'Request denied. Check API key and restrictions.');
      throw new Error('Geocoding API access denied. Please check your API key configuration.');
    }

    if (data.status === 'OVER_QUERY_LIMIT') {
      console.warn('Geocoding API: Over query limit. Using local search fallback.');
      // Don't cache failed requests
      return null;
    }

    if (data.status === 'ZERO_RESULTS') {
      console.warn('No results found for zip code:', zipCode);
      // Cache null results to avoid repeated failed requests
      geocodeCache.set(zipCode, null);
      return null;
    }

    if (data.status === 'OK' && data.results.length > 0) {
      const result = data.results[0];
      const geocodeResult = {
        address: result.formatted_address,
        location: result.geometry.location,
        zipCode: zipCode,
        valid: true
      };
      
      // Cache successful results
      geocodeCache.set(zipCode, geocodeResult);
      console.log('Geocoding successful for:', zipCode, '- Cached result');
      
      return geocodeResult;
    } else {
      console.warn('Unexpected geocoding status:', data.status, 'for zip code:', zipCode);
      return null;
    }
  } catch (error) {
    console.error('Geocoding error:', error);
    // Don't throw - return null to allow fallback to local search
    return null;
  }
}

/**
 * Validate zip code format (US zip codes)
 * @param {string} zipCode - The zip code to validate
 * @returns {boolean} - True if valid format
 */
function isValidZipCodeFormat(zipCode) {
  // US zip code format: 5 digits or 5+4 format
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(zipCode);
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { geocodeZipCode, isValidZipCodeFormat };
}

