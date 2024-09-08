import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import starlight from "@astrojs/starlight";

import svgIcon from "./src/assets/migrate-vue-logo.svg";
const svgIconAsDataUrl = `data:image/svg+xml;base64,${btoa(svgIcon)}`;

// https://astro.build/config
export default defineConfig({
  site: "https://migrate-vue.com",
  integrations: [
    starlight({
      title: "Guide: Migrate Vue 2 to Vue 3",
      description: "Learn how to migrate your Vue 2 codebase to Vue 3",
      components: {
        // Override the default `SocialIcons` component.
        ThemeProvider: "./src/components/starlight/ThemeProvider.astro",
        ThemeSelect: "./src/components/starlight/ThemeSelect.astro",
        Header: "./src/components/starlight/Header.astro",
        SiteTitle: "./src/components/starlight/SiteTitle.astro",
        PageFrame: "./src/components/starlight/PageFrame.astro",
        Sidebar: "./src/components/starlight/Sidebar.astro",
        MobileMenuToggle: "./src/components/starlight/MobileMenuToggle.astro",
      },
      logo: {
        src: svgIcon,
        replacesTitle: true,
      },
      disable404Route: true,
      sidebar: [
        {
          label: "Home",
          link: "/",
          attrs: {
            class: "md:sl-hidden",
          },
        },
        {
          label: "Pricing",
          link: "/pricing",
          attrs: {
            class: "md:sl-hidden",
          },
        },
        {
          label: "Contact",
          link: "/contact",
          attrs: {
            class: "md:sl-hidden",
          },
        },
        {
          label: "Guide",
          items: [
            {
              label: "Getting Started",
              link: "/guide",
            },
            {
              label: "Migrate to Vite",
              link: "/guide/2-migrate-to-vite",
            },
            {
              label: "Migrate to TypeScript",
              link: "/guide/3-migrate-to-typescript",
            },
            {
              label: "Options API vs Composition API",
              link: "/guide/4-options-api-vs-composition-api",
            },
            {
              label: "Migrate to Vue 3",
              link: "/guide/5-migrate-to-vue-3",
            },
          ],
        },
      ],

      customCss: [
        // Pfad zu deinen grundlegenden Tailwind-Styles
        "./src/custom-starlight.css",
        "@fontsource-variable/inter/index.css",
        "@fontsource-variable/bricolage-grotesque",
      ],

      head: [
        // Example: add Fathom analytics script tag.
        {
          tag: "script",
          attrs: {
            type: "text/plain",
            "data-anogate": "GTM",
          },
          content: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N3R7DHWT');`,
        },
        {
          tag: "script",
          attrs: {
            src: "https://load01.anogate.io/js/?id=AG-31F914ALD1",
            async: true,
            id: "Anogate",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:url",
            content: "https://migrate-vue.com/opengraph.jpg",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:alt",
            content: "migrate-vue Homepage Screenshot",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:card",
            content: "summary_large_image",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:creator",
            content: "@saulmurf",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:image",
            content: "https://migrate-vue.com/opengraph.jpg",
          },
        },
      ],
    }),
    tailwind(),
    mdx(),
    sitemap(),
    icon(),
  ],
});
