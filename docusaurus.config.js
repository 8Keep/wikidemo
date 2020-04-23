module.exports = {
  title: 'jMonkeyEngine Documentation',
  tagline: '',
  url: 'https://8keep.github.io',
  baseUrl: '/wikidemo/',
  favicon: 'img/favicon.ico',
  organizationName: '8keep',
  projectName: 'wikidemo',
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('./src/plugins/themes/monokai'),
    },
    navbar: {
      title: '',
      logo: {
        alt: 'JmonkeyEngine',
        src: 'img/iconx128.png',
      },
      links: [
        {
          to: 'docs/documentation',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/8keep/wikidemo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} jMonkeyEngine.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/8keep/wikidemo/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    '/js/dark_default.js',
  ],
};
