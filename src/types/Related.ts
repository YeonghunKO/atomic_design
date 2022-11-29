type Item = {
  category: {
    href: string;
    label: string;
  };
  description: string;
  image: string;
  slug: string;
  title: string;
};

interface RelatedProps {
  items: Item[];
  intro: {
    cta: {
      href: string;
      label: string;
      target: string | null;
    };
    subtitle: string;
    text: string;
    title: string;
  };
  group: string;
  label: string;
}

export type { RelatedProps };
