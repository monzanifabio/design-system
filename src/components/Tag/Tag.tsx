import React from "react";
import "./Tag.css";

export type TagProps = {
  className?: string;
  colour?: "Blue" | "Cyan" | "Teal" | "Green" | "Gray" | "Purple" | "Pink" | "Red" | "Amber";
  content?: string;
  dismissable?: boolean;
  icon?: boolean;
  style?: "Default" | "Light";
  text?: boolean;
  onDismiss?: () => void;
};

const Tag: React.FC<TagProps> = ({ className, colour = "Blue", content = "Badge", dismissable = true, icon = true, style = "Default", text = true, onDismiss }) => {
  const colourLower = colour.toLowerCase();
  const styleClass = style === "Default" ? "default" : "light";

  const baseClass = `tag tag--${styleClass} tag--${colourLower}`;
  const finalClass = className ? `${baseClass} ${className}` : baseClass;

  return (
    <div className={finalClass}>
      {icon && (
        <svg className="tag__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.6667 1.33334H3.33333C2.59333 1.33334 2 1.92667 2 2.66667V13.3333C2 14.0733 2.59333 14.6667 3.33333 14.6667H12.6667C13.4067 14.6667 14 14.0733 14 13.3333V2.66667C14 1.92667 13.4067 1.33334 12.6667 1.33334ZM12.6667 13.3333H3.33333V5.33334H12.6667V13.3333ZM5.33333 6.66667H10.6667V8H5.33333V6.66667ZM5.33333 9.33334H10.6667V10.6667H5.33333V9.33334ZM5.33333 12H8.66667V13.3333H5.33333V12Z" fill="currentColor" />
        </svg>
      )}
      {text && <span className="tag__text">{content}</span>}
      {dismissable && (
        <button className="tag__dismiss" onClick={onDismiss} aria-label="Dismiss" type="button">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6 4.27334L11.7267 3.40001L8 7.12668L4.27333 3.40001L3.4 4.27334L7.12667 8.00001L3.4 11.7267L4.27333 12.6L8 8.87334L11.7267 12.6L12.6 11.7267L8.87333 8.00001L12.6 4.27334Z" fill="currentColor" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Tag;
