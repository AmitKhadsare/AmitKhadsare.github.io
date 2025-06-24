# Columbia Care Home Website

A modern, responsive website for Columbia Care Home - a senior care facility in Columbia, South Carolina. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Accessibility**: Built with accessibility best practices
- **Performance**: Optimized for fast loading and smooth interactions
- **SEO Friendly**: Structured for search engine optimization

## Sections

- **Header**: Navigation with contact information
- **Hero**: Compelling introduction with call-to-action
- **About**: Company information and statistics
- **Services**: Comprehensive care services offered
- **Care Plans**: Detailed pricing and service tiers
- **Testimonials**: Customer reviews and ratings
- **Contact**: Contact form and location information
- **Footer**: Additional links and company information

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/columbia-care-home.git
cd columbia-care-home
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project is ready for deployment on various platforms:

- **GitHub Pages**: Use the built files from the `dist` directory
- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Import your GitHub repository for seamless deployment

## Customization

### Images
All images are sourced from Pexels and show diverse healthcare professionals caring for elderly patients. To replace images:

1. Find new images on Pexels or other stock photo sites
2. Update the image URLs in the respective component files
3. Ensure images maintain the same aspect ratios for best results

### Content
Update content by modifying the respective component files:
- `src/components/Hero.tsx` - Main hero section
- `src/components/About.tsx` - About section content
- `src/components/Services.tsx` - Services information
- `src/components/CarePlans.tsx` - Pricing and plans
- `src/components/Contact.tsx` - Contact information

### Styling
The project uses Tailwind CSS for styling. Customize colors, fonts, and spacing by:
1. Modifying `tailwind.config.js`
2. Updating component classes
3. Adding custom CSS in `src/index.css`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support or questions about this website, please contact:
- Email: info@columbiacarehome.com
- Phone: (555) 123-4567