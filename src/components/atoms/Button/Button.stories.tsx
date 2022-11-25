import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';
import Icons from '../../Icons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    icon: {
      options: [...Object.keys(Icons)],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

const buttonClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  alert('functional button!');
};

export const Basic = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  children: 'Basic',
  variant: 'primary',
  icon: 'Cart',
};

export const Function = Template.bind({});
Function.args = {
  children: 'Function',
  onClick: buttonClicked,
  icon: 'User',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: 'Tertiary',
  variant: 'tertiary',
  icon: 'X',
};

export const Linked = Template.bind({});
Linked.args = {
  href: '/route',
  children: 'Linked',
  icon: 'Plus',
};
