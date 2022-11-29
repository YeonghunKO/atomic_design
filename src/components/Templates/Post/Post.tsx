import StyledPost from './Post.styles';
import Header from '@src/components/organism/Header/Header';
import Footer from '@src/components/organism/Footer/Footer';
import type { PostProps } from '@src/types/Post';
import PostContent from '@src/components/molecules/PostContent/PostContent';

const Post = ({ header, footer, related, banner, postContent }: PostProps) => {
  console.log(header);

  return (
    <StyledPost>
      <Header {...header} />
      <PostContent {...postContent} />
      <Footer {...footer} />
    </StyledPost>
  );
};

export default Post;
