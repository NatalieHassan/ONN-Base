document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.search-form');
  const searchInput = document.querySelector('input[type="search"]');
  const resultsContainer = document.getElementById('results-container');

  // Handle geocoding errors gracefully
  window.addEventListener('error', (event) => {
    if (event.message && (event.message.includes('Geocoding') || event.message.includes('REQUEST_DENIED'))) {
      // Don't suppress - just log it. The app will continue with local search.
      console.warn('Geocoding error (app will continue with local search):', event.message);
    }
  });

  // Check if stores data is available
  if (typeof stores === 'undefined') {
    console.error('Stores data not loaded. Make sure data.js is loaded before script.js');
    resultsContainer.innerHTML = `
      <div class="no-results">
        <i class="fas fa-exclamation-triangle"></i>
        <p>Error loading store data. Please refresh the page.</p>
      </div>
    `;
    return;
  }

  // Function to show loading state
  function showLoading() {
    resultsContainer.innerHTML = `
      <div class="loading-state" style="text-align: center; padding: 4rem; color: var(--text-secondary);">
        <i class="fas fa-spinner fa-spin" style="font-size: 2rem; margin-bottom: 1rem;"></i>
        <p>Searching for stores...</p>
      </div>
    `;
  }

  // Calculate distance between two coordinates (Haversine formula)
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 3959; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in miles
  }

  // Function to render stores
  function renderStores(storesToRender) {
    resultsContainer.innerHTML = '';

    if (storesToRender.length === 0) {
      resultsContainer.innerHTML = `
        <div class="no-results" style="text-align: center; padding: 4rem; color: var(--text-secondary);">
          <i class="fas fa-search-minus" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
          <p style="font-size: 1.2rem;">No stores found within 10 miles of this area.</p>
          <p style="margin-top: 0.5rem; font-size: 0.9rem;">Try a different zip code (e.g., 10001, 11201, 10021, 11211, 10012, 10003).</p>
        </div>
      `;
      return;
    }

    const grid = document.createElement('div');
    grid.className = 'stores-grid';

    storesToRender.forEach(store => {
      const card = document.createElement('div');
      card.className = 'store-card';
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      
      card.innerHTML = `
        <div class="store-image">
          <img src="${store.image}" alt="${store.name}" loading="lazy">
          <span class="store-category">${store.category}</span>
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

  // Search Handler
  if (searchForm) {
    searchForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const searchTerm = searchInput.value.trim();

      if (!searchTerm) {
        resultsContainer.innerHTML = `
          <div class="no-results" style="text-align: center; padding: 2rem; color: var(--text-secondary);">
            <p>Please enter a zip code or store name to search.</p>
          </div>
        `;
        return;
      }

      // Show loading state
      showLoading();

      // Simulate API delay (remove this if using real API)
      await new Promise(resolve => setTimeout(resolve, 300));

      try {
        // Safety check
        if (!stores || stores.length === 0) {
          throw new Error('No store data available');
        }

        let filteredStores = [];
        const searchRadiusMiles = 10; // Search radius in miles

        console.log('Searching for:', searchTerm);
        console.log('Total stores available:', stores.length);

        // Always start with simple zip code/name/address matching (fast and reliable)
        filteredStores = stores.filter(store =>
          store.zip.includes(searchTerm) ||
          store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          store.address.toLowerCase().includes(searchTerm.toLowerCase())
        );

        console.log('Stores found with simple matching:', filteredStores.length);

        // If we have results and geocoding is available, enhance with distance filtering
        if (filteredStores.length > 0 && typeof geocodeZipCode !== 'undefined' && typeof isValidZipCodeFormat !== 'undefined') {
          if (isValidZipCodeFormat(searchTerm)) {
            try {
              // Get coordinates for the search zip code
              const geocodeResult = await geocodeZipCode(searchTerm);
              
              if (geocodeResult && geocodeResult.valid && geocodeResult.location) {
                const searchLat = geocodeResult.location.lat;
                const searchLng = geocodeResult.location.lng;
                
                console.log('Geocoding successful. Searching within', searchRadiusMiles, 'miles of:', geocodeResult.address);
                
                // Filter by distance, but always include exact zip matches
                filteredStores = stores.filter(store => {
                  // Always include exact zip code matches
                  if (store.zip === searchTerm) {
                    return true;
                  }
                  
                  // If store has coordinates, check distance
                  if (store.lat && store.lng) {
                    const distance = calculateDistance(
                      searchLat, searchLng,
                      store.lat, store.lng
                    );
                    return distance <= searchRadiusMiles;
                  }
                  
                  // If no coordinates, include if zip code matches
                  return store.zip.includes(searchTerm);
                });
                
                console.log('Stores found with distance filtering:', filteredStores.length);
              } else {
                // Geocoding didn't return valid result, keep simple matching results
                console.log('Geocoding unavailable, using zip code matches');
              }
            } catch (geocodeError) {
              // Geocoding failed, but we already have results from simple matching
              console.log('Geocoding failed, using zip code matches:', geocodeError.message);
              // Keep the filteredStores from simple matching above
            }
          }
        }

        console.log('Final results:', filteredStores.length, 'stores');
        renderStores(filteredStores);

        // Option 2: Uncomment below to use a real API instead
        /*
        const response = await fetch(`/api/stores?zip=${searchTerm}`);
        if (!response.ok) throw new Error('API request failed');
        const data = await response.json();
        renderStores(data.stores || []);
        */

        // Scroll to results
        resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch (error) {
        console.error('Search error:', error);
        resultsContainer.innerHTML = `
          <div class="no-results" style="text-align: center; padding: 4rem; color: var(--text-secondary);">
            <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
            <p style="font-size: 1.2rem;">Error searching for stores.</p>
            <p style="margin-top: 0.5rem; font-size: 0.9rem;">Please try again later.</p>
          </div>
        `;
      }
    });
  } else {
    console.error('Search form not found');
  }
});
