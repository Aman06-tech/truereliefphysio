# Netlify Deployment Fix Guide

## 🚨 Issue: Page Not Found Error

The "page not found" error on Netlify is typically caused by incorrect build configuration. Here are the **exact steps** to fix your deployment:

## ✅ Solution 1: Update Netlify Site Settings (Recommended)

### In Netlify Dashboard:

1. **Go to Site Settings → Build & Deploy → Build Settings**

2. **Update Build Settings:**
   ```
   Base directory: medical-frontend
   Build command: npm run build
   Publish directory: medical-frontend/.next
   ```

3. **Environment Variables:**
   - Add: `NODE_VERSION` = `18`
   - Add: `NEXT_PUBLIC_API_URL` = `http://localhost:8000/api` (or your backend URL)

4. **Deploy Settings:**
   - Branch to deploy: `main`
   - Auto deploy: `Enabled`

## ✅ Solution 2: Manual Build and Deploy

If automated builds aren't working:

1. **Build locally:**
   ```bash
   cd medical-frontend
   npm run build
   ```

2. **Zip the `.next` folder**

3. **Manual Deploy:**
   - Go to Netlify Dashboard
   - Drag and drop the `.next` folder to the deploy area

## ✅ Solution 3: Static Export (Alternative)

If you prefer static hosting:

1. **Update `next.config.js`:**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true,
     },
     distDir: 'out'
   }
   module.exports = nextConfig
   ```

2. **Update Netlify Settings:**
   ```
   Base directory: medical-frontend
   Build command: npm run build
   Publish directory: medical-frontend/out
   ```

## 🔧 Current Configuration Files

### netlify.toml (Root Level)
```toml
[build]
  publish = "medical-frontend/.next"
  command = "cd medical-frontend && npm ci && npm run build"
  base = "."

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}
module.exports = nextConfig
```

## 🎯 Most Common Fixes

1. **Wrong Publish Directory**:
   - ❌ Wrong: `out` or `.`
   - ✅ Correct: `medical-frontend/.next`

2. **Wrong Build Command**:
   - ❌ Wrong: `npm run build`
   - ✅ Correct: `cd medical-frontend && npm ci && npm run build`

3. **Missing Base Directory**:
   - ✅ Set to: `medical-frontend`

4. **Node Version Issues**:
   - ✅ Set `NODE_VERSION = 18`

## 🚀 Quick Fix Steps

1. **Delete current site** and create new one
2. **Connect GitHub repo**: `truereliefphysio`
3. **Set build settings** exactly as shown above
4. **Deploy**

## 📞 Final Notes

- The website has 43+ services and is fully functional
- All components are working locally
- The issue is purely deployment configuration
- Backend integration will work once frontend is deployed

## 🌐 Expected Result

Once fixed, your site will show:
- Professional physiotherapy website
- Beautiful service cards with pricing
- Working appointment booking system
- Responsive design for all devices

The content is ready - it's just a deployment configuration issue!