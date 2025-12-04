# API Integration Guide for ONN

## Current Status
✅ **Fixed Issues:**
- Added error handling for missing data
- Fixed CSS variable references (`var(--white)` → `var(--text-primary)`)
- Added loading states for better UX
- Improved error messages
- Added proper async/await handling

## Current Implementation
The app currently uses **local mock data** from `data.js`. The search functionality filters stores by:
- Zip code (exact or partial match)
- Store name
- Address

## How to Test
1. Open `index.Html` in your browser
2. Enter a zip code like: `10001`, `11201`, `10021`, `11211`, `10012`, or `10003`
3. Results should display immediately

## Integrating a Real API

### Option 1: Simple Fetch API (Recommended)
To use a real API, uncomment the API code in `script.js` (around line 80-85) and modify it:

```javascript
// Replace the local filtering with:
const response = await fetch(`/api/stores?zip=${searchTerm}`);
if (!response.ok) throw new Error('API request failed');
const data = await response.json();
renderStores(data.stores || []);
```

### Option 2: API Endpoint Examples

**Backend API Endpoint:**
```
GET /api/stores?zip=10001
```

**Expected Response Format:**
```json
{
  "stores": [
    {
      "id": 1,
      "name": "Store Name",
      "address": "123 Street, City, State",
      "zip": "10001",
      "category": "Consignment",
      "image": "https://example.com/image.jpg",
      "description": "Store description",
      "rating": 4.8
    }
  ]
}
```

### Option 3: CORS Issues
If your API is on a different domain, you may need to:
1. Configure CORS on your backend
2. Use a proxy server
3. Use a backend API route that forwards requests

## Troubleshooting

### "Stores data not loaded" Error
- Make sure `data.js` is loaded before `script.js` in `index.Html`
- Check browser console for JavaScript errors
- Verify file paths are correct

### Search Not Working
- Open browser DevTools (F12)
- Check Console tab for errors
- Check Network tab to see if API calls are being made
- Verify the search form exists in the DOM

### No Results Showing
- Check if zip codes in your data match what you're searching
- Verify the filter logic in `script.js`
- Check if `renderStores()` is being called

## Next Steps
1. Set up your backend API endpoint
2. Update the fetch URL in `script.js`
3. Test with real data
4. Add authentication if needed
5. Implement pagination for large result sets

