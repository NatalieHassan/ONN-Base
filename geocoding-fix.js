/**
 * Geocoding Helper - Optional enhancement for zip code validation
 * This file provides geocoding functionality with proper error handling
 */

// Configuration - Google Maps API key
const GOOGLE_MAPS_API_KEY = 'AIzaSyBNCkA17FuQrsLjToDkdWX_3Z3UHWVId3Q';

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

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(zipCode)}&key=${GOOGLE_MAPS_API_KEY}`
    );

    const data = await response.json();

    if (data.status === 'REQUEST_DENIED') {
      console.error('Geocoding API Error:', data.error_message || 'Request denied. Check API key and restrictions.');
      throw new Error('Geocoding API access denied. Please check your API key configuration.');
    }

    if (data.status === 'OK' && data.results.length > 0) {
      const result = data.results[0];
      return {
        address: result.formatted_address,
        location: result.geometry.location,
        zipCode: zipCode,
        valid: true
      };
    } else {
      console.warn('No results found for zip code:', zipCode);
      return null;
    }
  } catch (error) {
    console.error('Geocoding error:', error);
    throw error;
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

