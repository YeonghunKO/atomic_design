import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './Header';
import { header } from '@components/Templates/Post/mock.data.json';

export default {
  title: 'Organism/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...header,
};
