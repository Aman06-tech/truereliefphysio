# Deployment Guide - Medical Frontend to Netlify

## 🚀 Quick Deployment Steps

### Method 1: Netlify CLI (Recommended)

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Navigate to project directory**
   ```bash
   cd medical-frontend
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Login to Netlify**
   ```bash
   netlify login
   ```

5. **Deploy to Netlify**
   ```bash
   netlify deploy --prod --dir=.next
   ```

### Method 2: Manual Upload via Netlify Dashboard

1. **Build the project locally**
   ```bash
   cd medical-frontend
   npm run build
   ```

2. **Compress the build folder**
   - Zip the `.next` folder or the entire `medical-frontend` folder

3. **Upload to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign in or create account
   - Drag and drop the zipped folder to deploy

### Method 3: Git Integration

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Medical website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to Netlify dashboard
   - Click "New site from Git"
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`
   - Deploy!

## 📋 Configuration Files

The following files have been created for Netlify deployment:

- `netlify.toml` - Netlify configuration
- `public/_redirects` - Client-side routing support
- `next.config.js` - Next.js optimized for deployment

## 🔧 Environment Variables

If your backend is running on a different URL, add these environment variables in Netlify:

1. Go to Site settings → Environment variables
2. Add:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.com/api
   ```

## 🎯 Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Test appointment booking functionality
- [ ] Verify responsive design on mobile
- [ ] Check all service cards display properly
- [ ] Test navigation between pages

## 📞 Support

If you encounter any issues:
- Check Netlify deploy logs
- Ensure all dependencies are installed
- Verify build commands are correct

## 🌐 Live Site

Once deployed, your site will be available at:
`https://YOUR_SITE_NAME.netlify.app`

## Backend Connection

Remember to update your Django backend CORS settings to allow your Netlify domain:

```python
CORS_ALLOWED_ORIGINS = [
    "https://YOUR_SITE_NAME.netlify.app",
    "http://localhost:3000",  # for local development
]
```