# How to Check if Your API Key is Secured

## Quick Check: Is Your Key Restricted?

### Step 1: Go to Google Cloud Console
1. Visit: https://console.cloud.google.com/apis/credentials
2. Find your API key: `AIzaSyBNCkA17FuQrsLjToDkdWX_3Z3UHWVId3Q`
3. Click on it to view details

### Step 2: Check Application Restrictions

Look for "Application restrictions" section. You should see:

✅ **SECURE** if it shows:
- "HTTP referrers (web sites)" is selected
- Your Netlify domain is listed: `https://your-site.netlify.app/*`
- `http://localhost:*` is listed (for local testing)
- **NOT** set to "None" (this is insecure!)

❌ **INSECURE** if it shows:
- "None" - Key works from anywhere (BAD!)
- No restrictions listed

### Step 3: Check API Restrictions

Look for "API restrictions" section. You should see:

✅ **SECURE** if it shows:
- "Restrict key" is selected
- Only "Geocoding API" is checked
- Other APIs are unchecked

❌ **INSECURE** if it shows:
- "Don't restrict key" - Key can access all APIs (BAD!)
- Multiple APIs checked (unnecessary exposure)

## What to Do If Not Restricted

### If "Application restrictions" = None:
1. Click "Edit" on your API key
2. Under "Application restrictions":
   - Select "HTTP referrers (web sites)"
   - Click "Add an item"
   - Enter: `https://your-netlify-site.netlify.app/*` (replace with your actual domain)
   - Add: `http://localhost:*`
   - Add: `http://127.0.0.1:*`
3. Click "Save"

### If "API restrictions" = Don't restrict:
1. Click "Edit" on your API key
2. Under "API restrictions":
   - Select "Restrict key"
   - Check ONLY "Geocoding API"
   - Uncheck everything else
3. Click "Save"

## Test Your Restrictions

After setting restrictions, test:

1. **From your Netlify site:** Should work ✅
2. **From localhost:** Should work ✅
3. **From a different domain:** Should be blocked ❌ (this is good!)

## Current Status

Your key: `AIzaSyBNCkA17FuQrsLjToDkdWX_3Z3UHWVId3Q`

**To verify it's secure:**
- [ ] Check Application restrictions (should be HTTP referrers, not None)
- [ ] Check API restrictions (should be Geocoding API only)
- [ ] Test from your production site (should work)
- [ ] Test from a different domain (should be blocked)

## Note About Test Files

The `test-api-key.html` file has the key hardcoded. This is okay IF:
- ✅ The key is properly restricted (as above)
- ✅ The test file is only used locally
- ⚠️ Consider adding it to `.gitignore` if you don't want it in git

Since the key is restricted, even if someone sees it in the test file, they can't use it from their own domain.

