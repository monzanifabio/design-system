import React from "react";
import "./InputField.css";

export interface InputFieldProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  showIcon?: boolean;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({ value = "", placeholder = "Input content", onChange, disabled = false, showIcon = true, className = "" }) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const getStateClass = () => {
    if (disabled) return "ds-input--disabled";
    if (isFocused) return "ds-input--focus";
    if (!value) return "ds-input--placeholder";
    return "ds-input--default";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`ds-input ${getStateClass()} ${className}`}>
      {showIcon && (
        <div className="ds-input__icon-wrapper">
          <svg className="ds-input__icon" width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.2 5.2C9.2 2.99 7.41 1.2 5.2 1.2C2.99 1.2 1.2 2.99 1.2 5.2C1.2 7.41 2.99 9.2 5.2 9.2C7.41 9.2 9.2 7.41 9.2 5.2ZM8.4275 9.2775C7.5425 9.98 6.42 10.4 5.2 10.4C2.3275 10.4 0 8.0725 0 5.2C0 2.3275 2.3275 0 5.2 0C8.0725 0 10.4 2.3275 10.4 5.2C10.4 6.42 9.98 7.5425 9.2775 8.4275L12.625 11.775C12.86 12.01 12.86 12.39 12.625 12.6225C12.39 12.855 12.01 12.8575 11.7775 12.6225L8.4275 9.2775Z" fill="#71717B" />
          </svg>
        </div>
      )}
      <input type="text" className="ds-input__field" value={value} placeholder={placeholder} onChange={handleChange} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} disabled={disabled} />
    </div>
  );
};
