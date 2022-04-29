// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// Environment Variables

/* require('dotenv').config(); */

// Docusaurus Configuration

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Inery Docs',
  tagline: 'Data Management Powered by Blockchain Technology',
  url: 'https://docs.inery.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'media/main-icon.png',
  organizationName: 'Inery Blockchain', // Usually your GitHub org/user name.
  projectName: 'https://github.com/inery-blockchain/inery', // Usually your repo name.

  // Localization

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Plugins

  plugins: ['@docusaurus/theme-live-codeblock'],

  // Presets

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://git.webservice-host.net/inery_dev/docs',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          // disableVersioning: true,
          sidebarCollapsible: true,
          sidebarCollapsed: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // Theme Configuration

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // SEO
      metadata: [
        { name: 'keywords', content: 'inery, blockchain, docs, database, ineryDB, api, node, master, lite, producer' },
        { name: 'twitter:card', content: 'media/cube.png' },
        { name: 'og:image', content: 'media/cube.png' },
      ],
      image: 'media/footer-cube.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      /* algolia: {
        contextualSearch: true,
      }, */
      navbar: {
        hideOnScroll: true,
        title: '',
        logo: {
          alt: 'Inery Logo',
          src: 'media/main-logo.png',
          srcDark: 'media/logo-white-cyan.svg',
          target: '_self',
          href: '/',
        },
        items: [
          {
            label: 'Dashboard',
            to: '/',
            position: 'left',
            exact: 'true',
          },
          {
            type: 'doc',
            docId: 'introduction/0',
            position: 'left',
            label: 'Documentation',
          },
          {
            label: 'Chat',
            to: 'https://discord.gg/ph8B3pDmU3',
            position: 'right',
          },
          {
            label: 'GitHub',
            to: 'https://github.com/inery-blockchain',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      hideableSidebar: true,
      autoCollapseSidebarCategories: true,
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
      },
      footer: {
        style: 'dark',
        links: [
          {
            html: `<a target='_blank' rel='noreferrer' href='https://twitter.com/ineryblockchain'><img src='/media/twitter-brands.svg' alt='' style='height: 1.5em;' /></a>`
          },
          {
            html: `<a target='_blank' rel='noreferrer' href='https://www.instagram.com/inery_blockchain'><img src='/media/instagram-brands.svg' alt='' style='height: 1.5em;' /></a>`
          },
          {
            html: `<a target='_blank' rel='noreferrer' href='https://www.linkedin.com/company/inery-blockchain'><img src='/media/linkedin-in-brands.svg' alt='' style='height: 1.5em;' /></a>`
          },
          {
            html: `<a target='_blank' rel='noreferrer' href='https://t.me/inery_blockchain'><img src='/media/telegram-brands.svg' alt='' style='height: 1.5em;' /></a>`
          },
          {
            html: `<a target='_blank' rel='noreferrer' href='https://discord.gg/inery'><img src='/media/discord-brands.svg' alt='discord' style='height: 1.5em;' /></a>`
          },
          {
            html: `<a target='_blank' rel='noreferrer' href='https://www.reddit.com/user/Inery_blockchain'><img src='/media/reddit-alien-brands.svg' alt='reddit' style='height: 1.5em;' /></a>`
          },
          {
            html: `<a target='_blank' rel='noreferrer' href='https://bitcointalk.org/index.php?topic=5363181'><img src='/media/bitcoin-brands.svg' alt='bitcointalk' style='height: 1.5em;' /></a>`
          },
          {
            html: `<a target='_blank' rel='noreferrer' href='https://www.youtube.com/channel/UCLDa45z8agwE2F7m51KV2cg'><img src='/media/youtube-brands.svg' alt='youtube' style='height: 1.5em;' /></a>`
          },
        ],
        logo: {
          alt: 'Inery Logo',
          src: 'media/logo-white.svg',
          href: '/',
          width: 160,
          height: 51,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Inery`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },
    }),
};

module.exports = config;
