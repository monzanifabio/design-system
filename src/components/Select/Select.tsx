import React from "react";
import "./Select.css";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ options, value, onChange, disabled = false, placeholder = "Select", className = "" }) => {
  return (
    <div className={`ds-select${disabled ? " ds-select--disabled" : value ? " ds-select--selected" : ""} ${className}`.trim()}>
      <select className="ds-select__native" value={value ?? ""} onChange={(e) => onChange && onChange(e.target.value)} disabled={disabled} aria-disabled={disabled}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {/* No custom chevron icon */}
    </div>
  );
};
