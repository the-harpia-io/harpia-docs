// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    [require.resolve('@easyops-cn/docusaurus-search-local'), {hashed: true}],
    require.resolve('docusaurus-plugin-image-zoom'),
    require.resolve('@chatwoot/docusaurus-plugin'),
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-SV66JJK3QR',
        anonymizeIP: true,
      },
    ],
  ],
  title: 'Harpia Documentation',
  tagline: 'IT Incident management system',
  url: 'https://github.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  deploymentBranch: "gh-pages",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'the-harpia-io', // Usually your GitHub org/user name.
  projectName: 'harpia-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/the-harpia-io/harpia-docs/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/the-harpia-io/harpia-docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          'http-equiv': 'Cache-Control',
          content: 'no-cache, no-store, must-revalidate',
        },
        {'http-equiv': 'Pragma', content: 'no-cache'},
        {'http-equiv': 'Expires', content: '0'},
      ],
      chatwoot: {
        websiteToken: "wN8ZGAcEvMYAX6JGgpqwS3yJ",
        baseURL: "https://app.chatwoot.com",
        enableInDevelopment: false,
      },
      zoom: {
        selector: '.markdown img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
      navbar: {
        title: 'Harpia',
        logo: {
          alt: 'Harp Logo',
          src: 'img/harp_logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Website',
            items: [
              {
                label: 'Official Website',
                href: 'https://harpia.io',
              }
            ],
          },
          {
            title: 'Demo',
            items: [
              {
                label: 'Live Demo',
                href: 'https://playground.harpia.io',
              }
            ],
          },
          {
            title: 'Installation',
            items: [
              {
                label: 'Create new environment in Cloud',
                href: 'https://registration.harpia.io',
              }
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     // {
          //     //   label: 'Blog',
          //     //   to: '/blog',
          //     // },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/the-harpia-io/harpia-docs',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} harpia.io`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'json', 'csharp'],
      },
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      }
    }),
};

module.exports = config;
