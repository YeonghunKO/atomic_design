type Menu = {
  title: string;
  item: { url: string; text: string }[];
};

interface FooterProps {
  menu: Menu[];
}

export type { FooterProps };
