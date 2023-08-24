import React from 'react'
import MainRoute from './Router'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { lightTheme, darkTheme} from './MuiTheme/theme'
import { useAppSelector } from './Hooks'

const App = () => {
  const { currentTheme } = useAppSelector((state) => state.theme);
  const theme = currentTheme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainRoute />
    </ThemeProvider>
  )
}

export default App