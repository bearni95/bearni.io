export interface ISocialLink {
  url: string;
  label: string;
  icon: string;
}

export const SocialLinksData: ISocialLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/bearni95',
    icon: '/img/social-link-logos/github.png',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/bearni95dev',
    icon: '/img/social-link-logos/instagram.webp',
  },
  {
    label: 'Discord',
    url: 'https://discord.gg/qSTPyZJ5aY',
    icon: '/img/social-link-logos/discord.png',
  },
];
