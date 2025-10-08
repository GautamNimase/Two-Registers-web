# Deployment Guide for Two Registers Website

This guide provides deployment instructions for different platforms.

## 🚀 Quick Deploy Options

### 1. Render (Recommended)
- **Service Type**: Static Site
- **Build Command**: `cd frontend && npm ci && npm run build`
- **Publish Directory**: `frontend/dist`
- **Node Version**: 18+

### 2. Vercel
- **Framework Preset**: Vite
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### 3. Netlify
- **Build Command**: `cd frontend && npm ci && npm run build`
- **Publish Directory**: `frontend/dist`
- **Node Version**: 18+

### 4. GitHub Pages
- **Build Command**: `cd frontend && npm ci && npm run build`
- **Source**: GitHub Actions
- **Output Directory**: `frontend/dist`

## 📋 Manual Deployment Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/GautamNimase/Two-Registers-web.git
   cd Two-Registers-web
   ```

2. **Install dependencies**:
   ```bash
   cd frontend
   npm ci
   ```

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Deploy the `dist` folder** to your hosting service.

## 🔧 Environment Variables

No environment variables are required for basic deployment.

## 📁 Build Output

The build process creates a `dist` folder in the frontend directory containing:
- `index.html` - Main HTML file
- `assets/` - CSS and JavaScript bundles
- `images/` - Static assets

## 🛠️ Troubleshooting

### Build Fails
- Ensure Node.js version 18+ is installed
- Run `npm ci` instead of `npm install`
- Check that all dependencies are properly installed

### Deployment Fails
- Verify the publish directory is set to `frontend/dist`
- Ensure the build command includes the frontend directory navigation
- Check that the build completes successfully before deployment

## 📞 Support

For deployment issues, check the platform-specific documentation or contact support.
