import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../src/components/Button/Button";

const meta: Meta<typeof Button> = {
  title: "Design System/Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
  },
};

export const Success: Story = {
  args: {
    label: "Success Button",
    variant: "success",
  },
};

export const Danger: Story = {
  args: {
    label: "Danger Button",
    variant: "danger",
  },
};

export const Outline: Story = {
  args: {
    label: "Outline Button",
    variant: "outline",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "300px" }}>
      <Button label="Primary" variant="primary" />
      <Button label="Secondary" variant="secondary" />
      <Button label="Success" variant="success" />
      <Button label="Danger" variant="danger" />
      <Button label="Outline" variant="outline" />
      <Button label="Disabled" variant="primary" disabled />
    </div>
  ),
};
