// Geocoding using Netlify serverless function

// Cache for geocoding results to minimize API calls
const geocodeCache = new Map();

/**
 * Convert a zip code to latitude/longitude coordinates using Netlify function
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
    console.log('Geocoding zip code:', zipCode);

    // Call Netlify function
    const response = await fetch('/.netlify/functions/geocode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ zipCode })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Geocoding failed: ${response.status}`);
    }

    const coordinates = await response.json();
    console.log('Geocoded coordinates:', coordinates);

    // Cache the result
    geocodeCache.set(zipCode, coordinates);

    return coordinates;
  } catch (error) {
    console.error('Geocoding error:', error);
    throw new Error(error.message || 'Unable to geocode zip code. Please try again.');
  }
}

/**
 * Check if geocoding is available
 * @returns {boolean} Always true since we're using serverless function
 */
function isApiKeyConfigured() {
  return true; // Always available with Netlify function
}
