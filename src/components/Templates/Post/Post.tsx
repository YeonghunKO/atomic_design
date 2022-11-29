import StyledPost from './Post.styles';

import type { PostProps } from '@src/types/Post';

import Header from '@src/components/organism/Header/Header';
import Footer from '@src/components/organism/Footer/Footer';
import PostContent from '@src/components/molecules/PostContent/PostContent';
import Banner from '@src/components/organism/Banner/Banner';
import Related from '@src/components/organism/Related/Related';

const Post = ({ header, footer, related, banner, postContent }: PostProps) => {
  return (
    <StyledPost>
      <Header {...header} />
      <PostContent {...postContent} />
      <Banner {...banner} />
      <Related {...related} />
      <Footer {...footer} />
    </StyledPost>
  );
};

export default Post;
