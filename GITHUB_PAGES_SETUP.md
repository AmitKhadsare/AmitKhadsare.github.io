# GitHub Pages Deployment Guide for Columbia Care Home

This guide will help you deploy your Columbia Care Home website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- The project files ready for deployment

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository: `columbia-care-home`
5. Make sure it's set to "Public"
6. Check "Add a README file"
7. Click "Create repository"

## Step 2: Clone and Setup Your Repository

```bash
# Clone your new repository
git clone https://github.com/YOUR_USERNAME/columbia-care-home.git
cd columbia-care-home

# Copy all your project files into this directory
# (Copy all files from your current project folder)

# Add all files to git
git add .
git commit -m "Initial commit: Columbia Care Home website"
git push origin main
```

## Step 3: Configure Vite for GitHub Pages

The `vite.config.ts` file is already configured with the correct base path:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/columbia-care-home/', // This matches your repository name
  // ... other config
});
```

**Important**: If your repository name is different, update the `base` property to match your repository name.

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"

## Step 5: GitHub Actions Workflow

The `.github/workflows/deploy.yml` file is already configured and will:
- Automatically build your site when you push to the main branch
- Deploy it to GitHub Pages
- Handle all the build process for you

## Step 6: Deploy Your Site

Simply push your code to the main branch:

```bash
git add .
git commit -m "Deploy Columbia Care Home website"
git push origin main
```

## Step 7: Access Your Live Website

After the GitHub Action completes (usually 2-5 minutes), your website will be available at:

```
https://YOUR_USERNAME.github.io/columbia-care-home/
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Updating Your Website

To update your website:

1. Make changes to your files
2. Commit and push to the main branch:

```bash
git add .
git commit -m "Update website content"
git push origin main
```

3. GitHub Actions will automatically rebuild and redeploy your site

## Troubleshooting

### Common Issues:

1. **404 Error**: Make sure the `base` in `vite.config.ts` matches your repository name exactly
2. **Images not loading**: All images are using external URLs (Pexels), so they should work fine
3. **Build fails**: Check the Actions tab in your repository for error details

### Checking Build Status:

1. Go to your repository on GitHub
2. Click the "Actions" tab
3. You'll see the build status of your deployments

### Custom Domain (Optional):

If you want to use a custom domain like `columbiacarehome.com`:

1. Add a `CNAME` file to your repository root with your domain name
2. Configure your domain's DNS to point to GitHub Pages
3. Update the `base` in `vite.config.ts` to `'/'`

## File Structure for GitHub Pages

Your repository should have this structure:

```
columbia-care-home/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── components/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## Support

If you encounter any issues:

1. Check the GitHub Actions logs in the "Actions" tab
2. Ensure all file paths are correct
3. Verify the `base` configuration in `vite.config.ts`
4. Make sure your repository is public

Your Columbia Care Home website should now be live and accessible to visitors worldwide!