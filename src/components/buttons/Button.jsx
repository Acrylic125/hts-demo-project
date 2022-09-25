import React from "react";
import styles from "./Button.module.css";
import cx from "classnames";

export default function Button({ className, children, ...props }) {
  return (
    <button {...props} className={cx(styles.button, className)}>
      {children}
    </button>
  );
}
