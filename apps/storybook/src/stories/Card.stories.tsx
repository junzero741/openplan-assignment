import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@repo/ui/card";

const meta = {
  title: "UI/Card",
  component: Card,
  args: {
    items: [
      { label: "Name", value: "OpenPlan" },
      { label: "Description", value: "A reusable card from @repo/ui" },
    ],
  },
  parameters: {
    backgrounds: {
      default: "light-gray",
      values: [{ name: "light-gray", value: "#f0f0f0" }],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LongContent: Story = {
  args: {
    items: [
      {
        label: "Name",
        value: "OpenPlan with a very long name that might overflow",
      },
      {
        label: "Description",
        value:
          "A reusable card from @repo/ui with an extended description to test layout behavior in various scenarios",
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};
