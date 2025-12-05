# Zip Code Testing Guide

## Test Zip Codes in Your Database

Your store database includes stores in these zip codes:

### NYC Zip Codes to Test:

1. **10001** - Chelsea / NoMad
   - Should find: 3 stores
   - Stores: Vintage Vogue, Chelsea Thrift House, Designer Resale

2. **11201** - Brooklyn Heights / DUMBO
   - Should find: 3 stores
   - Stores: Thrift & Thrive, Brooklyn Flea Market, DUMBO Vintage

3. **10021** - Upper East Side
   - Should find: 2 stores
   - Stores: The Luxe Closet, Michael's Consignment

4. **11211** - Williamsburg
   - Should find: 3 stores
   - Stores: Retro Rewind, Beacon's Closet, Awoke Vintage

5. **10012** - SoHo
   - Should find: 2 stores
   - Stores: Second Chance Boutique, The RealReal

6. **10003** - Union Square / East Village
   - Should find: 2 stores
   - Stores: Urban Exchange, Buffalo Exchange

## What to Test

### Basic Functionality Tests:

1. **Exact Zip Code Match:**
   - Enter: `10001`
   - Expected: Should find 3 stores immediately (uses simple zip matching)
   - Check: Console should show "Stores found with simple matching: 3"

2. **Geocoding Integration:**
   - Enter: `10001`
   - Expected: If geocoding works, should also find stores within 10 miles
   - Check: Console should show "Geocoding successful" or "Geocoding unavailable"
   - Check: Results should include stores from nearby zip codes if within 10 miles

3. **Invalid Zip Code:**
   - Enter: `99999` or `abcde`
   - Expected: "No stores found within 10 miles of this area"
   - Check: Should gracefully handle invalid input

4. **Partial Zip Match:**
   - Enter: `100` (partial)
   - Expected: Should find stores with zip codes starting with 100
   - Check: Should use name/address matching as fallback

5. **Store Name Search:**
   - Enter: `Vintage` or `Thrift`
   - Expected: Should find stores with those words in the name
   - Check: Should work without geocoding

## Console Messages to Look For

Open browser DevTools (F12) → Console tab, and look for:

### ✅ Good Signs:
- `"Searching for: 10001"`
- `"Total stores available: 15"`
- `"Stores found with simple matching: 3"`
- `"Geocoding successful. Searching within 10 miles of: [address]"`
- `"Stores found with distance filtering: X"`

### ⚠️ Warnings (Still Works, But Not Ideal):
- `"Geocoding unavailable, using zip code matches"` - API not working, but fallback works
- `"Geocoding failed, using zip code matches"` - API error, but fallback works
- `"Geocoding API: Over query limit"` - Rate limited, but fallback works

### ❌ Errors (Need Investigation):
- `"Stores data not loaded"` - data.js not loading
- `"Search form not found"` - HTML structure issue
- `"Geocoding API Error: REQUEST_DENIED"` - API key issue

## Testing Checklist

- [ ] Test zip code `10001` - Should find 3 stores
- [ ] Test zip code `11201` - Should find 3 stores  
- [ ] Test zip code `10021` - Should find 2 stores
- [ ] Test zip code `11211` - Should find 3 stores
- [ ] Test zip code `10012` - Should find 2 stores
- [ ] Test zip code `10003` - Should find 2 stores
- [ ] Test invalid zip `99999` - Should show "No stores found"
- [ ] Test store name `Vintage` - Should find multiple stores
- [ ] Check browser console for errors
- [ ] Verify results display correctly
- [ ] Test on mobile/responsive view

## Expected Behavior

### With Geocoding Working:
1. User enters zip code
2. Simple matching finds stores (fast)
3. Geocoding gets coordinates (if API works)
4. Distance filtering expands results to 10-mile radius
5. Results display with smooth animation

### Without Geocoding (Fallback):
1. User enters zip code
2. Simple matching finds stores
3. Geocoding fails/not available
4. Results display using zip code matches only
5. Still works, just no distance filtering

## Quick Test Commands

You can also test in browser console:

```javascript
// Check if stores are loaded
console.log('Stores:', stores.length);

// Test geocoding function
geocodeZipCode('10001').then(result => console.log('Geocode result:', result));

// Test distance calculation
calculateDistance(40.7505, -73.9934, 40.7489, -73.9897);
```

## Troubleshooting

**No results showing?**
- Check browser console for errors
- Verify `data.js` is loading (should see 15 stores)
- Check network tab for failed requests

**Geocoding not working?**
- Check API key restrictions in Google Cloud Console
- Verify Geocoding API is enabled
- Check for rate limiting (OVER_QUERY_LIMIT)
- Fallback to zip matching should still work

**Results showing but wrong?**
- Check console for distance calculations
- Verify store coordinates in `data.js`
- Check if geocoding is returning correct coordinates

