import { ComponentStory, ComponentMeta } from '@storybook/react';

import Related from './Related';
import { related } from '@components/Templates/Post/mock.data.json';

export default {
  title: 'Organism/Related',
  component: Related,
} as ComponentMeta<typeof Related>;

const Template: ComponentStory<typeof Related> = args => <Related {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...related,
};
