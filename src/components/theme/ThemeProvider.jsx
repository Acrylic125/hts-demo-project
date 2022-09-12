import React from "react";
import ThemeContext from "../../contexts/theme";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState("light");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: (newTheme) => {
          console.log("newTheme", newTheme);
          setTheme(newTheme);
        },
      }}
    >
      <div className={`${theme === "dark" ? "dark" : "light"}`}>{children}</div>
    </ThemeContext.Provider>
  );
}
