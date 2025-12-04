// Geospatial utility functions for distance calculations

/**
 * Calculate distance between two points using the Haversine formula
 * @param {number} lat1 - Latitude of point 1
 * @param {number} lon1 - Longitude of point 1
 * @param {number} lat2 - Latitude of point 2
 * @param {number} lon2 - Longitude of point 2
 * @returns {number} Distance in miles
 */
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 3959; // Earth's radius in miles
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
}

/**
 * Convert degrees to radians
 * @param {number} degrees
 * @returns {number} Radians
 */
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

/**
 * Filter and sort stores by distance from a given point
 * @param {Array} stores - Array of store objects with latitude/longitude
 * @param {number} centerLat - Center point latitude
 * @param {number} centerLon - Center point longitude
 * @param {number} radiusMiles - Search radius in miles (default: 10)
 * @returns {Array} Filtered and sorted stores with distance property
 */
function findNearbyStores(stores, centerLat, centerLon, radiusMiles = 10) {
  // Calculate distance for each store
  const storesWithDistance = stores.map(store => ({
    ...store,
    distance: calculateDistance(centerLat, centerLon, store.latitude, store.longitude)
  }));

  // Filter by radius and sort by distance
  return storesWithDistance
    .filter(store => store.distance <= radiusMiles)
    .sort((a, b) => a.distance - b.distance);
}

/**
 * Format distance for display
 * @param {number} distance - Distance in miles
 * @returns {string} Formatted distance string
 */
function formatDistance(distance) {
  if (distance < 0.1) {
    return 'Less than 0.1 miles away';
  } else if (distance < 1) {
    return `${distance.toFixed(1)} miles away`;
  } else {
    return `${distance.toFixed(1)} miles away`;
  }
}
