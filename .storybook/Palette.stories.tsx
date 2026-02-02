import type { Meta, StoryObj } from "@storybook/react";
import { Palette } from "../src/components/Palette/Palette";
import { colors } from "../src/styles/tokens";

const meta: Meta<typeof Palette> = {
  title: "Design System/Palette",
  component: Palette,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Palette>;

// Convert color scale to ColorSwatch array
const createColorSwatches = (colorName: string, colorScale: Record<string, string>) => {
  return Object.entries(colorScale).map(([shade, value]) => ({
    name: `${colorName}-${shade}`,
    value,
    label: shade,
  }));
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Palette title="Gray" colors={createColorSwatches("gray", colors.gray)} showHex={true} swatchSize="medium" />
      <Palette title="Green" colors={createColorSwatches("green", colors.green)} showHex={true} swatchSize="medium" />
      <Palette title="Teal" colors={createColorSwatches("teal", colors.teal)} showHex={true} swatchSize="medium" />
      <Palette title="Cyan" colors={createColorSwatches("cyan", colors.cyan)} showHex={true} swatchSize="medium" />
      <Palette title="Blue" colors={createColorSwatches("blue", colors.blue)} showHex={true} swatchSize="medium" />
      <Palette title="Purple" colors={createColorSwatches("purple", colors.purple)} showHex={true} swatchSize="medium" />
      <Palette title="Pink" colors={createColorSwatches("pink", colors.pink)} showHex={true} swatchSize="medium" />
      <Palette title="Red" colors={createColorSwatches("red", colors.red)} showHex={true} swatchSize="medium" />
      <Palette title="Amber" colors={createColorSwatches("amber", colors.amber)} showHex={true} swatchSize="medium" />
    </div>
  ),
};
