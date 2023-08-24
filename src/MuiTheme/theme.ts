import { createTheme } from "@mui/material/styles";

interface CustomPalette {
  primary: string;
  text: string;
  textSecondary: string;
  background: string;
  backgroundVariant: string;
  border: string;
  borderLight: string;
}

const lightThemeProperties: CustomPalette = {
  primary: 'rgba(215,113,88,1)',
  text: 'rgba(58,52,51,1)',
  textSecondary: 'rgba(58,52,51,0.7)',
  background: 'rgba(255,255,255,1)',
  backgroundVariant: 'rgba(251,249,249,1)',
  border: 'rgba(58,52,51,0.12)',
  borderLight: 'rgba(58,52,51,0.05)',
};

const darkThemeProperties: CustomPalette = {
  primary: 'rgba(220,120,95,1)',
  text: 'rgba(241,233,231,1)',
  textSecondary: 'rgba(241,233,231,0.6)',
  background: 'rgba(0,0,0,1)',
  backgroundVariant: 'rgba(28,26,26,1)',
  border: 'rgba(241,233,231,0.15)',
  borderLight: 'rgba(241,233,231,0.05)',
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: lightThemeProperties.primary,
    },
    text: {
      primary: lightThemeProperties.text,
      secondary: lightThemeProperties.textSecondary,
    },
    background: {
      default: lightThemeProperties.background,
      paper: lightThemeProperties.backgroundVariant,
    },
    action: {
      active: lightThemeProperties.primary,
      hover: lightThemeProperties.primary,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: lightThemeProperties.backgroundVariant,
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: darkThemeProperties.primary,
    },
    text: {
      primary: darkThemeProperties.text,
      secondary: darkThemeProperties.textSecondary,
    },
    background: {
      default: darkThemeProperties.background,
      paper: darkThemeProperties.backgroundVariant,
    },
    action: {
      active: darkThemeProperties.primary,
      hover: darkThemeProperties.primary,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: darkThemeProperties.backgroundVariant,
        },
      },
    },
  },
});
