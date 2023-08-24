import React from 'react'
import MainRoute from './Router'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from './MuiTheme/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainRoute />
    </ThemeProvider>
  )
}

export default App