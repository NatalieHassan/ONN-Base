document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.search-form');
  const searchInput = document.querySelector('input[type="search"]');
  const resultsContainer = document.getElementById('results-container');
  const DEFAULT_RADIUS = 10; // miles

  // Function to render stores
  function renderStores(storesToRender) {
    resultsContainer.innerHTML = '';

    if (storesToRender.length === 0) {
      resultsContainer.innerHTML = `
        <div class="no-results">
          <i class="fas fa-search-minus"></i>
          <p>No stores found within ${DEFAULT_RADIUS} miles of this area. Try a different zip code.</p>
        </div>
      `;
      return;
    }

    const grid = document.createElement('div');
    grid.className = 'stores-grid';

    storesToRender.forEach(store => {
      const card = document.createElement('div');
      card.className = 'store-card';

      // Add distance badge if available
      const distanceBadge = store.distance !== undefined
        ? `<span class="distance-badge">${formatDistance(store.distance)}</span>`
        : '';

      card.innerHTML = `
        <div class="store-image">
          <img src="${store.image}" alt="${store.name}">
          <span class="store-category">${store.category}</span>
          ${distanceBadge}
        </div>
        <div class="store-info">
          <h3>${store.name}</h3>
          <p class="store-address"><i class="fas fa-map-marker-alt"></i> ${store.address}</p>
          <p class="store-description">${store.description}</p>
          <div class="store-footer">
            <span class="store-rating"><i class="fas fa-star"></i> ${store.rating}</span>
            <a href="#" class="view-details">View Details</a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    resultsContainer.appendChild(grid);

    // Add fade-in animation
    setTimeout(() => {
      document.querySelectorAll('.store-card').forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 100);
      });
    }, 50);
  }

  // Show loading state
  function showLoading() {
    resultsContainer.innerHTML = `
      <div class="loading-state">
        <div class="spinner"></div>
        <p>Finding stores near you...</p>
      </div>
    `;
  }

  // Show error message
  function showError(message) {
    resultsContainer.innerHTML = `
      <div class="error-state">
        <i class="fas fa-exclamation-circle"></i>
        <p>${message}</p>
        <p class="error-hint">Try entering a valid 5-digit US zip code (e.g., 10001, 11201)</p>
      </div>
    `;
  }

  // Search Handler with Geospatial Search
  searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();

    if (!searchTerm) return;

    // Check if API key is configured
    if (!isApiKeyConfigured()) {
      showError('Mapbox API key not configured. Please add your API key to geocoding.js');
      return;
    }

    showLoading();

    try {
      // Geocode the zip code to get coordinates
      const { latitude, longitude } = await geocodeZipCode(searchTerm);

      // Find nearby stores within radius
      const nearbyStores = findNearbyStores(stores, latitude, longitude, DEFAULT_RADIUS);

      // Render results
      renderStores(nearbyStores);

      // Scroll to results
      resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (error) {
      console.error('Search error:', error);
      showError(error.message || 'Unable to search this location. Please try again.');
    }
  });
});
