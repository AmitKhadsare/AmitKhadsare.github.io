// Structured Data for Columbia Care Home

export const localBusinessSchema = {
  "@type": "SeniorCareFacility",
  "@id": "https://www.columbiacarehome.com/#organization",
  "name": "Columbia Care Home",
  "alternateName": "Columbia Care",
  "description": "Columbia Care Home provides heartfelt, professional care in a warm, home-like environment. We offer assisted living, memory care, and rehabilitation services in Columbia, Maryland.",
  "url": "https://www.columbiacarehome.com",
  "logo": {
    "@type": "ImageObject",
    "@id": "https://www.columbiacarehome.com/#logo",
    "url": "https://www.columbiacarehome.com/logo.png",
    "width": 250,
    "height": 60,
    "caption": "Columbia Care Home Logo"
  },
  "image": {
    "@id": "https://www.columbiacarehome.com/#mainImage"
  },
  "telephone": "+1-301-500-0809",
  "email": "columbiacarehomes@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10610 Hickory Point Lane",
    "addressLocality": "Columbia",
    "addressRegion": "MD",
    "postalCode": "21044",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.2037,
    "longitude": -76.8610
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "10:00",
      "closes": "16:00"
    }
  ],
  "priceRange": "$$$$",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 39.2037,
      "longitude": -76.8610
    },
    "geoRadius": "50000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Senior Care Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Assisted Living",
          "description": "Personalized assistance with daily living activities in a home-like environment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Memory Care",
          "description": "Specialized care for residents with Alzheimer's and dementia"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Rehabilitation Services",
          "description": "Physical, occupational, and speech therapy services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Care",
          "description": "24/7 professional care in a comfortable residential setting"
        }
      }
    ]
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-201-885-9225",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": ["English"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+1-301-500-0809",
      "contactType": "admissions",
      "areaServed": "US",
      "availableLanguage": ["English"]
    }
  ],
  "sameAs": [
    "https://www.facebook.com/columbiacarehome",
    "https://www.instagram.com/columbiacarehome",
    "https://www.linkedin.com/company/columbiacarehome"
  ],
  "slogan": "Care that Feels Like Coming Home"
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.columbiacarehome.com/#organization",
  "name": "Columbia Care Home",
  "url": "https://www.columbiacarehome.com",
  "logo": "https://www.columbiacarehome.com/assets/logo1.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-201-885-9225",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10610 Hickory Point Lane",
    "addressLocality": "Columbia",
    "addressRegion": "MD",
    "postalCode": "21044",
    "addressCountry": "US"
  }
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Senior Care Services",
  "description": "Comprehensive senior care services including assisted living, memory care, and rehabilitation",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Columbia Care Home",
    "url": "https://www.columbiacarehome.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Columbia",
    "containedInPlace": {
      "@type": "State",
      "name": "Maryland"
    }
  },
  "offers": {
    "@type": "Offer",
    "description": "Professional senior care in a warm, home-like environment",
    "priceRange": "$$"
  }
};

export const breadcrumbSchema = (items: Array<{ name: string, url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

