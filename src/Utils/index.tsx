import { ThemeKeyType } from "src/Types/ThemeTypes";

// Define theme functions
export const isSystemDark = window?.matchMedia
  ? window.matchMedia('(prefers-color-scheme: dark)')?.matches
  : undefined;

export function saveThemeToLocalStorage(theme: ThemeKeyType) {
  if (window.localStorage) {
    localStorage.setItem('selectedTheme', theme);
  }
}

export function getThemeFromLocalStorage(): ThemeKeyType | null {
  if (window.localStorage) {
    return (localStorage.getItem('selectedTheme') as ThemeKeyType) || null;
  }
  return null;
}