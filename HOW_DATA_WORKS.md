# How Your Store Data Works

## 📍 Current Setup: Local Data File

**All your store data is stored in `data.js` - it's a local JavaScript file, NOT from an API.**

### How It Works:

1. **`data.js`** contains a JavaScript array with all 82 stores:
   ```javascript
   const stores = [
     {
       id: 1,
       name: "Vintage Vogue",
       address: "123 Fashion Ave, New York, NY",
       zip: "10001",
       lat: 40.7505,
       lng: -73.9934,
       // ... more fields
     },
     // ... 81 more stores
   ];
   ```

2. **`index.html`** loads this file:
   ```html
   <script src="data.js"></script>  <!-- Loads all stores -->
   <script src="script.js"></script> <!-- Uses the stores -->
   ```

3. **`script.js`** searches through the local `stores` array:
   - First checks for exact/partial zip code matches
   - If no matches, uses geocoding API to get coordinates
   - Then searches stores within 25 miles

## 🔄 What APIs Are Used?

### ✅ Geocoding API (Google Maps)
- **Purpose:** Converts zip codes to coordinates (lat/lng)
- **When:** Only when searching a zip code that doesn't have exact matches
- **Example:** User searches "90210" → API converts it to coordinates → Finds stores within 25 miles

### ❌ NO Store Data API
- **There is NO API that provides store data**
- All stores are in `data.js`
- To add stores, you edit `data.js` directly

## 📝 To Add More Stores:

**Edit `data.js` directly:**
```javascript
{
  id: 83,  // Next available ID
  name: "New Store Name",
  address: "123 Real St, City, State",
  zip: "12345",
  lat: 40.1234,  // Get from Google Maps
  lng: -73.5678, // Get from Google Maps
  category: "Consignment",
  image: "https://...",
  description: "Store description",
  rating: 4.5
}
```

## 🚀 Future: Moving to an API (Optional)

If you want to move to a backend API later:

1. **Create a backend API** that returns stores:
   ```
   GET /api/stores?zip=10001
   ```

2. **Update `script.js`** to fetch from API instead of using local `data.js`:
   ```javascript
   const response = await fetch(`/api/stores?zip=${searchTerm}`);
   const data = await response.json();
   renderStores(data.stores);
   ```

3. **Keep `data.js`** as a fallback or remove it

## 📊 Current Status:

- ✅ **82 stores** in `data.js`
- ✅ **No backend API needed** - everything works locally
- ✅ **Geocoding API** only used for zip code → coordinates conversion
- ✅ **Works offline** (except for geocoding new zip codes)

## 💡 Summary:

**Store Data = `data.js` file (local)**  
**Geocoding = Google Maps API (only for coordinates)**  
**No Store API = You manage stores in `data.js`**

