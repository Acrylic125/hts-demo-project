import React from "react";

/** @type {import("react").Context<{ theme: 'light' | 'dark', setTheme: (theme: 'light' | 'dark') => void}>} */
const ThemeContext = React.createContext({
  theme: "light",
  setTheme: (theme) => {},
});

export default ThemeContext;
