import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { localBusinessSchema } from '../data/structuredData';

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: any;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title: rawTitle,
  description,
  image = "https://www.columbiacarehome.com/og-image.jpg",
  url,
  type = "website",
  structuredData,
}) => {
  const location = useLocation();
  const stripHtml = (html: string) => html.replace(/<[^>]*>?/gm, '');
  const title = stripHtml(rawTitle);
  const fullTitle = title.includes('Columbia Care Home') ? title : `${title} | Columbia Care Home`;

  const baseUrl = "https://www.columbiacarehome.com";
  const currentPath = url || `${baseUrl}${location.pathname}`;
  const absoluteUrl = currentPath.startsWith('http') ? currentPath : `${baseUrl}${currentPath.startsWith('/') ? '' : '/'}${currentPath}`;

  // Generate Automatic Breadcrumb Schema
  const pathnames = location.pathname.split('/').filter((x) => x);
  const breadcrumbElements = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": baseUrl
    },
    ...pathnames.map((value, index) => {
      const url = `${baseUrl}/${pathnames.slice(0, index + 1).join('/')}`;
      const name = value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      return {
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": url
      };
    })
  ];

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl}#breadcrumb`,
    "itemListElement": breadcrumbElements
  };

  // Combine all structured data into a unified @graph
  const graph = [
    localBusinessSchema,
    breadcrumbSchema,
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "url": baseUrl,
      "name": "Columbia Care Home",
      "publisher": { "@id": "https://www.columbiacarehome.com/#local-business" }
    },
    {
      "@type": type === 'article' ? 'BlogPosting' : (type === 'website' ? 'WebPage' : (type || 'WebPage')),
      "@id": `${absoluteUrl}#webpage`,
      "url": absoluteUrl,
      "name": fullTitle,
      "headline": title.split(' | ')[0],
      "description": description,
      "image": image,
      "isPartOf": { "@id": `${baseUrl}/#website` },
      "breadcrumb": { "@id": `${absoluteUrl}#breadcrumb` },
      "inLanguage": "en-US",
    }
  ];

  if (structuredData) {
    if (structuredData['@graph']) {
      graph.push(...structuredData['@graph']);
    } else if (Array.isArray(structuredData)) {
      graph.push(...structuredData);
    } else {
      graph.push({
        ...structuredData,
        "@id": structuredData["@id"] || `${absoluteUrl}#primary`
      });
    }
  }

  const graphData = {
    "@context": "https://schema.org",
    "@graph": graph
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <link rel="canonical" href={absoluteUrl} />
      <meta name="description" content={description} />
      <meta name="author" content="Columbia Care Home" />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={absoluteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:site_name" content="Columbia Care Home" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={absoluteUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Unified Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(graphData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
