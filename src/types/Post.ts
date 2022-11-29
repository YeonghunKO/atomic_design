import type { HeaderProps } from '@src/types/Header';
import type { FooterProps } from '@src/types/Footer';
import type { BannerProps } from '@src/types/Banner';
import type { RelatedProps } from '@src/types/Related';

interface PostContent {
  content: string;
}
interface PostProps {
  header: HeaderProps;
  footer: FooterProps;
  related: RelatedProps;
  banner: BannerProps;
  postContent: PostContent;
}

export type { PostProps };
