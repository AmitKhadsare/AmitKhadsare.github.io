// Structured Data for Columbia Care Home

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.columbiacarehome.com/#organization",
  "name": "Columbia Care Home",
  "alternateName": "Columbia Care",
  "description": "Columbia Care Home provides heartfelt, professional care in a warm, home-like environment. We offer assisted living, memory care, and rehabilitation services in Columbia, Maryland.",
  "url": "https://www.columbiacarehome.com",
  "logo": "https://www.columbiacarehome.com/assets/logo1.svg",
  "image": [
    "https://www.columbiacarehome.com/main.avif",
    "https://www.columbiacarehome.com/assets/carehome.avif",
    "https://www.columbiacarehome.com/assets/our-home-front-view.jpg"
  ],
  "telephone": ["(201) 885-9225", "(301) 500-0809"],
  "email": "info@columbiacarehome.com",
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
    "latitude": "39.2037",
    "longitude": "-76.8610"
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Check, Insurance",
  "areaServed": [
    {
      "@type": "City",
      "name": "Columbia",
      "containedInPlace": {
        "@type": "State",
        "name": "Maryland"
      }
    },
    {
      "@type": "City", 
      "name": "Ellicott City",
      "containedInPlace": {
        "@type": "State",
        "name": "Maryland"
      }
    },
    {
      "@type": "City",
      "name": "Laurel",
      "containedInPlace": {
        "@type": "State", 
        "name": "Maryland"
      }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Senior Care Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Assisted Living",
          "description": "Professional care in a warm, home-like environment"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Memory Care",
          "description": "Specialized care for residents with dementia and Alzheimer's"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Physical Therapy",
          "description": "Rehabilitation services to maintain mobility and independence"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Personal Care",
          "description": "Dignified assistance with daily activities"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/columbiacarehome",
    "https://www.instagram.com/columbiacarehome", 
    "https://www.linkedin.com/company/columbiacarehome"
  ],
  "foundingDate": "2025",
  "numberOfEmployees": "5-15",
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

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
