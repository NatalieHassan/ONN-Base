# ONN Base - Deployment Guide

## Major Update: Switched to Google Maps API

To provide nationwide coverage for thrift and consignment stores, we have switched from a static data file to the **Google Places API**.

## ⚠️ Action Required: Add Your API Key

The application currently has a placeholder for the API Key. **You must replace it for the search to work.**

### 1. Get a Google Maps API Key
1.  Go to the [Google Cloud Console](https://console.cloud.google.com/).
2.  Create a new project (e.g., "ONN-Base").
3.  Enable the following APIs:
    *   **Maps JavaScript API**
    *   **Places API**
    *   **Geocoding API**
4.  Create Credentials > **API Key**.
5.  (Note: Google requires a billing account to be linked, even for the free tier).

### 2. Update the Code
1.  Open `index.html`.
2.  Find line ~74:
    ```html
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_API_KEY&libraries=places"></script>
    ```
3.  Replace `YOUR_GOOGLE_API_KEY` with your actual key (e.g., `AIzaSy...`).

## How it Works Now
- **Nationwide Search**: You can enter any zip code, city, or address in the US (or world).
- **Real-Time Data**: The app searches Google Maps for "thrift store", "consignment shop", and "vintage clothing" near that location.
- **No Manual Data**: You no longer need to update `data.js`.

## Deployment
1.  After updating the API key in `index.html`:
    ```bash
    git add index.html
    git commit -m "Add Google Maps API Key"
    git push
    ```
2.  Netlify will auto-deploy the changes.

## Troubleshooting
- **"Google Maps API not loaded"**: Check that you replaced the placeholder key in `index.html`.
- **"ApiNotActivatedMapError"**: Make sure you enabled *all three* APIs listed above in the Google Cloud Console.
- **"BillingNotEnabledMapError"**: Ensure you have a billing account linked to your Google Cloud project.
