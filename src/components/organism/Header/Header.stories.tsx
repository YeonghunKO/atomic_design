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
        text: 'Shop',
        url: '#',
      },
      {
        icon: null,
        text: 'About Me',
        url: '#',
      },
      {
        icon: null,
        text: 'FAQ',
        url: '#',
      },
      {
        icon: null,
        text: 'Contact',
        url: '#',
      },
    ],
  },
  {
    title: 'account',
    items: [
      {
        icon: null,
        text: 'User',
        url: '#',
      },
      {
        icon: 'User',
        text: 'Insights',
        url: '#',
      },
      {
        icon: 'Bag',
        text: 'Account',
        url: '#',
      },
    ],
  },
];

export const Basic = Template.bind({});
Basic.args = {
  navigation,
};
