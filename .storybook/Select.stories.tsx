import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectOption } from "../src/components/Select/Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Select>;

const options: SelectOption[] = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
];

export const Default: Story = {
  args: {
    options,
    placeholder: "Select",
  },
};

export const Selected: Story = {
  args: {
    options,
    value: "2",
    disabled: false,
    placeholder: "Ciao\n"
  },
};

export const Disabled: Story = {
  args: {
    options,
    disabled: true,
  },
};
