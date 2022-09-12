import React, { useContext } from "react";
import ThemeContext from "../../contexts/theme";
import "./ThemeSwitcher.css";
import cx from "classnames";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeSwitcher({ style, className }) {
  const theme = useContext(ThemeContext);
  return (
    <button
      onClick={() => {
        theme.setTheme(theme.theme === "dark" ? "light" : "dark");
      }}
      style={style}
      className={cx("themeSwitcher", className)}
    >
      {theme.theme === "dark" ? <FaSun size={25} /> : <FaMoon size={25} />}
    </button>
  );
}
