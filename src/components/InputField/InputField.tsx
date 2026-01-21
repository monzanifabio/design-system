import React from "react";
import "./InputField.css";
import searchIcon from "../../assets/search-icon.svg";

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
          <img src={searchIcon} alt="" className="ds-input__icon" />
        </div>
      )}
      <input type="text" className="ds-input__field" value={value} placeholder={placeholder} onChange={handleChange} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} disabled={disabled} />
    </div>
  );
};
