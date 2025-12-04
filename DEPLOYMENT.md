# ONN Base - Deployment Guide

## What I Fixed

Your geospatial search wasn't working due to several issues:

1. **CORS Issues**: Direct API calls to Mapbox from the browser were being blocked
2. **API Key Security**: The API key was exposed in client-side code
3. **File Naming**: `index.Html` should be `index.html` (case sensitivity matters on servers)
4. **Missing Configuration**: Netlify functions directory wasn't configured

## Changes Made

### 1. Created Netlify Serverless Function
- **File**: `netlify/functions/geocode.js`
- **Purpose**: Handles geocoding server-side to avoid CORS and protect API key
- **How it works**: Your frontend calls this function instead of Mapbox directly

### 2. Updated `geocoding.js`
- Now calls the Netlify function instead of making direct API calls
- Added better error handling and logging
- Removed exposed API key from client code

### 3. Fixed `index.Html` → `index.html`
- Renamed to proper lowercase for server compatibility

### 4. Updated `netlify.toml`
- Added functions directory configuration

### 5. Added `package.json`
- Required for Netlify function dependencies

## How to Deploy

### Option 1: Deploy to Netlify (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Fix geospatial search with Netlify functions"
   git push
   ```

2. **In Netlify Dashboard**:
   - Go to your site settings
   - Navigate to "Environment variables"
   - Add: `MAPBOX_API_KEY` = `pk.eyJ1Ijoibi1oYXNzYW43IiwiYSI6ImNtaXJ1cnQzZTB2N20zaHB1MnhqZzR0d2EifQ.VMhWXab7SZnnj7A9BJ51gw`
   - Trigger a new deploy

3. **Test**: Visit your site and try searching with a zip code like `10001`

### Option 2: Test Locally with Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Run locally**:
   ```bash
   cd /Users/nataliehassan_admin/Documents/GitHub/ONN-Base
   netlify dev
   ```

3. **Test**: Open `http://localhost:8888` and try searching

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
3. **Check these common issues**:
   - Netlify function deployed? (Check Netlify dashboard → Functions)
   - Environment variable set? (Check Netlify dashboard → Site settings → Environment variables)
   - Any CORS errors in console?

### Common Error Messages:

- **"Geocoding service not configured"**: Netlify function isn't deployed yet
- **"404 on /.netlify/functions/geocode"**: Functions directory not configured properly
- **"Zip code not found"**: Invalid zip code or Mapbox API issue

## Next Steps

After deploying, you can:
1. Add more stores to `data.js`
2. Adjust the search radius (currently 10 miles) in `script.js`
3. Customize the UI in `stylesheets.css`
4. Add filters by category or rating

## Need Help?

Check the browser console for detailed error messages. All functions now have console.log statements to help debug issues.
