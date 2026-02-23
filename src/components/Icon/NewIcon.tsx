import React from "react";

// Figma export: https://www.figma.com/design/sR9ZsLwDC9IXG61wV2pxkc/Design-System-Playground?node-id=12252-4856
// This icon uses an external SVG asset as exported from Figma.

export interface NewIconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

const imgVector = "http://localhost:3845/assets/0d5a862015c1f895e0a8623e2ac0ac44387cc829.svg";

export const NewIcon: React.FC<NewIconProps> = ({ className, width = 24, height = 24 }) => {
  return (
    <span className={className} style={{ display: "inline-block", width, height, position: "relative" }} data-name="icon" data-node-id="12252:4856">
      <span style={{ position: "absolute", inset: "10% 15% 15% 15%", width: "70%", height: "75%" }} data-name="Vector" data-node-id="I12252:4856;2:1385">
        <img alt="" src={imgVector} style={{ display: "block", width: "100%", height: "100%", maxWidth: "none", position: "absolute" }} />
      </span>
    </span>
  );
};
