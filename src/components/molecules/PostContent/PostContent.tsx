import React from 'react';
import StyledPostContent from './PostContent.styles';
import HTMLReactParser from 'html-react-parser';

const PostContent = ({ content }: { content: string }) => {
  return <StyledPostContent>{HTMLReactParser(content)}</StyledPostContent>;
};

export default PostContent;
