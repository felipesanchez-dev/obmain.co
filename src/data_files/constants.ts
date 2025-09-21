import ogImageSrc from "@images/obmain/obmain.png";

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

export const partnersData = [
  {
    icon: `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5"
    viewBox="0 0 1024.000000 862.000000"
    preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,862.000000) scale(0.100000,-0.100000)"
    fill="#ea5f23" stroke="none">
    <path d="M4395 8473 c-334 -97 -671 -272 -945 -491 -115 -92 -350 -320 -350
    -339 0 -8 169 -449 376 -980 206 -531 410 -1058 454 -1172 140 -368 299 -777
    695 -1787 l227 -581 97 -6 c53 -2 97 -4 97 -3 1 0 -51 546 -116 1211 -65 666
    -182 1872 -260 2680 -78 809 -145 1477 -148 1487 -6 15 -19 13 -127 -19z"/>
    <path d="M5770 8500 c0 -17 -87 -918 -405 -4189 -64 -656 -115 -1194 -113
    -1196 2 -1 46 0 98 3 l95 5 229 586 c357 913 455 1165 566 1456 57 149 296
    767 532 1374 l429 1103 -46 54 c-194 226 -591 512 -905 649 -179 78 -480 176
    -480 155z"/>
    <path d="M2423 6094 c-14 -132 -8 -466 11 -603 46 -339 158 -680 316 -965 328
    -588 865 -1043 1492 -1261 121 -42 240 -76 246 -71 2 3 -65 105 -149 228 -84
    123 -186 273 -228 333 -79 116 -316 458 -492 710 -249 356 -694 997 -924 1330
    -136 198 -251 364 -255 369 -5 4 -12 -27 -17 -70z"/>
    <path d="M7440 5563 c-228 -329 -503 -724 -610 -878 -568 -811 -1032 -1487
    -1026 -1492 7 -8 221 59 336 104 679 267 1243 811 1520 1466 116 275 183 536
    211 825 13 132 7 529 -8 556 -7 13 -88 -97 -423 -581z"/>
    <path d="M915 2064 c-238 -43 -439 -153 -571 -311 -233 -282 -282 -797 -109
    -1143 193 -388 700 -555 1286 -424 l67 15 -4 87 c-3 48 -7 115 -10 149 l-5 61
    -57 -19 c-140 -48 -391 -64 -521 -34 -373 88 -573 513 -435 925 73 216 245
    370 464 416 141 30 337 7 475 -55 l62 -28 12 136 c6 76 11 145 11 154 0 20
    -92 50 -218 72 -107 19 -340 18 -447 -1z"/>
    <path d="M2230 1120 l0 -960 565 0 565 0 0 145 0 145 -377 2 -378 3 0 275 0
    275 343 3 342 2 0 145 0 145 -342 2 -343 3 0 240 0 240 378 3 377 2 0 145 0
    145 -565 0 -565 0 0 -960z"/>
    <path d="M4030 1120 l0 -960 550 0 550 0 0 140 0 140 -362 2 -363 3 -3 818 -2
    817 -185 0 -185 0 0 -960z"/>
    <path d="M6159 2070 c-223 -25 -389 -112 -479 -252 -55 -84 -73 -163 -68 -289
    3 -91 7 -112 35 -172 40 -85 126 -176 215 -229 38 -22 146 -75 241 -118 207
    -93 270 -127 333 -183 58 -51 83 -105 84 -178 0 -155 -103 -260 -283 -289
    -123 -19 -317 18 -498 96 -46 19 -90 38 -96 41 -10 4 -13 -31 -13 -156 l0
    -160 38 -10 c232 -63 540 -78 722 -36 119 27 253 97 326 169 126 127 179 309
    143 502 -18 97 -54 161 -138 244 -90 88 -180 143 -386 235 -206 92 -258 120
    -301 157 -74 65 -93 161 -50 254 25 54 56 82 133 117 40 18 65 21 158 21 71 0
    135 -7 180 -18 76 -20 197 -72 244 -105 16 -12 32 -21 35 -21 3 0 6 69 6 153
    l0 154 -77 21 c-169 46 -369 67 -504 52z"/>
    <path d="M7430 1120 l0 -960 180 0 180 0 0 960 0 960 -180 0 -180 0 0 -960z"/>
    <path d="M9127 1989 c-25 -52 -118 -245 -207 -429 -89 -184 -224 -463 -300
    -620 -76 -157 -192 -396 -258 -532 l-121 -248 173 0 173 0 99 222 99 223 369
    0 368 0 98 -220 98 -220 195 -3 196 -2 -121 247 c-137 281 -513 1059 -685
    1418 -64 132 -120 244 -124 249 -5 5 -28 -33 -52 -85z m164 -869 c70 -157 125
    -288 123 -292 -8 -13 -524 -10 -524 3 0 9 190 446 236 542 10 20 22 36 28 34
    5 -2 67 -131 137 -287z"/>
    </g>
    </svg>
    `,
    name: "Celsia",
    href: "#",
  },
];
