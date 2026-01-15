import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'JasminCSS',
  description: 'A modern, utility-first CSS framework with 26 components, 720 icons, and powerful CLI tooling',

  base: '/JasminCSS/',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Guide', link: '/getting-started' },
      { text: 'Components', link: '/components/' },
      { text: 'Utilities', link: '/utilities/' },
      { text: 'JavaScript', link: '/javascript' },
      { text: 'Examples', link: '/examples' },
      {
        text: 'v1.0.0',
        items: [
          { text: 'Changelog', link: 'https://github.com/jasmaine/JasminCSS/releases' },
          { text: 'Contributing', link: 'https://github.com/jasmaine/JasminCSS' }
        ]
      }
    ],

    sidebar: {
      '/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'Customization', link: '/customization' }
          ]
        },
        {
          text: 'Components',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/components/' },
            { text: 'Buttons', link: '/components/#buttons' },
            { text: 'Cards', link: '/components/#cards' },
            { text: 'Forms', link: '/components/#forms' },
            { text: 'Modals', link: '/components/#modals' },
            { text: 'Dropdown', link: '/components/#dropdown' },
            { text: 'Accordion', link: '/components/#accordion' },
            { text: 'Navigation', link: '/components/#navigation' },
            { text: 'Alerts', link: '/components/#alerts' },
            { text: 'Tables', link: '/components/#tables' }
          ]
        },
        {
          text: 'Utilities',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/utilities/' },
            { text: 'Layout', link: '/utilities/#layout' },
            { text: 'Spacing', link: '/utilities/#spacing' },
            { text: 'Typography', link: '/utilities/#typography' },
            { text: 'Colors', link: '/utilities/#colors' },
            { text: 'Effects', link: '/utilities/#effects' },
            { text: 'Icons', link: '/utilities/#icons' }
          ]
        },
        {
          text: 'JavaScript',
          items: [
            { text: 'Overview', link: '/javascript' },
            { text: 'Components API', link: '/javascript#components-api' },
            { text: 'Toast Notifications', link: '/javascript#toast-notifications' }
          ]
        },
        {
          text: 'Resources',
          items: [
            { text: 'Examples', link: '/examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jasmaine/JasminCSS' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 JasminCSS'
    },

    search: {
      provider: 'local'
    }
  }
});
