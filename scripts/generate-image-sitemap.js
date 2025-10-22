import fs from 'fs';
import path from 'path';

// Define images that should be included in the image sitemap
const imageRoutes = [
  {
    path: '/',
    images: [
      '/main.avif',
      '/assets/main.avif'
    ]
  },
  {
    path: '/about-us',
    images: [
      '/assets/aboutus.avif',
      '/assets/family.avif'
    ]
  },
  {
    path: '/facility',
    images: [
      '/assets/carehome.avif',
      '/assets/our-home-front-view.jpg',
      // Drone Aerial Photos
      '/assets/Facility/Drone Aerial Photos/aerial-front-of-home.jpg',
      '/assets/Facility/Drone Aerial Photos/aerial-front-and-driveway.jpg',
      '/assets/Facility/Drone Aerial Photos/aerial-front-wooded-surroundings.jpg',
      '/assets/Facility/Drone Aerial Photos/aerial-high-angle-front-view.jpg',
      '/assets/Facility/Drone Aerial Photos/aerial-top-down-front-property.jpg',
      '/assets/Facility/Drone Aerial Photos/aerial-birds-eye-view-front.jpg',
      '/assets/Facility/Drone Aerial Photos/aerial-property-overview.jpg',
      '/assets/Facility/Drone Aerial Photos/aerial-backyard-and-deck.jpg',
      '/assets/Facility/Drone Aerial Photos/aerial-backyard-wooded-lot.jpg',
      '/assets/Facility/Drone Aerial Photos/aerial-rear-of-home.jpg',
      // Our Home (Exterior)
      '/assets/Facility/Our Home (Exterior)/our-home-front-view.jpg',
      '/assets/Facility/Our Home (Exterior)/our-home-driveway-and-entrance.jpg',
      '/assets/Facility/Our Home (Exterior)/our-home-front-exterior-and-driveway.jpg',
      '/assets/Facility/Our Home (Exterior)/our-home-backyard-and-deck.jpg',
      '/assets/Facility/Our Home (Exterior)/our-home-backyard-under-deck.jpg',
      '/assets/Facility/Our Home (Exterior)/our-home-deck-seating-area.jpg',
      '/assets/Facility/Our Home (Exterior)/our-home-deck-patio-set.jpg',
      '/assets/Facility/Our Home (Exterior)/our-home-deck-and-house-exterior.jpg',
      '/assets/Facility/Our Home (Exterior)/our-home-deck-with-wooded-view.jpg',
      // Main Hall (Living & Common Areas)
      '/assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-living-area-and-windows.jpg',
      '/assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-open-concept-view.jpg',
      '/assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-living-room-and-kitchen.jpg',
      '/assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-entrance-hallway.jpg',
      '/assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-front-entrance.jpg',
      '/assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-first-floor-room-entrance-1.jpg',
      '/assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-first-floor-room-entrance-2.jpg',
      '/assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-upstairs-hallway.jpg',
      '/assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-upstairs-landing.jpg',
      '/assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-upstairs-windows.jpg',
      '/assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-fireplace-and-tv-area.jpg',
      '/assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-living-room-seating.jpg',
      '/assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-view-towards-stairs.jpg',
      '/assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-dining-area-and-deck-access.jpg',
      '/assets/Facility/Our Main Hall (Living & Common Areas)/main-hall-upstairs-overlook.jpg',
      // Kitchen
      '/assets/Facility/Our Kitchen/kitchen-main-view.jpg',
      '/assets/Facility/Our Kitchen/kitchen-island-and-sink.jpg',
      '/assets/Facility/Our Kitchen/kitchen-sink-and-cooktop.jpg',
      '/assets/Facility/Our Kitchen/kitchen-appliances-and-island.jpg',
      '/assets/Facility/Our Kitchen/kitchen-and-dining-area.jpg',
      '/assets/Facility/Our Kitchen/kitchen-looking-towards-living-area.jpg',
      '/assets/Facility/Our Kitchen/dining-area-looking-towards-living-room.jpg',
      // Bedrooms
      '/assets/Facility/Our Bedrooms/bedroom-1-main-view.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-1-natural-light.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-1-view-to-hall.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-3-bay-windows.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-3-main-view.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-3-view-to-hall.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-tv.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-sitting-room.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-upstairs-lavender.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-and-bathroom-entrance.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-full-view.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-seating.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-sitting-area.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-upstairs-maroon-main-view.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-upstairs-maroon-and-closet.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-upstairs-maroon-view-to-hall.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-upstairs-peach-main-view.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-upstairs-peach-view-to-hall.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-upstairs-lavender-tv-and-hallway.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-window-nook.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-view-to-amenities.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-looking-in.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-and-hallway.jpg',
      '/assets/Facility/Our Bedrooms/bedroom-upstairs-master-suite-room-divider.jpg',
      // Home Features & Amenities
      '/assets/Facility/Home Features & Amenities/amenities-bedroom-1-private-bathroom.jpg',
      '/assets/Facility/Home Features & Amenities/amenities-bedroom-1-walk-in-shower.jpg',
      '/assets/Facility/Home Features & Amenities/amenities-laundry-room.jpg',
      '/assets/Facility/Home Features & Amenities/amenities-storage-closet.jpg',
      '/assets/Facility/Home Features & Amenities/amenities-upstairs-master-bathroom-vanity.jpg',
      '/assets/Facility/Home Features & Amenities/amenities-upstairs-master-bathroom-tub.jpg',
      '/assets/Facility/Home Features & Amenities/amenities-upstairs-master-bathroom-shower.jpg',
      '/assets/Facility/Home Features & Amenities/amenities-upstairs-shared-bathroom.jpg',
      '/assets/Facility/Home Features & Amenities/amenities-upstairs-master-walk-in-closet.jpg',
      '/assets/Facility/Home Features & Amenities/amenities-basement-bonus-room.jpg',
      '/assets/Facility/Home Features & Amenities/bedroom-basement-main.jpg',
      '/assets/Facility/Home Features & Amenities/bedroom-basement-view-to-hall.jpg',
      '/assets/Facility/Home Features & Amenities/amenities-basement-bathroom.jpg',
      // Gym & Therapy
      '/assets/Facility/Our Gym & Therapy/gym-therapy-room-main-view.jpg',
      '/assets/Facility/Our Gym & Therapy/gym-therapy-room-equipment.jpg',
      '/assets/Facility/Our Gym & Therapy/gym-therapy-room-exercise-area.jpg',
      '/assets/Facility/Our Gym & Therapy/gym-therapy-room-rehabilitation-equipment.jpg',
      '/assets/Facility/Our Gym & Therapy/gym-therapy-room-therapy-station.jpg'
    ]
  },
  {
    path: '/rehabilitation',
    images: [
      '/assets/physical_therapy.avif',
      '/assets/physical-therapy_converted.avif'
    ]
  },
  {
    path: '/memory-care',
    images: [
      '/assets/mentalhealth.avif'
    ]
  },
  {
    path: '/personal-assistance',
    images: [
      '/assets/dignifiedpersonalassistance.avif',
      '/assets/male-social-worker-taking-care-old-woman_converted.avif'
    ]
  },
  {
    path: '/residential-care',
    images: [
      '/assets/comforting_homelike_haven.avif'
    ]
  },
  {
    path: '/dietary',
    images: [
      '/assets/Nourishing_Body_Soul.avif'
    ]
  },
  {
    path: '/recreation',
    images: [
      '/assets/vibrantlifeandwelness.avif',
      '/assets/group_activity_converted.avif',
      '/assets/group_converted.avif'
    ]
  },
  {
    path: '/health-safety',
    images: [
      '/assets/proactivehealthsafety.avif'
    ]
  },
  {
    path: '/family-partnership',
    images: [
      '/assets/family.avif'
    ]
  }
];

const baseUrl = 'https://www.columbiacarehome.com';
const currentDate = new Date().toISOString().split('T')[0];

// Escape XML special characters
const escapeXml = (str) => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

// Generate image sitemap
const generateImageSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  imageRoutes.forEach(route => {
    sitemap += `
  <url>
    <loc>${escapeXml(baseUrl + route.path)}</loc>
    <lastmod>${currentDate}</lastmod>`;
    
    route.images.forEach(image => {
      sitemap += `
    <image:image>
      <image:loc>${escapeXml(baseUrl + image)}</image:loc>
    </image:image>`;
    });
    
    sitemap += `
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
};

// Write image sitemap to public directory
const imageSitemapContent = generateImageSitemap();
const publicDir = path.join(process.cwd(), 'public');
const imageSitemapPath = path.join(publicDir, 'image-sitemap.xml');

fs.writeFileSync(imageSitemapPath, imageSitemapContent);
console.log('✅ Image sitemap generated successfully at:', imageSitemapPath);
