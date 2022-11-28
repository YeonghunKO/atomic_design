type ItemKey = 'url' | 'text' | 'icon';

type HeaderNavigation = {
  title: string;
  items: Record<ItemKey, string | any>[];
};

interface HeaderProps {
  navigation: HeaderNavigation[];
}

export type { HeaderProps, HeaderNavigation };
