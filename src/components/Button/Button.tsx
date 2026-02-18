import React from "react";
import "./Button.css";

import type { IconProps } from "../Icon/Icon";

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  startIcon?: boolean | React.ReactNode | ((props?: Partial<IconProps>) => React.ReactNode);
  endIcon?: boolean | React.ReactNode | ((props?: Partial<IconProps>) => React.ReactNode);
  startIconProps?: Partial<IconProps>;
  endIconProps?: Partial<IconProps>;
  variant?: "primary" | "outline";
}

export const Button: React.FC<ButtonProps> = ({ label = "Button", onClick, type = "button", disabled = false, startIcon = true, endIcon = true, startIconProps = {}, endIconProps = {}, variant = "primary" }) => {
  let variantClass = "ds-btn-primary";
  if (variant === "outline") {
    variantClass = "ds-btn-primary--outline";
  }
  const btnClass = ["ds-btn", variantClass].join(" ");

  let startIconNode: React.ReactNode = null;
  if (startIcon) {
    if (typeof startIcon === "function") {
      startIconNode = startIcon(startIconProps);
    } else if (startIcon === true) {
      startIconNode = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.6667 8.66667H8.66667V12.6667H7.33333V8.66667H3.33333V7.33333H7.33333V3.33333H8.66667V7.33333H12.6667V8.66667Z" fill="currentColor" />
        </svg>
      );
    } else {
      startIconNode = startIcon;
    }
  }

  let endIconNode: React.ReactNode = null;
  if (endIcon) {
    if (typeof endIcon === "function") {
      endIconNode = endIcon(endIconProps);
    } else if (endIcon === true) {
      endIconNode = (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 10.6667L3.33333 6L4.27333 5.06L8 8.78667L11.7267 5.06L12.6667 6L8 10.6667Z" fill="currentColor" />
        </svg>
      );
    } else {
      endIconNode = endIcon;
    }
  }

  return (
    <button className={btnClass} type={type} onClick={onClick} disabled={disabled}>
      {startIconNode && <span className="ds-btn__icon">{startIconNode}</span>}
      <span className="ds-btn__label">{label}</span>
      {endIconNode && <span className="ds-btn__icon">{endIconNode}</span>}
    </button>
  );
};
