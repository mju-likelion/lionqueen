import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FloorButton from '.';

export default {
  title: 'Components/FloorButton',
  component: FloorButton,
} as ComponentMeta<typeof FloorButton>;

const Template: ComponentStory<typeof FloorButton> = () => <FloorButton />;
export const Default = Template.bind({});
