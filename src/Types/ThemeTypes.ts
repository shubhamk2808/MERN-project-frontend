import { themes } from "src/MuiTheme/theme"

export type SpecialTheme = 'system';

export type ThemeKeyType = keyof typeof themes | SpecialTheme;

export interface ThemeState {
    currentTheme: ThemeKeyType
}

export interface CustomPalette {
    primary: string
    text: string
    textSecondary: string
    background: string
    backgroundVariant: string
    border: string
    borderLight: string
}