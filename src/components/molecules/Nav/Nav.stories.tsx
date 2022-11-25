import { ComponentStory, ComponentMeta } from '@storybook/react';

import Nav from './Nav';

const items = [
  { url: '#', text: 'home', icon: 'Cart' },
  { url: '#', text: 'about me' },
  { url: '#', text: 'contact' },
];

export default {
  title: 'Molocules/Nav',
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
