import React, { Suspense } from 'react'
import MainRoute from './Router'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { lightTheme, darkTheme } from './MuiTheme/theme'
import { useAppSelector } from './Hooks'

const App = () => {
  const { currentTheme } = useAppSelector((state) => state.theme)
  const theme = currentTheme === 'light' ? lightTheme : darkTheme
  return (
    <Suspense fallback={<div>loading ...</div>}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainRoute />
      </ThemeProvider>
    </Suspense>
  )
}

export default App
