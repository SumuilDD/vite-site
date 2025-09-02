import styles from "./Button.module.scss";
import React from "react";

// ІМЕНОВАНИЙ ЕКСПОРТ!
export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => (
  <button className={styles.button} {...props}>{children}</button>
);
