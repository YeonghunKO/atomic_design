import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from './Footer';

export default {
  title: 'Organism/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />;

const menus = [
  {
    title: 'Menu1',
    items: [{ url: '#', title: 'home' }],
  },
  {
    title: 'Menu2',
    items: [{ url: '#', title: 'about me' }],
  },
  {
    title: 'Menu3',
    items: [{ url: '#', title: 'contact' }],
  },
];

export const Basic = Template.bind({});
Basic.args = {
  menus,
};
