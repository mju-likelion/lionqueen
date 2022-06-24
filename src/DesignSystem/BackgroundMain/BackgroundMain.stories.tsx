import React from 'react';
import { Story, ComponentStory, ComponentMeta } from '@storybook/react';

import BackgroundMain from '.';

export default {
  title: 'Components/BackgroundMain',
  component: BackgroundMain,
} as ComponentMeta<typeof BackgroundMain>;

const Template: Story<typeof BackgroundMain> = args => <BackgroundMain {...args} />;
export const Default = Template.bind({});
