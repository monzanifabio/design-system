import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["./Button.stories.tsx", "./Palette.stories.tsx", "./InputField.stories.tsx", "./Tag.stories.tsx"],
  framework: "@storybook/react-vite",
};
export default config;
