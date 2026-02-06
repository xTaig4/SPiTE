export const Themes = {
  light: {
    primary: "#cad3ab",
    background: "rgb(248, 250, 223)",
    surface: "#e7e3e3ff",
    text: "#2c2c2cff",
    textSecondary: "#c0bd00ff",
    border: "#E0E0E0",
    selectedHighlight: "#d0dd58ff",
    selectedText: "#000000",
  },
  dark: {
    primary: "#0c3864",
    background: "rgb(38, 38, 66)",
    surface: "#2C2C2E",
    text: "#fffff8ff",
    textSecondary: "#fffec3ff",
    border: "#3A3A3C",
    selectedHighlight: "#bcca3eff",
    selectedText: "#ffffffff",
  },
};

export type Theme = typeof Themes.light;
