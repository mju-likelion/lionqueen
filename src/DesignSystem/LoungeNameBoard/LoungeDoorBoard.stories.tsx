import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoungeNameBoard from '.';

export default {
  title: 'Components/LoungeDoorBoard',
  component: LoungeNameBoard,
} as ComponentMeta<typeof LoungeNameBoard>;

const Template: ComponentStory<typeof LoungeNameBoard> = () => <LoungeNameBoard />;
export const Default = Template.bind({});
