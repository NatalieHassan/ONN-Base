// Netlify serverless function for geocoding
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { zipCode } = JSON.parse(event.body);

    // Validate zip code
    if (!zipCode || !/^\d{5}$/.test(zipCode)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid zip code format' })
      };
    }

    // Your Mapbox API key (stored securely in environment variables)
    const MAPBOX_API_KEY = process.env.MAPBOX_API_KEY || 'pk.eyJ1Ijoibi1oYXNzYW43IiwiYSI6ImNtaXJ1cnQzZTB2N20yaHB1MnhqZzR0d2EifQ.VMhWXab7SZnnj7A9BJ51gw';

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(zipCode)}.json?access_token=${MAPBOX_API_KEY}&country=US&types=postcode&limit=1`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Geocoding API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.features || data.features.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Zip code not found' })
      };
    }

    const [longitude, latitude] = data.features[0].center;

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ latitude, longitude })
    };
  } catch (error) {
    console.error('Geocoding error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};
