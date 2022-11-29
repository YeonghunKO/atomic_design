interface BannerProps {
  default: {
    content: string;
    cta: {
      title: string;
      url: string;
    };
    title: string;
    variant: string;
  };
  group: string;
  label: string;
}

export type { BannerProps };
