import type { HeaderProps } from '@src/types/Header';
import type { FooterProps } from '@src/types/Footer';
import type { BannerProps } from '@src/types/Banner';
interface PostContent {
  content: string;
}
interface PostProps {
  header: HeaderProps;
  footer: FooterProps;
  related: any;
  banner: BannerProps;
  postContent: PostContent;
}

export type { PostProps };
