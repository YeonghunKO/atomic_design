type Menu = {
  title: string;
  items: { url: string; title: string }[];
};

interface FooterProps {
  menus: Menu[];
  label: string;
  group: string;
}

export type { FooterProps };
