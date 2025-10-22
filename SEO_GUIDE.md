# SEO Implementation Guide for Columbia Care Home

## Sitemap Structure

### 1. Main Sitemap (`sitemap.xml`)
- Contains all main pages with proper priority and change frequency
- Updated automatically during build process
- Includes all service pages, main navigation, and important pages

### 2. Image Sitemap (`image-sitemap.xml`)
- Optimizes image discovery for search engines
- Includes all important images from your site
- Helps with image search rankings

### 3. Sitemap Index (`sitemap-index.xml`)
- Central index file that references all other sitemaps
- Primary sitemap reference in robots.txt

## SEO Best Practices Implemented

### Priority Structure
- **Homepage (/)**: Priority 1.0 - Highest importance
- **Main Pages** (About, Services, Contact): Priority 0.8-0.9
- **Service Pages**: Priority 0.7-0.8
- **Support Pages** (FAQ, Careers): Priority 0.6-0.7
- **Legal Pages** (Privacy, Terms): Priority 0.3

### Change Frequency
- **Homepage**: Weekly updates
- **Content Pages**: Monthly updates
- **Legal Pages**: Yearly updates

## Build Process Integration

The sitemap generation is now integrated into your build process:

```bash
npm run build  # Automatically generates sitemaps
npm run generate-sitemap  # Manual sitemap generation
```

## Search Engine Submission

### Google Search Console
1. Submit your sitemap at: `https://www.columbiacarehome.com/sitemap-index.xml`
2. Monitor indexing status
3. Check for crawl errors

### Bing Webmaster Tools
1. Submit the same sitemap URL
2. Monitor search performance

## Additional SEO Recommendations

### 1. Meta Tags
Ensure each page has:
- Unique title tags (50-60 characters)
- Meta descriptions (150-160 characters)
- Open Graph tags for social sharing

### 2. Structured Data
Consider adding JSON-LD structured data for:
- Local business information
- Service offerings
- Reviews and testimonials

### 3. Performance Optimization
- Optimize images (already using .avif format)
- Implement lazy loading
- Minimize CSS/JS bundles

### 4. Local SEO
- Ensure NAP (Name, Address, Phone) consistency
- Add local business schema markup
- Optimize for "care home Columbia MD" keywords

## Monitoring and Maintenance

### Regular Tasks
1. **Monthly**: Check sitemap generation during builds
2. **Quarterly**: Review and update page priorities
3. **Annually**: Update lastmod dates and review structure

### Tools to Use
- Google Search Console
- Bing Webmaster Tools
- Screaming Frog SEO Spider
- GTmetrix for performance

## File Structure
```
public/
├── sitemap.xml          # Main sitemap
├── image-sitemap.xml    # Image sitemap
├── sitemap-index.xml    # Sitemap index
└── robots.txt           # Updated with sitemap references

scripts/
├── generate-sitemap.js      # Main sitemap generator
├── generate-image-sitemap.js # Image sitemap generator
└── generate-sitemap-index.js # Sitemap index generator
```

## Next Steps

1. **Deploy the changes** to your live site
2. **Submit sitemaps** to Google Search Console and Bing
3. **Monitor indexing** progress
4. **Track rankings** for target keywords
5. **Regular updates** to sitemap content as you add new pages

The sitemap will automatically update whenever you run the build process, ensuring search engines always have the latest information about your site structure.
