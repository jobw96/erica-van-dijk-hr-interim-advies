import { DEFAULT_DESCRIPTION, DEFAULT_IMAGE, SITE_URL } from "@/components/SEO";

export interface PageHeadOptions {
  /** Volledige paginatitel (max ~60 tekens), bijv. via composeTitle(). */
  title: string;
  /** Meta description (max ~155 tekens). Valt terug op DEFAULT_DESCRIPTION. */
  description?: string;
  /** Pad van de route, bijv. "/experience". Bepaalt canonical en og:url. */
  path: string;
  /** og:type override; root-default is "website". */
  ogType?: "website" | "article";
  /** Voeg robots noindex toe (bijv. niet-gevonden-pagina's). */
  noIndex?: boolean;
  /** JSON-LD schema's voor deze pagina (naast de root-schema's). */
  schemas?: Array<Record<string, unknown>>;
}

/**
 * Gedeelde head-builder voor alle routes zodat title, description,
 * canonical, og:* en twitter:* nooit per route uit elkaar lopen.
 * Alles wordt server-side gerenderd via de route head().
 */
export function buildHead({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  ogType,
  noIndex = false,
  schemas = [],
}: PageHeadOptions) {
  const url = `${SITE_URL}${path}`;

  return {
    meta: [
      { title },
      { name: "title", content: title },
      { name: "description", content: description },
      ...(noIndex ? [{ name: "robots", content: "noindex, nofollow" }] : []),
      ...(ogType ? [{ property: "og:type", content: ogType }] : []),
      { property: "og:url", content: url },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: DEFAULT_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: url },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: DEFAULT_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: schemas.map((schema) => ({
      type: "application/ld+json",
      children: JSON.stringify(schema),
    })),
  };
}
