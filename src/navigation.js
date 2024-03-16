import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'About me',
      href: getPermalink('about'),
    },
  ],
  actions: [{ text: 'Sponsor', href: 'https://apoia.se/thadeu', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Ruby Libraries',
      links: [
        { text: 'Branca Encrypt', href: 'https://github.com/thadeu/https://github.com/thadeu/branca-ruby' },
        { text: 'Recollet Array', href: 'https://github.com/thadeu/recollect-array' },
        { text: 'Zx Monads', href: 'https://github.com/thadeu/zx-monads' },
        { text: 'Zx Result', href: 'https://github.com/thadeu/zx-result' },
      ],
    },
    {
      title: 'JavaScript Libraries',
      links: [
        { text: 'Jest Localstack Preset', href: 'https://github.com/thadeu/jest-localstack-preset' },
        { text: 'Vitest Localstack', href: 'https://github.com/thadeu/vitest-localstack' },
        { text: 'Dry Replacer', href: 'https://github.com/thadeu/dry-replacer-js' },
        { text: 'Recollet Array', href: 'https://github.com/thadeu/recollect-array-js' },
      ],
    },
    {
      title: 'VSCode Extensions',
      links: [{ text: 'vscode-run-rspec-file', href: 'https://github.com/thadeu/vscode-run-rspec-file' }],
    },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/iamthadeu' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/thadeuestevesjr/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/thadeu' },
  ],
  footNote: `
    <a rel="license" href="https://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png"></a><br/>
    <p>This work is licensed under a <a rel="license" href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.</p>
  `,
};
