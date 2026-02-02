import type { Meta, StoryObj } from "@storybook/react";
import Tag from "../src/components/Tag/Tag";

const meta: Meta<typeof Tag> = {
  title: "Design System/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    colour: {
      control: "select",
      options: ["Blue", "Cyan", "Teal", "Green", "Gray", "Purple", "Pink", "Red", "Amber"],
    },
    style: {
      control: "select",
      options: ["Default", "Light"],
    },
    content: {
      control: "text",
    },
    icon: {
      control: "boolean",
    },
    text: {
      control: "boolean",
    },
    dismissable: {
      control: "boolean",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const DefaultBlue: Story = {
  args: {
    colour: "Blue",
    style: "Default",
    content: "Badge",
    icon: true,
    text: true,
    dismissable: true,
  },
};

export const LightBlue: Story = {
  args: {
    colour: "Blue",
    style: "Light",
    content: "Badge",
    icon: true,
    text: true,
    dismissable: true,
  },
};

export const WithoutIcon: Story = {
  args: {
    colour: "Blue",
    style: "Default",
    content: "Badge",
    icon: false,
    text: true,
    dismissable: true,
  },
};

export const WithoutDismiss: Story = {
  args: {
    colour: "Blue",
    style: "Default",
    content: "Badge",
    icon: true,
    text: true,
    dismissable: false,
  },
};

export const TextOnly: Story = {
  args: {
    colour: "Blue",
    style: "Default",
    content: "Badge",
    icon: false,
    text: true,
    dismissable: false,
  },
};

export const AllDefaultColors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
      <Tag colour="Blue" style="Default" content="Blue" />
      <Tag colour="Purple" style="Default" content="Purple" />
      <Tag colour="Pink" style="Default" content="Pink" />
      <Tag colour="Red" style="Default" content="Red" />
      <Tag colour="Amber" style="Default" content="Amber" />
      <Tag colour="Cyan" style="Default" content="Cyan" />
      <Tag colour="Teal" style="Default" content="Teal" />
      <Tag colour="Green" style="Default" content="Green" />
      <Tag colour="Gray" style="Default" content="Gray" />
    </div>
  ),
};

export const AllLightColors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
      <Tag colour="Blue" style="Light" content="Blue" />
      <Tag colour="Purple" style="Light" content="Purple" />
      <Tag colour="Pink" style="Light" content="Pink" />
      <Tag colour="Red" style="Light" content="Red" />
      <Tag colour="Amber" style="Light" content="Amber" />
      <Tag colour="Cyan" style="Light" content="Cyan" />
      <Tag colour="Teal" style="Light" content="Teal" />
      <Tag colour="Green" style="Light" content="Green" />
      <Tag colour="Gray" style="Light" content="Gray" />
    </div>
  ),
};

export const AllVariations: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, auto)", gap: "1rem", alignItems: "center" }}>
      <div style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>Default Style</div>
      <div style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>Light Style</div>

      <Tag colour="Blue" style="Default" content="Badge" />
      <Tag colour="Blue" style="Light" content="Badge" />

      <Tag colour="Cyan" style="Default" content="Badge" />
      <Tag colour="Cyan" style="Light" content="Badge" />

      <Tag colour="Teal" style="Default" content="Badge" />
      <Tag colour="Teal" style="Light" content="Badge" />

      <Tag colour="Green" style="Default" content="Badge" />
      <Tag colour="Green" style="Light" content="Badge" />

      <Tag colour="Gray" style="Default" content="Badge" />
      <Tag colour="Gray" style="Light" content="Badge" />

      <Tag colour="Purple" style="Default" content="Badge" />
      <Tag colour="Purple" style="Light" content="Badge" />

      <Tag colour="Pink" style="Default" content="Badge" />
      <Tag colour="Pink" style="Light" content="Badge" />

      <Tag colour="Red" style="Default" content="Badge" />
      <Tag colour="Red" style="Light" content="Badge" />

      <Tag colour="Amber" style="Default" content="Badge" />
      <Tag colour="Amber" style="Light" content="Badge" />
    </div>
  ),
};
