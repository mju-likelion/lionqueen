import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputGroup from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/InputGroup",
  component: InputGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof InputGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputGroup> = (args) => (
  <InputGroup {...args} />
);
export const withPlaceholder = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withPlaceholder.args = {
  id: "input",
  label: "라벨",
  placeholder: "어쩌구저쩌구",
};

export const withValue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withValue.args = {
  id: "input",
  label: "라벨",
  value: "inputValue",
  placeholder: "어쩌구저쩌구",
};

export const withError = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withError.args = {
  id: "input",
  label: "라벨",
  error: "에러메시지",
  value: "inputValue",
  placeholder: "어쩌구저쩌구",
  labelPos: "up",
};

export const customLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
customLabel.args = {
  id: "input",
  label: <h1 className="text-2xl">라벨</h1>,
  value: "inputValue",
  placeholder: "어쩌구저쩌구",
};

export const withLabelDist = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withLabelDist.args = {
  id: "input",
  label: "라벨",
  value: "inputValue",
  placeholder: "어쩌구저쩌구",
  labelPos: "left",
  labelDist: 20,
};
