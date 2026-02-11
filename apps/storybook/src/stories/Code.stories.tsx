import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "@repo/ui/code";

const meta = {
  title: "UI/Code",
  component: Code,
  args: {
    children: "pnpm dev"
  }
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
