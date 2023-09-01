import React, { Suspense } from 'react'
import MainRoute from './Router'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { themes } from './MuiTheme/theme'
import { useAppSelector } from './Hooks'
import { themeMode } from './Utils/Constants'
import LoadingSpinner from './Components/Common/LoadingSpinner'

const App = () => {
  const { currentTheme } = useAppSelector((state) => state.theme)
  const theme = (currentTheme === themeMode.LIGHT) ? themes.light : themes.dark
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<LoadingSpinner open={true} />}>
        <MainRoute />
      </Suspense>
    </ThemeProvider>
  )
}

export default App
