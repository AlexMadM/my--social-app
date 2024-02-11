import type { Meta, StoryObj } from '@storybook/react';


import MessageSender from "../common/components/dialogs/message-sender/MessageSender";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/MessageSender',
  component: MessageSender,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    M:{
      action:'clic'
    },
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof MessageSender>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Message: Story = {

};

