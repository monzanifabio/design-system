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
          <path d="M3 0C3.3325 0 3.6 0.2675 3.6 0.6V1.6H7.6V0.6C7.6 0.2675 7.8675 0 8.2 0C8.5325 0 8.8 0.2675 8.8 0.6V1.6H9.6C10.4825 1.6 11.2 2.3175 11.2 3.2V10.4C11.2 11.2825 10.4825 12 9.6 12H1.6C0.7175 12 0 11.2825 0 10.4V3.2C0 2.3175 0.7175 1.6 1.6 1.6H2.4V0.6C2.4 0.2675 2.6675 0 3 0ZM3 2.8H1.6C1.38 2.8 1.2 2.98 1.2 3.2V4.4H10V3.2C10 2.98 9.82 2.8 9.6 2.8H3ZM1.2 5.6V10.4C1.2 10.62 1.38 10.8 1.6 10.8H9.6C9.82 10.8 10 10.62 10 10.4V5.6H1.2Z" fill="currentColor" />
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
