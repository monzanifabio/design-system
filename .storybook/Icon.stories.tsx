import React from "react";
import { StoryFn } from "@storybook/react";
import { Icon, IconName } from "../src/components/Icon/Icon";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: { type: "select" },
      options: ["home", "search", "history", "project", "assets", "note", "contacts", "calendar"],
    },
    width: { control: { type: "number" } },
    height: { control: { type: "number" } },
    className: { control: { type: "text" } },
  },
};

const Template = (args: { name: IconName; width?: number; height?: number; className?: string }) => <Icon {...args} />;

export const Default: StoryFn<{ name: IconName; width?: number; height?: number; className?: string }> = Template.bind({});
Default.args = {
  name: "home",
  width: 32,
  height: 32,
};
