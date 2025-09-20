import ogImageSrc from "@images/obmain.png";

export const SITE = {
  title: "OBMAIN",
  tagline: "Construcción y Mantenimiento Eléctrico, Mecánico y Civil en Tolima",
  description:
    "OBMAIN es una empresa del sector de la construcción y el mantenimiento eléctrico y mecánico en Ibagué, Tolima. Realizamos obras civiles, mecánicas, eléctricas y estructurales en el sector público y privado, cumpliendo con estándares de calidad y normatividad vigente.",
  description_short:
    "Obras civiles, mantenimiento eléctrico, mecánico y estructural en Tolima.",
  url: "https://www.obmain.co",
  author: "OBMAIN",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    inLanguage: ["es-CO", "en-US"],
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Supermanza 4 - Manzana 2 - Casa 1",
      addressLocality: "Ibagué",
      addressRegion: "Tolima",
      addressCountry: "CO",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+57 320 726 5669",
      email: "obmaindeltolimasas@obmain.co",
      contactType: "customer service",
      areaServed: "CO",
      availableLanguage: "es",
    },
    keywords: [
      "obmain",
      "construcción Tolima",
      "mantenimiento eléctrico",
      "obras civiles Ibagué",
      "mantenimiento mecánico",
      "subestaciones eléctricas",
      "ingeniería estructural",
      "estabilización de taludes",
      "Celsia",
      "mantenimiento industrial",
      "construcción de viviendas",
      "construcción de edificios",
      "construcción de infraestructuras",
      "servicios de construcción",
      "servicios de mantenimiento",
      "empresa de construcción",
      "empresa de mantenimiento",
      "contratista de construcción",
      "contratista de mantenimiento",
      "proyectos de construcción",
      "proyectos de mantenimiento",
      "construcción sostenible",
      "construcción segura",
      "mantenimiento preventivo",
      "mantenimiento correctivo",
      "mantenimiento predictivo",
      "ingeniería civil",
      "ingeniería eléctrica",
      "ingeniería mecánica",
      "Tolima",
      "Ibagué",
      "Colombia",
      "servicios industriales",
      "soluciones de construcción",
      "soluciones de mantenimiento",
      "personal calificado",
      "normatividad legal vigente",
    ],
  },
};

export const OG = {
  locale: "es_CO",
  type: "website",
  url: SITE.url,
  title: `${SITE.title} - Construcción y Mantenimiento en Tolima`,
  description:
    "OBMAIN ofrece construcción, obras civiles, mantenimiento eléctrico y mecánico en Ibagué y Tolima. Servicios confiables, con personal calificado y cumplimiento de normatividad legal vigente.",
  image: ogImageSrc,
};

