import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@repo/ui/card";

const meta = {
  title: "UI/Card",
  component: Card,
  args: {
    title: "OpenPlan",
    href: "https://example.com",
    children: "A reusable card from @repo/ui"
  }
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
