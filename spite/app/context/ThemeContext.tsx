import React, { ReactNode, createContext, useState } from "react";
import { Themes, type Theme } from "@/constants/themes";

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  const theme = isDark ? Themes.dark : Themes.light;

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
