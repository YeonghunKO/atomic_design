import { ComponentStory, ComponentMeta } from '@storybook/react';

import Nav from './Nav';

const items = [
  { href: '#', text: 'home' },
  { href: '#', text: 'about me' },
  { href: '#', text: 'contact' },
];

export default {
  title: 'Example/Nav',
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
