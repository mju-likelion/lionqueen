import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BackgroundMain from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'backgroundMain',
  component: BackgroundMain,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof BackgroundMain>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BackgroundMain> = args => <BackgroundMain {...args} />;
export const withValue = Template.bind({});
