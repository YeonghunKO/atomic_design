import type { HeaderProps } from '@src/types/Header';
import type { FooterProps } from '@src/types/Footer';
interface PostContent {
  content: string;
}
interface PostProps {
  header: HeaderProps;
  footer: FooterProps;
  related: any;
  banner: any;
  postContent: PostContent;
}

export type { PostProps };
