import type { ReactNode } from 'react';
import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import SocialLinks from '@site/src/components/SocialLinks';

function NavbarSocialLinks(): ReactNode {
  return <SocialLinks variant="navbar" />;
}

export default {
  ...ComponentTypes,
  'custom-socialLinks': NavbarSocialLinks,
};
