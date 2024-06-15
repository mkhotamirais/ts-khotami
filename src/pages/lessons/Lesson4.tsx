import React, { createContext, useContext } from "react";

const theme = {
  primary: { main: "#3f51b5", text: "#fff" },
  secondary: { main: "#f50057", text: "#fff" },
};

const ThemeContext = createContext(theme);
const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
const Box = () => {
  const theme = useContext(ThemeContext);
  return <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>theme context</div>;
};
export default function Lesson4() {
  return (
    <div>
      Lesson4
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}
