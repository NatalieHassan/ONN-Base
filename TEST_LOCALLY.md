# How to Test Locally (Without Netlify)

## Quick Start

I've started a local server for you! Open your browser and go to:

**http://localhost:8000**

## What's Running

- Local web server on port 8000
- Serves all your files (HTML, CSS, JS)
- No API calls (geocoding is disabled)
- Search works with local data only

## Testing the Search

1. Open: **http://localhost:8000**
2. Try these searches:
   - `14215` - Should find Buffalo stores
   - `142` - Should find all 6 Buffalo stores
   - `10001` - Should find NYC stores
   - `20001` - Should find DC stores

## Stop the Server

When you're done testing, press `Ctrl+C` in the terminal to stop the server.

## Alternative: Open File Directly

You can also just open `index.html` directly in your browser:
- Double-click `index.html` in Finder
- Or drag it to your browser

Note: Some browsers may have security restrictions when opening files directly, so the local server method is recommended.

## What to Check

1. ✅ Search for `14215` - Should show Buffalo stores
2. ✅ Search for `142` - Should show all Buffalo stores (14215, 14222, etc.)
3. ✅ Check browser console (F12) - Should show "Total stores: 56"
4. ✅ No API calls in Network tab - Should see no Google Maps requests

## Troubleshooting

**If you see "No stores found":**
- Open browser console (F12)
- Check for errors
- Verify it says "Total stores: 56"
- Check if it says "Buffalo area zip codes (142xx): 6 stores"

**If the server doesn't start:**
- Make sure port 8000 isn't already in use
- Try a different port: `python3 -m http.server 8080`
- Then go to: http://localhost:8080

