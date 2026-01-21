import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "success" | "danger" | "outline";
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button", disabled = false, variant = "primary" }) => (
  <button className={`ds-btn ds-btn--${variant}`} type={type} onClick={onClick} disabled={disabled}>
    {label}
  </button>
);
