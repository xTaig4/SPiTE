export const Themes = {
  light: {
    primary: "rgb(240, 255, 190)",
    background: "rgb(254, 255, 240)",
    surface: "#e6e7e3ff",
    text: "#2c2c2cff",
    textSecondary: "#c0bd00ff",
    border: "#474747",
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
