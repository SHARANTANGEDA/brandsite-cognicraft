// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {oneDark, themes as prismThemes, vsDark} from 'prism-react-renderer';
import React from "react";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cognicraft Tech',
  tagline: 'Building products for the AI Era',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cognicraft.tech',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xpuls-labs', // Usually your GitHub org/user name.
  projectName: 'brandsite-cognicraft', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'curated-tools',
        path: 'curated-tools',
        routeBasePath: 'curated-tools',
        breadcrumbs: true,
        sidebarCollapsed: true,
        // sidebarPath: require.resolve('./sidebars.js'),
        // includeCurrentVersion: true, // Ensure this is set to true
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/cognicraft.png',
      navbar: {
        logo: {
          alt: 'Cognicraft Logo',
          src: 'img/cognicraft.png',
          width: 30,
          height: 30
        },
        items: [

        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Content',
            items: [
              {
                label: 'Curated Products',
                to: '/curated-tools',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/cognicraft-tech',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/cognicraft_tech',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/xpuls-labs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Contact Us',
                to: '/contactus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cognicraft Technologies.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.oneDark,
      },
    }),
};

export default config;
