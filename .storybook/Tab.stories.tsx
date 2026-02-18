import type { Meta, StoryObj } from "@storybook/react";
import { Tab } from "../src/components/Tab/Tab";

const meta: Meta<typeof Tab> = {
  title: "Design System/Tab",
  component: Tab,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Tab>;

const Icon = (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.5999 2.3999C2.9374 2.3999 2.3999 2.9374 2.3999 3.5999V7.5999C2.3999 8.2624 2.9374 8.7999 3.5999 8.7999H5.9999C6.6624 8.7999 7.1999 8.2624 7.1999 7.5999V3.5999C7.1999 2.9374 6.6624 2.3999 5.9999 2.3999H3.5999ZM9.9999 7.1999C9.3374 7.1999 8.7999 7.7374 8.7999 8.3999V12.3999C8.7999 13.0624 9.3374 13.5999 9.9999 13.5999H12.3999C13.0624 13.5999 13.5999 13.0624 13.5999 12.3999V8.3999C13.5999 7.7374 13.0624 7.1999 12.3999 7.1999H9.9999ZM2.3999 11.5999V12.3999C2.3999 13.0624 2.9374 13.5999 3.5999 13.5999H5.9999C6.6624 13.5999 7.1999 13.0624 7.1999 12.3999V11.5999C7.1999 10.9374 6.6624 10.3999 5.9999 10.3999H3.5999C2.9374 10.3999 2.3999 10.9374 2.3999 11.5999ZM9.9999 2.3999C9.3374 2.3999 8.7999 2.9374 8.7999 3.5999V4.3999C8.7999 5.0624 9.3374 5.5999 9.9999 5.5999H12.3999C13.0624 5.5999 13.5999 5.0624 13.5999 4.3999V3.5999C13.5999 2.9374 13.0624 2.3999 12.3999 2.3999H9.9999Z"
      fill="currentColor"
    />
  </svg>
);

export const Default: Story = {
  args: {
    label: "Tab",
    state: "Unselected",
    icon: Icon,
  },
};

export const Selected: Story = {
  args: {
    label: "Tab",
    state: "Selected",
    icon: Icon,
  },
};

export const Disabled: Story = {
  args: {
    label: "Tab",
    disabled: true,
    icon: Icon,
  },
};

export const WithoutIcon: Story = {
  args: {
    label: "Tab",
    state: "Unselected",
    icon: false,
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Tab label="Unselected" icon={Icon} />
      <Tab label="Selected" state="Selected" icon={Icon} />
      <Tab label="Disabled" disabled icon={Icon} />
      <Tab label="No Icon" icon={false} />
    </div>
  ),
};
