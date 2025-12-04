# ONN Base - Deployment Guide

## What I Fixed

Your geospatial search wasn't working due to several issues:
1. **File Naming**: `index.Html` should be `index.html` (case sensitivity matters on servers)
2. **Missing Exports**: Functions weren't properly accessible
3. **Configuration**: Missing Netlify configuration

## Changes Made

### 1. Updated `geocoding.js`
- Uses client-side Mapbox API calls
- Added better error handling and logging
- **Note**: The API key is visible in the client code. This is fine for free/hobby projects, but you should restrict the key in your Mapbox dashboard to your website's URL to prevent misuse.

### 2. Fixed `index.Html` → `index.html`
- Renamed to proper lowercase for server compatibility

### 3. Updated `netlify.toml`
- Added basic build configuration

## How to Deploy

### Option 1: Deploy to Netlify (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Revert to client-side geocoding"
   git push
   ```

2. **In Netlify Dashboard**:
   - Trigger a new deploy if it doesn't happen automatically

3. **Test**: Visit your site and try searching with a zip code like `10001`

## Testing the Search

Try these zip codes:
- `10001` - Chelsea, NYC (should find 3 stores)
- `11201` - Brooklyn Heights (should find 3 stores)
- `10021` - Upper East Side (should find 2 stores)
- `11211` - Williamsburg (should find 3 stores)

## Troubleshooting

### If search still doesn't work:

1. **Open browser console** (F12 or Cmd+Option+I)
2. **Look for errors** - the console.log statements will show what's happening
3. **Common Issues**:
   - **CORS Errors**: If you see CORS errors in the console, check your Mapbox dashboard settings. Ensure your domain (e.g., `your-site.netlify.app`) is added to the allowed URLs for your token.
   - **"Zip code not found"**: Invalid zip code or Mapbox API issue

## Next Steps

After deploying, you can:
1. Add more stores to `data.js`
2. Adjust the search radius (currently 10 miles) in `script.js`
3. Customize the UI in `stylesheets.css`
