import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../src/components/Card/Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Card> = {
  args: {
    children: <div style={{ minHeight: 80, minWidth: 200 }}>Card content</div>,
  },
};
