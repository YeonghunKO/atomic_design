import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from './Footer';

export default {
  title: 'Organism/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />;

const menu = [
  {
    title: 'Menu1',
    item: [{ url: '#', text: 'home' }],
  },
  {
    title: 'Menu2',
    item: [{ url: '#', text: 'about me' }],
  },
  {
    title: 'Menu3',
    item: [{ url: '#', text: 'contact' }],
  },
];

export const FooterDefault = Template.bind({});
FooterDefault.args = {
  menu,
};
