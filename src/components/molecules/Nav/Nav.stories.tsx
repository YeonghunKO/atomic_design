import { ComponentStory, ComponentMeta } from '@storybook/react';

import Nav from './Nav';

const items = [
  { url: '#', title: 'home', icon: 'Cart' },
  { url: '#', title: 'about me' },
  { url: '#', title: 'contact' },
];

export default {
  title: 'Molecules/Nav',
  component: Nav,
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = args => <Nav {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  items,
  direction: 'horizontal',
};

export const Vertical = Template.bind({});
Vertical.args = {
  items,
  direction: 'vertical',
};
