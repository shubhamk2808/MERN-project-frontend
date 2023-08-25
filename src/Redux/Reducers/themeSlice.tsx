import { createSlice } from '@reduxjs/toolkit'
import { ThemeState } from 'src/Types/ThemeTypes'
import { getThemeFromLocalStorage, saveThemeToLocalStorage } from 'src/Utils'
import { themeMode } from 'src/Utils/Constants'

const initialState: ThemeState = {
  currentTheme: getThemeFromLocalStorage() || themeMode.LIGHT, // default system theme can be set here in case of default light theme 
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === themeMode.LIGHT ? themeMode.DARK : themeMode.LIGHT
      saveThemeToLocalStorage(state.currentTheme);
    },
  },
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
