import React from "react";
import "./Playground.css";
import { Button } from "../Button/Button";
import { InputField } from "../InputField/InputField";
import { Tag } from "../Tag/Tag";

export const Playground: React.FC = () => {
  return (
    <div className="playground">
      <div className="playground__header">
        <h1>Design System Playground</h1>
        <p>Build and test interfaces using your components</p>
      </div>

      <div className="playground__canvas">{/* Add your components here to build interfaces */}</div>
    </div>
  );
};
