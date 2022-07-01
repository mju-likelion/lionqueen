import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputGroup from '.';
import { theme } from '~/styles/theme';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/InputGroup',
  component: InputGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof InputGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputGroup> = args => (
  <ThemeProvider theme={theme}>
    <InputGroup {...args}>
      <input placeholder="asdasd" name="input" id="input" />
    </InputGroup>
  </ThemeProvider>
);
export const commonLeft = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
commonLeft.args = {
  id: 'input',
  label: '라벨',
  labelPos: 'left',
};

export const commonUp = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
commonUp.args = {
  id: 'input',
  label: '라벨',
  labelPos: 'up',
};

export const leftError = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
leftError.args = {
  id: 'input',
  label: '라벨',
  labelPos: 'left',
  error: '에러메시지',
};

export const upError = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
upError.args = {
  id: 'input',
  label: '라벨',
  error: '에러메시지',
};

export const leftDist = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
leftDist.args = {
  id: 'input',
  label: '라벨',
  labelPos: 'left',
  labelDist: 12,
};

export const upDist = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
upDist.args = {
  id: 'input',
  label: '라벨',
  labelPos: 'up',
  labelDist: 12,
};

export const fullWidth = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
fullWidth.args = {
  id: 'input',
  label: '라벨',
  fullWidth: true,
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
