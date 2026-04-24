// Structured Data for Columbia Care Home

export const localBusinessSchema = {
  "@type": "SeniorCareFacility",
  "@id": "https://www.columbiacarehome.com/#organization",
  "name": "Columbia Care Home",
  "alternateName": "Columbia Care",
  "description": "Columbia Care Home is a physical therapist-led assisted living residence providing high-acuity residential care for seniors with complex mobility and cognitive needs.",
  "disambiguatingDescription": "Currently accepting new residents with 1 room available for immediate occupancy as of April 24, 2026.",
  "url": "https://www.columbiacarehome.com",
  "logo": {
    "@type": "ImageObject",
    "@id": "https://www.columbiacarehome.com/#logo",
    "url": "https://www.columbiacarehome.com/logos/header_logo.webp",
    "width": 250,
    "height": 60,
    "caption": "Columbia Care Home Logo"
  },
  "image": {
    "@id": "https://www.columbiacarehome.com/#mainImage"
  },
  "telephone": "+1-301-500-0809",
  "email": "admin@columbiacarehome.com",
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
  "priceRange": "$$$",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 39.2037,
      "longitude": -76.8610
    },
    "geoRadius": "50000"
  },
  "offers": {
    "@type": "Offer",
    "name": "Immediate Residential Placement",
    "description": "1 private room currently available for immediate occupancy.",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-04-24"
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
          "description": "Personalized assistance with daily living activities in a home-like environment",
          "image": "https://www.columbiacarehome.com/og-residential.jpg"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "High-Acuity Residential Care",
          "description": "24/7 professional care for seniors with complex medical and physical needs",
          "image": "https://www.columbiacarehome.com/og-residential.jpg"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobility Support & Rehabilitation",
          "description": "Professional physical and occupational therapy led by Doctors of Physical Therapy",
          "image": "https://www.columbiacarehome.com/og-rehabilitation.jpg"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Memory Support",
          "description": "Specialized cognitive support and behavioral management for residents with dementia",
          "image": "https://www.columbiacarehome.com/og-memory.jpg"
        }
      }
    ]
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-301-500-0809",
      "contactType": "admissions",
      "areaServed": "US",
      "availableLanguage": ["English"]
    }
  ],
  "sameAs": [
    "https://www.google.com/maps/place/Columbia+Care+Home",
    "https://www.facebook.com/ColumbiaCareHome"
  ],
  "slogan": "Care that Feels Like Coming Home"
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.columbiacarehome.com/#organization",
  "name": "Columbia Care Home",
  "url": "https://www.columbiacarehome.com",
  "logo": "https://www.columbiacarehome.com/logos/header_logo.webp",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-301-500-0809",
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


export const jobPostingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "JobPosting",
      "@id": "https://www.columbiacarehome.com/careers#caregiver",
      "title": "Caregiver / Resident Assistant",
      "description": "Join our team providing compassionate care to seniors in a home-like environment. Assist with daily living activities, medication reminders, and companionship.",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Columbia Care Home",
        "sameAs": "https://www.columbiacarehome.com"
      },
      "employmentType": "FULL_TIME",
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "10610 Hickory Point Lane",
          "addressLocality": "Columbia",
          "addressRegion": "MD",
          "postalCode": "21044",
          "addressCountry": "US"
        }
      },
      "directApply": true,
      "datePosted": "2026-04-20",
      "occupationalCategory": "31-1120.00", // Home Health Aides
      "validThrough": new Date(new Date().getFullYear() + 1, 0, 1).toISOString()
    },
    {
      "@type": "JobPosting",
      "@id": "https://www.columbiacarehome.com/careers#cna",
      "title": "Certified Nursing Assistant (CNA) / GNA",
      "description": "Provide professional nursing care to residents. Monitor health status, coordinate with physical therapists, and document clinical observations.",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Columbia Care Home",
        "sameAs": "https://www.columbiacarehome.com"
      },
      "employmentType": ["FULL_TIME", "PART_TIME"],
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "10610 Hickory Point Lane",
          "addressLocality": "Columbia",
          "addressRegion": "MD",
          "postalCode": "21044",
          "addressCountry": "US"
        }
      },
      "directApply": true,
      "datePosted": "2026-04-20",
      "validThrough": new Date(new Date().getFullYear() + 1, 0, 1).toISOString()
    }
  ]
};
