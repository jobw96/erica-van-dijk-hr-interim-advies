import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  /** Deprecated: gebruik ogType="article" */
  article?: boolean;
  ogType?: 'website' | 'article' | 'profile';
  canonicalUrl?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_NAME = 'Erica van Dijk - HR Interim & Advies';
const TAGLINE = 'Pragmatisch & betrouwbaar HR Interim Management';
const DEFAULT_DESCRIPTION = 'Pragmatisch & betrouwbaar HR Interim Management. Ervaren allround interim HR Manager met een no-nonsense aanpak voor organisatieontwikkeling en HR-advies.';
const DEFAULT_IMAGE = 'https://storage.googleapis.com/gpt-engineer-file-uploads/8J9ts0tlIuZAwHTFHhaFZxeANjn1/social-images/social-1764600536479-Erica herosectie foto.png';
const SITE_URL = 'https://ericavandijk.nl';

export const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  article = false,
  ogType,
  canonicalUrl,
  publishedTime,
  modifiedTime,
  author,
  jsonLd,
}) => {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | ${SITE_NAME} - ${TAGLINE}` : `${SITE_NAME} - ${TAGLINE}`;
  const resolvedCanonical = canonicalUrl || `${SITE_URL}${pathname}`;
  const resolvedType = ogType || (article ? 'article' : 'website');
  const jsonLdArray = jsonLd
    ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd])
    : [];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={resolvedCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={resolvedType} />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="nl_NL" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      
      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={resolvedCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {jsonLdArray.map((schema, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
