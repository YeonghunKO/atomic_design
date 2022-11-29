import { ComponentStory, ComponentMeta } from '@storybook/react';

import Banner from './Banner';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organism/Banner',
  component: Banner,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Banner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Banner> = args => <Banner {...args} />;

export const Basic = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  default: {
    content:
      'Multi Award Winning Spa Manager Clare Pritchard shares the story of Celtic Elements.',
    cta: {
      title: 'Lowered action',
      url: '/discount',
    },
    title: 'Launch discount',
    variant: 'primary',
  },
};
