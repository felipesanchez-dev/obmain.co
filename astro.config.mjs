import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://obmain.co",
  image: {
    domains: ["images.unsplash.com"],
  },
  prefetch: true,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es",
          en: "en",
        },
      },
    }),
    starlight({
      title: "OBMAIN Docs",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        de: { label: "Deutsch", lang: "de" },
        es: { label: "Español", lang: "es" },
        fa: { label: "Persian", lang: "fa", dir: "rtl" },
        fr: { label: "Français", lang: "fr" },
        ja: { label: "日本語", lang: "ja" },
        "zh-cn": { label: "简体中文", lang: "zh-CN" },
      },
      sidebar: [
        {
          label: "OBMAIN Docs",
          translations: {
            de: "OBMAIN Anleitungen",
            es: "Guías de OBMAIN",
            fa: "راهنمای OBMAIN",
            fr: "Guides OBMAIN",
            ja: "OBMAIN ガイド",
            "zh-cn": "OBMAIN 指南",
          },
          autogenerate: { directory: "guides" },
        },
        {
          label: "Servicios de Ingeniería",
          items: [
            { label: "Obras Civiles", link: "tools/tool-guides/" },
            { label: "Mantenimiento Eléctrico", link: "tools/equipment-care/" },
          ],
        },
        {
          label: "Servicios de Construcción",
          autogenerate: { directory: "construction" },
        },
        {
          label: "OBMAIN Avanzado",
          autogenerate: { directory: "advanced" },
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/felipesanchez-dev/obmain.co",
        },
        {
          icon: "facebook",
          label: "Facebook",
          href: "https://www.facebook.com/obmain",
        },
        {
          icon: "linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/company/obmain",
        },
      ],
      disable404Route: true,
      customCss: ["./src/assets/styles/starlight.css"],
      favicon: "/favicon.ico",
      components: {
        SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
        Head: "./src/components/ui/starlight/Head.astro",
        MobileMenuFooter:
          "./src/components/ui/starlight/MobileMenuFooter.astro",
        ThemeSelect: "./src/components/ui/starlight/ThemeSelect.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://obmain.co" + "/social.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: "https://obmain.co" + "/social.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "description",
            content: "OBMAIN Ingeniería - Especialistas en obras civiles, eléctricas, mecánicas y estructurales en Tolima. Soluciones integrales de construcción y mantenimiento industrial.",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "keywords",
            content: "ingeniería Tolima, construcción Ibagué, obras civiles, mantenimiento eléctrico, estructuras metálicas, OBMAIN",
          },
        },
      ],
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
    mdx(),
  ],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});