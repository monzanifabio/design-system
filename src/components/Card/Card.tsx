import React from "react";
import "./Card.css";

export interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className = "", children }) => {
  return (
    <div className={`card-component ${className}`.trim()} data-name="Card" data-node-id="12215:91">
      {children}
    </div>
  );
};

export default Card;
