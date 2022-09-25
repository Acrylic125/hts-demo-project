import React, { useContext } from "react";
import ThemeContext from "../../contexts/theme";
import styles from "./ThemeSwitcher.module.css";
import cx from "classnames";
import { FaSun, FaMoon } from "react-icons/fa";
import Button from "../buttons/Button";

export default function ThemeSwitcher({ style, className }) {
  const theme = useContext(ThemeContext);
  return (
    <Button
      onClick={() => {
        theme.setTheme(theme.theme === "dark" ? "light" : "dark");
      }}
      style={style}
      className={cx(styles.themeSwitcher, className)}
    >
      {theme.theme === "dark" ? <FaMoon size={25} /> : <FaSun size={25} />}
    </Button>
  );
}
