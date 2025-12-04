// Mapbox Geocoding API integration (Client-Side)

// Configuration
const MAPBOX_CONFIG = {
  // It is recommended to restrict this key to your domain in the Mapbox dashboard
  API_KEY: 'pk.eyJ1Ijoibi1oYXNzYW43IiwiYSI6ImNtaXJ1cnQzZTB2N20zaHB1MnhqZzR0d2EifQ.VMhWXab7SZnnj7A9BJ51gw',
  BASE_URL: 'https://api.mapbox.com/geocoding/v5/mapbox.places'
};

// Cache for geocoding results to minimize API calls
const geocodeCache = new Map();

/**
 * Convert a zip code to latitude/longitude coordinates using Mapbox API
 * @param {string} zipCode - US zip code
 * @returns {Promise<{latitude: number, longitude: number}>} Coordinates
 */
async function geocodeZipCode(zipCode) {
  // Check cache first
  if (geocodeCache.has(zipCode)) {
    console.log('Using cached coordinates for', zipCode);
    return geocodeCache.get(zipCode);
  }

  // Validate zip code format
  if (!/^\d{5}$/.test(zipCode)) {
    throw new Error('Invalid zip code format. Please enter a 5-digit US zip code.');
  }

  try {
    console.log('Geocoding zip code (client-side):', zipCode);

    const url = `${MAPBOX_CONFIG.BASE_URL}/${encodeURIComponent(zipCode)}.json?access_token=${MAPBOX_CONFIG.API_KEY}&country=US&types=postcode&limit=1`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Geocoding API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.features || data.features.length === 0) {
      throw new Error('Zip code not found. Please check and try again.');
    }

    const [longitude, latitude] = data.features[0].center;
    const coordinates = { latitude, longitude };

    console.log('Geocoded successfully:', coordinates);

    // Cache the result
    geocodeCache.set(zipCode, coordinates);

    return coordinates;
  } catch (error) {
    console.error('Geocoding error:', error);
    throw error;
  }
}

/**
 * Check if Mapbox API key is configured
 * @returns {boolean} True if API key is set
 */
function isApiKeyConfigured() {
  return MAPBOX_CONFIG.API_KEY && MAPBOX_CONFIG.API_KEY !== 'YOUR_MAPBOX_API_KEY_HERE';
}
