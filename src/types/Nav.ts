import type { IconsKey } from '@components/Icons/Icon';

type NavItem = {
  url: string;
  title: string;
  icon?: keyof IconsKey | any;
};

interface NavProps {
  direction: string;
  items: NavItem[];
}

export type { NavItem, NavProps };
