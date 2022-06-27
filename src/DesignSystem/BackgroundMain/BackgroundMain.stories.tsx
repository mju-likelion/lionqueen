import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BackgroundMain from '.';
import { theme } from '~/styles/theme';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/BackgroundMain',
  component: BackgroundMain,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof BackgroundMain>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BackgroundMain> = args => (
  <ThemeProvider theme={theme}>
    <BackgroundMain {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
