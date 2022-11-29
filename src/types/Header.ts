type ItemKey = 'url' | 'title' | 'icon';

type HeaderNavigation = {
  title: string;
  items: Record<ItemKey, string | any>[];
};

interface HeaderProps {
  navigation: HeaderNavigation[];
  label: string;
  group: string;
}

export type { HeaderProps, HeaderNavigation };
