document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.search-form');
  const searchInput = document.querySelector('input[type="search"]');
  const resultsContainer = document.getElementById('results-container');

  // Function to render stores
  function renderStores(storesToRender) {
    resultsContainer.innerHTML = '';

    if (storesToRender.length === 0) {
      resultsContainer.innerHTML = `
        <div class="no-results">
          <i class="fas fa-search-minus"></i>
          <p>No stores found in this area. Try a different zip code (e.g., 10001, 11201).</p>
        </div>
      `;
      return;
    }

    const grid = document.createElement('div');
    grid.className = 'stores-grid';

    storesToRender.forEach(store => {
      const card = document.createElement('div');
      card.className = 'store-card';
      card.innerHTML = `
        <div class="store-image">
          <img src="${store.image}" alt="${store.name}">
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
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();

    if (!searchTerm) return;

    // Simple zip code filtering (exact or partial match)
    const filteredStores = stores.filter(store =>
      store.zip.includes(searchTerm) ||
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    renderStores(filteredStores);

    // Scroll to results
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
