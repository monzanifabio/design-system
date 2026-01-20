import React from "react";
import "./Palette.css";

export interface ColorSwatch {
  name: string;
  value: string;
  label?: string;
}

export interface PaletteProps {
  title?: string;
  colors: ColorSwatch[];
  showHex?: boolean;
  swatchSize?: "small" | "medium" | "large";
}

export const Palette: React.FC<PaletteProps> = ({ title, colors, showHex = true, swatchSize = "medium" }) => {
  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div className="ds-palette">
      {title && <h3 className="ds-palette__title">{title}</h3>}
      <div className={`ds-palette__grid ds-palette__grid--${swatchSize}`}>
        {colors.map((color, index) => (
          <div key={`${color.name}-${index}`} className="ds-palette__swatch" onClick={() => copyToClipboard(color.value)} title={`Click to copy: ${color.value}`}>
            <div className="ds-palette__color" style={{ backgroundColor: color.value }} />
            <div className="ds-palette__info">
              <span className="ds-palette__name">{color.label || color.name}</span>
              {showHex && <span className="ds-palette__hex">{color.value}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
