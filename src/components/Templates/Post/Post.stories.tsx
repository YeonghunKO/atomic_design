import { ComponentStory, ComponentMeta } from '@storybook/react';

import Post from './Post';
import PostMockData from './mock.data.json';

export default {
  title: 'Template/Post',
  component: Post,
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = args => <Post {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...PostMockData,
};
