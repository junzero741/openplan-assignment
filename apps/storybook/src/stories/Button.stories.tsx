import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui/button";

const meta = {
  title: "UI/Button",
  component: Button,
  args: {
    children: "Click me"
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hover: Story = {
  args: {
    className: `opacity-80`
  },
  name: "Hover"
};

export const Pressed: Story = {
  args: {
    className: `opacity-80`
  },
  name: "Pressed"
};
