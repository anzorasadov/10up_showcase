import React from "react";
import styles from "./ColorSwatch.module.css";

type ColorSwatchProps = {
  color:
    | "--base-bg-color"
    | "--color-sage-100"
    | "--color-sage-200"
    | "--color-sage-300"
    | "--color-sunset-100"
    | "--color-sunset-200"
    | "--color-sunset-300"
    | "--color-black-50"
    | "--color-black-100";
  className: string;
};
const ColorSwatch = ({ color, className }: ColorSwatchProps) => {
  return <div className={`${className} ${styles.swatch}`} style={{ backgroundColor: `var(${color})` }}></div>;
};

export default ColorSwatch;
