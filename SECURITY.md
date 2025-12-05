# Security Guide - API Keys

## ⚠️ Important Security Notice

**API keys have been exposed in this repository's git history.** If you're using this codebase, you should:

1. **Rotate your API keys immediately** in Google Cloud Console
2. **Restrict your API keys** to only allow requests from your domain
3. **Never commit API keys** to git in the future

## Current Status

### ✅ Fixed Files
- `test-api-key.html` - Now prompts for API key instead of hardcoding

### ⚠️ Files Still Containing API Keys
- `geocoding-fix.js` - Contains Google Maps API key (needed for production)

## Best Practices for API Keys

### For Client-Side Applications

Since JavaScript runs in the browser, API keys will always be visible. However, you can protect them by:

1. **Restrict API Keys in Google Cloud Console:**
   - Go to [Google Cloud Console → Credentials](https://console.cloud.google.com/apis/credentials)
   - Click on your API key
   - Under "Application restrictions":
     - Select "HTTP referrers (web sites)"
     - Add only your production domain: `https://yourdomain.com/*`
     - Add localhost for development: `http://localhost:*`
   - Under "API restrictions":
     - Select "Restrict key"
     - Choose only "Geocoding API" (or whatever APIs you need)

2. **Use Environment Variables (Netlify):**
   - In Netlify dashboard → Site settings → Environment variables
   - Add: `GOOGLE_MAPS_API_KEY` = your key
   - Update `geocoding-fix.js` to read from environment:
     ```javascript
     const GOOGLE_MAPS_API_KEY = window.GOOGLE_MAPS_API_KEY || 'YOUR_KEY_HERE';
     ```
   - Note: For client-side, you'll need to inject this during build time

3. **Rotate Exposed Keys:**
   - If your key was committed to git, create a new one
   - Delete the old key from Google Cloud Console
   - Update all references with the new key

## For Test Files

Test files should **never** contain real API keys. They should:
- Prompt users to enter their own key
- Be excluded from git (add to `.gitignore`)
- Or use placeholder values like `'YOUR_API_KEY_HERE'`

## Next Steps

1. ✅ Rotate your Google Maps API key
2. ✅ Update `geocoding-fix.js` with the new key
3. ✅ Restrict the key to your domain only
4. ✅ Consider using Netlify environment variables for production
5. ✅ Review git history and remove sensitive data if needed

## Removing Keys from Git History

If you need to remove the key from git history (advanced):

```bash
# WARNING: This rewrites history. Only do this if you understand the consequences.
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch geocoding-fix.js test-api-key.html" \
  --prune-empty --tag-name-filter cat -- --all

# Force push (coordinate with team first!)
git push origin --force --all
```

**Better approach:** Just rotate the key and restrict it. The old key in history won't work if properly restricted.

