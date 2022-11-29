import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './Header';

export default {
  title: 'Organism/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

const navigation = [
  {
    title: 'general',
    items: [
      {
        icon: null,
        title: 'Shop',
        url: '#',
      },
      {
        icon: null,
        title: 'About Me',
        url: '#',
      },
      {
        icon: null,
        title: 'FAQ',
        url: '#',
      },
      {
        icon: null,
        title: 'Contact',
        url: '#',
      },
    ],
  },
  {
    title: 'account',
    items: [
      {
        icon: null,
        title: 'User',
        url: '#',
      },
      {
        icon: 'User',
        title: 'Insights',
        url: '#',
      },
      {
        icon: 'Bag',
        title: 'Account',
        url: '#',
      },
    ],
  },
];

export const Basic = Template.bind({});
Basic.args = {
  navigation,
};
