import React from "react";
import "./Tab.css";

const defaultIcon = (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.5999 2.3999C2.9374 2.3999 2.3999 2.9374 2.3999 3.5999V7.5999C2.3999 8.2624 2.9374 8.7999 3.5999 8.7999H5.9999C6.6624 8.7999 7.1999 8.2624 7.1999 7.5999V3.5999C7.1999 2.9374 6.6624 2.3999 5.9999 2.3999H3.5999ZM9.9999 7.1999C9.3374 7.1999 8.7999 7.7374 8.7999 8.3999V12.3999C8.7999 13.0624 9.3374 13.5999 9.9999 13.5999H12.3999C13.0624 13.5999 13.5999 13.0624 13.5999 12.3999V8.3999C13.5999 7.7374 13.0624 7.1999 12.3999 7.1999H9.9999ZM2.3999 11.5999V12.3999C2.3999 13.0624 2.9374 13.5999 3.5999 13.5999H5.9999C6.6624 13.5999 7.1999 13.0624 7.1999 12.3999V11.5999C7.1999 10.9374 6.6624 10.3999 5.9999 10.3999H3.5999C2.9374 10.3999 2.3999 10.9374 2.3999 11.5999ZM9.9999 2.3999C9.3374 2.3999 8.7999 2.9374 8.7999 3.5999V4.3999C8.7999 5.0624 9.3374 5.5999 9.9999 5.5999H12.3999C13.0624 5.5999 13.5999 5.0624 13.5999 4.3999V3.5999C13.5999 2.9374 13.0624 2.3999 12.3999 2.3999H9.9999Z"
      fill="currentColor"
    />
  </svg>
);

export interface TabProps {
  label: string;
  state?: "Selected" | "Hover" | "Unselected";
  onClick?: () => void;
  icon?: boolean | React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Tab: React.FC<TabProps> = ({ label, state = "Unselected", onClick, icon = true, className = "", disabled = false }) => {
  // Determine state class
  let stateClass = "ds-tab--unselected";
  if (state === "Selected") stateClass = "ds-tab--selected";
  else if (state === "Hover") stateClass = "ds-tab--hover";

  return (
    <a className={["ds-tab", stateClass, className, disabled ? "ds-tab--disabled" : ""].filter(Boolean).join(" ")} onClick={onClick} aria-selected={state === "Selected"} role="tab" aria-disabled={disabled}>
      {icon && <span className="ds-tab__icon">{icon === true ? defaultIcon : icon}</span>}
      <span className="ds-tab__label">{label}</span>
    </a>
  );
};

export default Tab;
