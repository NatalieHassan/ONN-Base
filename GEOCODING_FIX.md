# Fixing "Geocoding failed: REQUEST_DENIED" Error

## What This Error Means
The `REQUEST_DENIED` error from Google Geocoding API means:
- ❌ API key is missing or invalid
- ❌ API key has restrictions that block the request
- ❌ Geocoding API is not enabled in your Google Cloud project
- ❌ Billing is not enabled (required for Google Maps APIs)

## Quick Fix: Remove Geocoding (Recommended)

**For your use case, you DON'T need geocoding!** You're just searching stores by zip code, which works perfectly with local data filtering.

If you added geocoding code somewhere, you can remove it and the app will work fine with the current `script.js` implementation.

## If You Want to Keep Geocoding

### Step 1: Get a Google Maps API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable "Geocoding API"
4. Go to "Credentials" → "Create Credentials" → "API Key"
5. Copy your API key

### Step 2: Configure API Key Restrictions (Important!)
1. Click on your API key to edit it
2. Under "Application restrictions":
   - For development: Select "HTTP referrers" and add `http://localhost:*` and `http://127.0.0.1:*`
   - For production: Add your domain (e.g., `https://yourdomain.com/*`)
3. Under "API restrictions":
   - Select "Restrict key" and choose "Geocoding API"
4. Save changes

### Step 3: Enable Billing
- Google Maps APIs require billing to be enabled (even for free tier)
- Go to "Billing" in Google Cloud Console and enable it
- You get $200 free credit per month

### Step 4: Add API Key to Your Code
If you're using geocoding, add your API key:

```javascript
const GOOGLE_MAPS_API_KEY = 'YOUR_ACTUAL_API_KEY_HERE';
```

## Alternative: Use a Different Geocoding Service

If you don't want to use Google Maps API, consider:
- **OpenStreetMap Nominatim** (Free, no API key needed)
- **Mapbox Geocoding API** (Free tier available)
- **Here Geocoding API** (Free tier available)

## Current Status
Your app works perfectly WITHOUT geocoding! The search functionality filters stores by zip code using local data, which is faster and doesn't require any API.

