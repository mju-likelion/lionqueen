import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoungeDoor from '.';

export default {
  title: 'Components/LoungeDoor',
  component: LoungeDoor,
} as ComponentMeta<typeof LoungeDoor>;

const Template: ComponentStory<typeof LoungeDoor> = () => <LoungeDoor />;
export const Default = Template.bind({});
