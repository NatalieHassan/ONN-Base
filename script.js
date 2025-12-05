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

  // Debug: Log store count and sample zip codes on page load
  console.log('✅ Stores loaded successfully!');
  console.log('Total stores:', stores.length);
  console.log('Sample zip codes:', stores.slice(0, 5).map(s => s.zip));
  const buffaloStores = stores.filter(s => s.zip && (s.zip.startsWith('142') || s.zip.includes('142')));
  console.log('Buffalo area zip codes (142xx):', buffaloStores.length, 'stores');
  if (buffaloStores.length > 0) {
    console.log('Buffalo stores:', buffaloStores.map(s => `${s.name} - ${s.zip}`));
  } else {
    console.warn('⚠️ No Buffalo stores found! Checking all zip codes...');
    const allZips = stores.map(s => s.zip).filter(Boolean);
    console.log('All unique zip codes:', [...new Set(allZips)].sort());
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
  function renderStores(storesToRender, searchLocation = null) {
    resultsContainer.innerHTML = '';

    if (storesToRender.length === 0) {
      // Check if search location is far from NYC (roughly beyond 50 miles)
      let isFarFromNYC = false;
      let distanceMessage = '';
      
      if (searchLocation && searchLocation.lat && searchLocation.lng) {
        // NYC approximate center: 40.7128, -74.0060
        const nycLat = 40.7128;
        const nycLng = -74.0060;
        const distanceFromNYC = calculateDistance(
          searchLocation.lat, searchLocation.lng,
          nycLat, nycLng
        );
        
        if (distanceFromNYC > 50) {
          isFarFromNYC = true;
          distanceMessage = `This location is approximately ${Math.round(distanceFromNYC)} miles from New York City.`;
        }
      }
      
      let message = '';
      if (isFarFromNYC) {
        message = `
          <div class="no-results" style="text-align: center; padding: 4rem; color: var(--text-secondary);">
            <i class="fas fa-map-marker-alt" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5; color: var(--accent-gold);"></i>
            <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">No stores found in this area.</p>
            <p style="font-size: 1rem; margin-bottom: 1rem; color: var(--text-secondary);">${distanceMessage}</p>
            <p style="font-size: 1rem; margin-bottom: 1.5rem;"><strong>ONN currently serves the New York City area only.</strong></p>
            <div style="background: rgba(212, 175, 55, 0.1); padding: 1.5rem; border-radius: 8px; margin-top: 2rem; border: 1px solid rgba(212, 175, 55, 0.3);">
              <p style="font-size: 0.95rem; margin-bottom: 1rem; color: var(--accent-gold);"><strong>Try searching NYC zip codes:</strong></p>
              <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center;">
                <span style="background: rgba(255, 255, 255, 0.1); padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; transition: all 0.3s;" onclick="document.querySelector('input[type=\\'search\\']').value='10001'; document.querySelector('.search-form').dispatchEvent(new Event('submit', {bubbles: true}));">10001</span>
                <span style="background: rgba(255, 255, 255, 0.1); padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;" onclick="document.querySelector('input[type=\\'search\\']').value='11201'; document.querySelector('.search-form').dispatchEvent(new Event('submit', {bubbles: true}));">11201</span>
                <span style="background: rgba(255, 255, 255, 0.1); padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;" onclick="document.querySelector('input[type=\\'search\\']').value='10021'; document.querySelector('.search-form').dispatchEvent(new Event('submit', {bubbles: true}));">10021</span>
                <span style="background: rgba(255, 255, 255, 0.1); padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;" onclick="document.querySelector('input[type=\\'search\\']').value='11211'; document.querySelector('.search-form').dispatchEvent(new Event('submit', {bubbles: true}));">11211</span>
                <span style="background: rgba(255, 255, 255, 0.1); padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;" onclick="document.querySelector('input[type=\\'search\\']').value='10012'; document.querySelector('.search-form').dispatchEvent(new Event('submit', {bubbles: true}));">10012</span>
                <span style="background: rgba(255, 255, 255, 0.1); padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;" onclick="document.querySelector('input[type=\\'search\\']').value='10003'; document.querySelector('.search-form').dispatchEvent(new Event('submit', {bubbles: true}));">10003</span>
              </div>
            </div>
          </div>
        `;
      } else {
        message = `
          <div class="no-results" style="text-align: center; padding: 4rem; color: var(--text-secondary);">
            <i class="fas fa-search-minus" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
            <p style="font-size: 1.2rem;">No stores found within 10 miles of this area.</p>
            <p style="margin-top: 0.5rem; font-size: 0.9rem;">Try a different zip code (e.g., 10001, 11201, 10021, 11211, 10012, 10003).</p>
          </div>
        `;
      }
      
      resultsContainer.innerHTML = message;
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
        let searchLocation = null; // Store geocoded location for better error messages
        const searchRadiusMiles = 10; // Search radius in miles

        console.log('Searching for:', searchTerm);
        console.log('Total stores available:', stores.length);

        // Always start with simple zip code/name/address matching (fast and reliable)
        // This handles partial zip codes (e.g., "142" will match "14215", "14222", etc.)
        filteredStores = stores.filter(store => {
          // Check if zip code contains the search term (works for partial matches like "142")
          const zipMatch = store.zip && store.zip.toString().includes(searchTerm);
          const nameMatch = store.name && store.name.toLowerCase().includes(searchTerm.toLowerCase());
          const addressMatch = store.address && store.address.toLowerCase().includes(searchTerm.toLowerCase());
          return zipMatch || nameMatch || addressMatch;
        });

        console.log('🔍 Search term:', searchTerm, '(type:', typeof searchTerm, ')');
        console.log('📊 Total stores in database:', stores.length);
        console.log('✅ Stores found with simple matching:', filteredStores.length);
        
        if (filteredStores.length > 0) {
          console.log('📍 Matching stores:', filteredStores.map(s => `${s.name} (${s.zip})`));
        } else {
          // Debug: show zip codes that should match
          const testMatch = stores.filter(s => {
            if (!s.zip) return false;
            const zipStr = s.zip.toString();
            return zipStr.includes(searchTerm) || zipStr.startsWith(searchTerm);
          });
          console.log('⚠️ Debug - Zip codes containing "' + searchTerm + '":', testMatch.length, 'stores');
          if (testMatch.length > 0) {
            console.log('   Should have found:', testMatch.map(s => `${s.name} (${s.zip})`));
            console.error('❌ BUG: Stores exist but filter is not finding them!');
            // Force add them for debugging
            filteredStores = testMatch;
            console.log('🔧 Temporarily adding stores for debugging:', filteredStores.length);
          } else {
            console.log('📋 Sample zip codes in database:', stores.slice(0, 20).map(s => s.zip));
            console.log('📋 All zip codes containing "142":', stores.filter(s => s.zip && s.zip.toString().includes('142')).map(s => s.zip));
          }
        }

        // Try geocoding to get location (even if no simple matches, for better error messages)
        // This helps us show helpful messages for non-NYC zip codes
        if (typeof geocodeZipCode !== 'undefined' && typeof isValidZipCodeFormat !== 'undefined') {
          if (isValidZipCodeFormat(searchTerm)) {
            try {
              // Get coordinates for the search zip code
              const geocodeResult = await geocodeZipCode(searchTerm);
              
              if (geocodeResult && geocodeResult.valid && geocodeResult.location) {
                const searchLat = geocodeResult.location.lat;
                const searchLng = geocodeResult.location.lng;
                
                console.log('Geocoding successful. Searching within', searchRadiusMiles, 'miles of:', geocodeResult.address);
                
                // Store search location for better error messaging
                searchLocation = {
                  lat: searchLat,
                  lng: searchLng,
                  address: geocodeResult.address
                };
                
                // If we had simple matches, enhance with distance filtering
                if (filteredStores.length > 0) {
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
                }
                // If no simple matches, filteredStores stays empty, but we have searchLocation for better error message
              } else {
                // Geocoding didn't return valid result, keep simple matching results
                console.log('Geocoding unavailable or rate limited, using zip code matches');
              }
            } catch (geocodeError) {
              // Geocoding failed, but we already have results from simple matching
              console.log('Geocoding failed, using zip code matches:', geocodeError.message);
              // Keep the filteredStores from simple matching above
            }
          } else {
            // Not a valid zip code format, keep simple name/address matches
            console.log('Not a valid zip code format, using name/address matches');
          }
        }

        console.log('Final results:', filteredStores.length, 'stores');
        renderStores(filteredStores, searchLocation);

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
