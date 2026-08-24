import React from 'react';

// SEO meta is server-rendered from each route's head() (see src/routes/*).
// This component remains as a no-op compatibility shim so existing
// <SEO ... /> call sites keep compiling; the shared constants below are
// imported by the route head() functions.

export const SITE_NAME = 'Erica van Dijk - HR Interim & Advies';
export const TAGLINE = 'Pragmatisch & betrouwbaar HR Interim Management';
export const DEFAULT_DESCRIPTION = 'Pragmatisch & betrouwbaar HR Interim Management. Ervaren allround interim HR Manager met een no-nonsense aanpak voor organisatieontwikkeling en HR-advies.';
export const DEFAULT_IMAGE = 'https://storage.googleapis.com/gpt-engineer-file-uploads/8J9ts0tlIuZAwHTFHhaFZxeANjn1/social-images/social-1764600536479-Erica herosectie foto.png';
export const SITE_URL = 'https://ericavandijk.nl';

export function composeTitle(title?: string): string {
  return title ? `${title} | ${SITE_NAME} - ${TAGLINE}` : `${SITE_NAME} - ${TAGLINE}`;
}

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

export const SEO: React.FC<SEOProps> = () => null;
