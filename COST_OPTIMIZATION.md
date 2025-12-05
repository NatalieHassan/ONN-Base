# Cost Optimization Guide

## Current API Usage

### What Costs Money:
- **Google Maps Geocoding API** - Converts zip codes to coordinates
- **Cost:** ~$5 per 1,000 requests (after free tier)

### What's FREE:
- ✅ Store data in `data.js` (local file, no API)
- ✅ All search/filtering logic (runs in browser)
- ✅ Hosting on Netlify (free tier available)

## Current Optimizations (Already Implemented)

### ✅ Smart Caching
- Geocoding results are cached
- Same zip code = no new API call
- Saves money on repeat searches

### ✅ Only Geocode When Needed
- First checks for exact zip matches (no API call)
- Only geocodes if no exact matches found
- Skips geocoding if exact matches exist

### ✅ Rate Limiting
- 1 request per second maximum
- Prevents accidental API spam

## Cost-Saving Strategies

### Option 1: Increase Cache Duration
Currently caches forever (until page refresh). You could:
- Store cache in `localStorage` (persists across sessions)
- Reduces API calls for returning users

### Option 2: Pre-populate Common Zip Codes
Add coordinates directly to `data.js` for popular zip codes:
```javascript
{
  id: 88,
  name: "Store Name",
  zip: "90210",
  lat: 34.0901,  // Pre-populated, no geocoding needed
  lng: -118.4065,
  // ...
}
```

### Option 3: Use Free Alternative (Mapbox)
- Mapbox has a free tier (50,000 requests/month)
- Similar functionality to Google Maps
- Would need to update `geocoding-fix.js`

### Option 4: Backend Proxy (Recommended for Scale)
- Move geocoding to your backend
- Better caching control
- Can batch requests
- More secure (API key hidden)

## Hosting Options

### Netlify
- **Free Tier:** 100GB bandwidth, 300 build minutes/month
- **Pro:** $19/month - More bandwidth, better performance
- **Note:** Netlify doesn't charge for API calls - that's Google Maps

### Vercel (I think you meant this, not Vertex)
- **Free Tier:** Similar to Netlify
- **Pro:** $20/month
- **Better for:** Next.js/React apps
- **Note:** Also doesn't charge for API calls

### Vertex (Google Cloud)
- This is Google's AI platform, not a hosting service
- You might mean **Google Cloud Platform** or **Firebase Hosting**

## Recommended Approach

### For Now (Low Traffic):
1. ✅ Keep current setup (it's already optimized)
2. ✅ Monitor API usage in Google Cloud Console
3. ✅ Set up billing alerts ($10, $25, $50 thresholds)

### For Growth:
1. **Move geocoding to backend** (Node.js/Python)
   - Better caching control
   - Can use server-side caching (Redis)
   - API key stays secure

2. **Pre-populate popular zip codes**
   - Add coordinates for top 100 zip codes
   - Reduces API calls significantly

3. **Consider Mapbox** (if hitting Google limits)
   - Free tier: 50K requests/month
   - Good alternative

## Current Monthly Cost Estimate

**Assumptions:**
- 1,000 unique zip code searches/month
- 50% cache hit rate (repeat searches)
- **Actual API calls:** ~500/month
- **Cost:** ~$2.50/month (well within free tier)

**Google Maps Free Tier:**
- $200 free credit/month
- = 40,000 geocoding requests/month free
- You'd need 40K+ searches/month to pay anything

## Action Items

1. ✅ **Already done:** Smart caching, rate limiting
2. 📋 **Optional:** Add localStorage caching (persist across sessions)
3. 📋 **Optional:** Pre-populate top 50 zip codes in `data.js`
4. 📋 **Monitor:** Set up Google Cloud billing alerts

## Bottom Line

**You're already well-optimized!** The current setup should handle thousands of searches/month for free. Only pay if you get 40,000+ unique zip code searches/month (very unlikely for a new app).

