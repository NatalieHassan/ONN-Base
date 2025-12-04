document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.search-form');
  const searchInput = document.querySelector('input[type="search"]');
  const resultsContainer = document.getElementById('results-container');

  // Google Maps Services
  let geocoder;
  let placesService;
  // We need a hidden map element for the PlacesService
  const mapContainer = document.createElement('div');

  // Initialize Google Maps Services
  function initGoogleServices() {
    if (typeof google !== 'undefined' && google.maps) {
      geocoder = new google.maps.Geocoder();
      // PlacesService requires a map or node, even if not displayed
      placesService = new google.maps.places.PlacesService(mapContainer);
    } else {
      console.error('Google Maps API not loaded');
      showError('Google Maps API not loaded. Please check your API key.');
    }
  }

  // Function to render stores from Google Places results
  function renderStores(places) {
    resultsContainer.innerHTML = '';

    if (!places || places.length === 0) {
      resultsContainer.innerHTML = `
        <div class="no-results">
          <i class="fas fa-search-minus"></i>
          <p>No stores found in this area. Try a different location.</p>
        </div>
      `;
      return;
    }

    const grid = document.createElement('div');
    grid.className = 'stores-grid';

    places.forEach(place => {
      const card = document.createElement('div');
      card.className = 'store-card';

      // Get photo URL if available
      let photoUrl = 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; // Fallback
      if (place.photos && place.photos.length > 0) {
        photoUrl = place.photos[0].getUrl({ maxWidth: 400 });
      }

      // Calculate rating stars
      const rating = place.rating || 'N/A';

      // Open status
      const isOpen = place.opening_hours && place.opening_hours.open_now ? '<span class="status-open">Open Now</span>' : '';

      card.innerHTML = `
        <div class="store-image">
          <img src="${photoUrl}" alt="${place.name}">
          <span class="store-category">${place.types[0].replace('_', ' ')}</span>
          ${isOpen}
        </div>
        <div class="store-info">
          <h3>${place.name}</h3>
          <p class="store-address"><i class="fas fa-map-marker-alt"></i> ${place.vicinity}</p>
          <div class="store-footer">
            <span class="store-rating"><i class="fas fa-star"></i> ${rating} (${place.user_ratings_total || 0})</span>
            <a href="https://www.google.com/maps/place/?q=place_id:${place.place_id}" target="_blank" class="view-details">View on Maps</a>
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
        <p>Searching nationwide...</p>
      </div>
    `;
  }

  // Show error message
  function showError(message) {
    resultsContainer.innerHTML = `
      <div class="error-state">
        <i class="fas fa-exclamation-circle"></i>
        <p>${message}</p>
        <p class="error-hint">Please make sure you have entered a valid location.</p>
      </div>
    `;
  }

  // Search Handler
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();

    if (!searchTerm) return;

    // Ensure services are initialized
    if (!geocoder || !placesService) {
      initGoogleServices();
      if (!geocoder) return; // Stop if still not initialized (e.g. missing API key)
    }

    showLoading();

    // 1. Geocode the input (Zip code, City, Address)
    geocoder.geocode({ 'address': searchTerm }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;

        // 2. Search for nearby places
        const request = {
          location: location,
          radius: '25000', // 25km (~15 miles)
          keyword: 'thrift store consignment shop vintage clothing',
          type: ['store'] // Broad type, refined by keyword
        };

        placesService.nearbySearch(request, (places, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            renderStores(places);
          } else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
            renderStores([]);
          } else {
            console.error('Places Search failed:', status);
            showError('Unable to find stores. Please try again.');
          }

          // Scroll to results
          resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });

      } else {
        console.error('Geocode was not successful for the following reason: ' + status);
        showError('Location not found. Please try a valid zip code or city.');
      }
    });
  });

  // Try to init on load, or wait for API
  if (typeof google !== 'undefined') {
    initGoogleServices();
  } else {
    // Check periodically or wait for callback (simplified here)
    window.addEventListener('load', initGoogleServices);
  }
});
