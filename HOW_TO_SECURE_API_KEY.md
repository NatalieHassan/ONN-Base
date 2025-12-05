# How to Secure Your Google Maps API Key

## ⚠️ Critical Understanding

**Client-side API keys CANNOT be hidden.** They will always be visible in browser DevTools, network requests, and page source. 

**Security comes from RESTRICTING the key, not hiding it.**

## Step-by-Step: Secure Your API Key

### Step 1: Rotate Your Key (If Exposed)

Since your key is in git history, create a new one:

1. Go to [Google Cloud Console → Credentials](https://console.cloud.google.com/apis/credentials)
2. Click "Create Credentials" → "API Key"
3. Copy the new key
4. **Don't delete the old one yet** (keep it until the new one works)

### Step 2: Restrict the New Key

This is the MOST IMPORTANT step:

1. Click on your new API key to edit it
2. **Application restrictions:**
   - Select "HTTP referrers (web sites)"
   - Click "Add an item"
   - Add your production domain: `https://your-netlify-site.netlify.app/*`
   - Add for local testing: `http://localhost:*`
   - Add: `http://127.0.0.1:*`
   - **DO NOT add `file://*` or wildcards like `*`** - this defeats the purpose!

3. **API restrictions:**
   - Select "Restrict key"
   - Check ONLY "Geocoding API"
   - Uncheck everything else

4. Click "Save"

### Step 3: Test the Restricted Key

1. Update `geocoding-fix.js` with the new key
2. Test on your Netlify site - should work ✅
3. Test from a different domain - should be blocked ❌ (this is good!)
4. Test from localhost - should work ✅

### Step 4: Delete the Old Key

Once the new restricted key works:
1. Go back to Credentials
2. Delete the old exposed key

## Why This Works

Even though the key is visible in your code:
- ✅ Works on your domain (allowed)
- ✅ Works on localhost (allowed for development)
- ❌ Blocked on any other domain (restricted)
- ❌ Can't be used for other APIs (restricted to Geocoding only)

## For Test Files

Test files like `test-api-key.html` should:
- **Option A:** Prompt for the key (user enters it manually)
- **Option B:** Be excluded from git (add to `.gitignore`)
- **Option C:** Use a placeholder: `'YOUR_API_KEY_HERE'`

**Never commit real API keys to test files.**

## Current Status of Your Files

- ❌ `test-api-key.html` - Has hardcoded key (should prompt instead)
- ⚠️ `geocoding-fix.js` - Has key (needed for production, but MUST be restricted)

## Quick Fix for test-api-key.html

The test file should prompt for the key. Here's what it should look like:

```javascript
// Instead of:
const API_KEY = 'AIzaSy...'; // ❌ BAD

// Do this:
async function testAPIKey() {
  const apiKeyInput = document.getElementById('apiKeyInput');
  const API_KEY = apiKeyInput.value.trim(); // ✅ User enters it
  
  if (!API_KEY) {
    alert('Please enter your API key');
    return;
  }
  // ... rest of function
}
```

## Summary

✅ **Secure = Restricted** (in Google Cloud Console)
❌ **Not Secure = Unrestricted** (works from any domain)

Your key is only as secure as its restrictions allow!

