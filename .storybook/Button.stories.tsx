import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../src/components/Button/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Button",
  },
};

export const WithoutStartIcon: Story = {
  args: {
    label: "Button",
    startIcon: false,
  },
};

export const WithoutEndIcon: Story = {
  args: {
    label: "Button",
    endIcon: false,
  },
};

export const WithoutIcons: Story = {
  args: {
    label: "Button",
    startIcon: false,
    endIcon: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Button",
    disabled: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
      <Button label="Button" />
      <Button label="Button" disabled />
      <Button label="Button" variant="outline" />
      <Button label="Button" variant="outline" disabled />
    </div>
  ),
};

export const Outline: Story = {
  args: {
    label: "Button",
    variant: "outline",
  },
};

export const OutlineDisabled: Story = {
  args: {
    label: "Button",
    variant: "outline",
    disabled: true,
  },
};
