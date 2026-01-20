import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button", disabled = false }) => (
  <button className="ds-btn" type={type} onClick={onClick} disabled={disabled}>
    {label}
  </button>
);
