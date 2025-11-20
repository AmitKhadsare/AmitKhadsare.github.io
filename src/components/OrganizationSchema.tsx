import { Helmet } from 'react-helmet-async';

/**
 * Global Organization and LocalBusiness structured data
 * This helps Google understand the business and can appear in Knowledge Graph
 */
const OrganizationSchema = () => {
    const organizationData = {
        "@context": "https://schema.org",
        "@type": "SeniorCareFacility",
        "@id": "https://www.columbiacarehome.com/#organization",
        "name": "Columbia Care Home",
        "alternateName": "Columbia Care",
        "url": "https://www.columbiacarehome.com",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.columbiacarehome.com/logo.png",
            "width": 250,
            "height": 60
        },
        "image": "https://www.columbiacarehome.com/main.avif",
        "description": "Columbia Care Home provides heartfelt, professional senior care in a warm, home-like environment. We offer assisted living, memory care, rehabilitation, and personalized care services in Columbia, Maryland.",

        // Contact Information
        "telephone": "+1-201-885-9225",
        "email": "info@columbiacarehome.com",

        // Address
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "10610 Hickory Point Lane",
            "addressLocality": "Columbia",
            "addressRegion": "MD",
            "postalCode": "21044",
            "addressCountry": "US"
        },

        // Geo Coordinates
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 39.2037,
            "longitude": -76.8610
        },

        // Service Area
        "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 39.2037,
                "longitude": -76.8610
            },
            "geoRadius": "50000" // 50km radius
        },

        // Opening Hours
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

        // Services Offered
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

        // Price Range
        "priceRange": "$$$$",

        // Additional Contact Points
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

        // Social Media Profiles
        "sameAs": [
            // Add your social media URLs here when available
            // "https://www.facebook.com/columbiacarehome",
            // "https://www.linkedin.com/company/columbiacarehome"
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(organizationData)}
            </script>
        </Helmet>
    );
};

export default OrganizationSchema;
