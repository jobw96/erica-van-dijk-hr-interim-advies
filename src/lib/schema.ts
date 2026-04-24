const SITE_URL = 'https://ericavandijk.nl';
const SITE_NAME = 'Erica van Dijk - HR Interim & Advies';
const PERSON_NAME = 'Erica van Dijk';
const DEFAULT_IMAGE = 'https://storage.googleapis.com/gpt-engineer-file-uploads/8J9ts0tlIuZAwHTFHhaFZxeANjn1/social-images/social-1764600536479-Erica%20herosectie%20foto.png';

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: 'nl-NL',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  description:
    'Pragmatisch & betrouwbaar HR Interim Management. Ervaren allround interim HR Manager met een no-nonsense aanpak voor organisatieontwikkeling en HR-advies.',
  url: SITE_URL,
  image: DEFAULT_IMAGE,
  areaServed: 'NL',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NL',
  },
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: PERSON_NAME,
  jobTitle: 'HR Interim Manager & Adviseur',
  url: SITE_URL,
  image: DEFAULT_IMAGE,
  worksFor: {
    '@type': 'Organization',
    name: SITE_NAME,
  },
};

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    image: opts.image || DEFAULT_IMAGE,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': opts.url.startsWith('http') ? opts.url : `${SITE_URL}${opts.url}`,
    },
    author: {
      '@type': 'Person',
      name: PERSON_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.png`,
      },
    },
  };
}