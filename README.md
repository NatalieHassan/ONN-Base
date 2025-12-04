# ONN - Affordable Luxury Fashion Search

ONN is a premium search tool for consignment and thrift stores, designed with a luxe, artistic, and modern aesthetic.

## Features

-   **Geospatial Search**: Find stores within a radius of any US zip code using real distance calculations
-   **Distance-Based Results**: Stores sorted by proximity with distance displayed
-   **Luxe UI**: High-end design featuring dark mode, parallax effects, and smooth animations
-   **Responsive**: Fully optimized for desktop and mobile devices
-   **Real-Time Geocoding**: Powered by Mapbox Geocoding API

## Setup Instructions

### 1. Get a Free Mapbox API Key

1. Go to [https://www.mapbox.com/](https://www.mapbox.com/)
2. Click **Sign up** (free tier includes 100,000 requests/month)
3. After signing in, go to your [Account page](https://account.mapbox.com/)
4. Copy your **Default public token**

### 2. Add Your API Key

Open `geocoding.js` and replace `YOUR_MAPBOX_API_KEY_HERE` with your actual API key:

```javascript
const MAPBOX_CONFIG = {
  API_KEY: 'pk.eyJ1IjoieW91cnVzZXJuYW1lIiwi...', // Your actual key here
  BASE_URL: 'https://api.mapbox.com/geocoding/v5/mapbox.places'
};
```

### 3. Run Locally

1.  Clone or download the repository
2.  Open `index.html` in your web browser
3.  Enter any US zip code to find nearby stores

## Project Structure

-   `index.html`: Main application structure
-   `stylesheets.css`: Custom styling with CSS variables and animations
-   `script.js`: Search logic and UI interactions
-   `data.js`: Store database with coordinates
-   `geospatial.js`: Distance calculation utilities (Haversine formula)
-   `geocoding.js`: Mapbox API integration for zip code lookup

## How It Works

1. User enters a zip code
2. Mapbox API converts zip code to latitude/longitude
3. Haversine formula calculates distance to all stores
4. Results filtered by 10-mile radius and sorted by distance
5. Distance displayed on each store card

## Credits

-   Design: ONN Creative Team
-   Images: Unsplash & Local Assets
-   Geocoding: Mapbox API
