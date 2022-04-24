import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Orange = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Orange.args = {
  type: "button",
  size: "small",
  variant: "filled",
  color: "primary-orange",
  children: "버튼",
};

export const Green = Template.bind({});
Green.args = {
  type: "button",
  size: "small",
  variant: "filled",
  color: "primary-green",
  children: "버튼",
};
