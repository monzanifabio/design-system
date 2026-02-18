import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "../src/components/InputField/InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    value: "Input content",
    placeholder: "Input content",
    showIcon: true,
  },
};

export const Placeholder: Story = {
  args: {
    value: "",
    placeholder: "Input content",
    showIcon: true,
  },
};

export const Disabled: Story = {
  args: {
    value: "Input content",
    placeholder: "Input content",
    disabled: true,
    showIcon: true,
  },
};

export const WithoutIcon: Story = {
  args: {
    value: "Input content",
    placeholder: "Input content",
    showIcon: false,
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
      <div>
        <p style={{ marginBottom: "0.5rem", fontSize: "0.875rem", fontWeight: 600 }}>Default</p>
        <InputField value="Input content" placeholder="Input content" showIcon={true} />
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontSize: "0.875rem", fontWeight: 600 }}>Placeholder</p>
        <InputField value="" placeholder="Input content" showIcon={true} />
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontSize: "0.875rem", fontWeight: 600 }}>Focus (click to see)</p>
        <InputField value="Input content" placeholder="Input content" showIcon={true} />
      </div>
      <div>
        <p style={{ marginBottom: "0.5rem", fontSize: "0.875rem", fontWeight: 600 }}>Disabled</p>
        <InputField value="Input content" placeholder="Input content" disabled={true} showIcon={true} />
      </div>
    </div>
  ),
};
