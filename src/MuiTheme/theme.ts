import { createTheme } from '@mui/material/styles'
import { CustomPalette } from 'src/Types/ThemeTypes'

const lightThemeProperties: CustomPalette = {
  primary: '#C3073f',
  text: 'rgba(58,52,51,1)',
  textSecondary: 'rgba(58,52,51,0.7)',
  background: 'rgba(255,255,255,1)',
  backgroundVariant: 'rgba(251,249,249,1)',
  border: 'rgba(58,52,51,0.12)',
  borderLight: 'rgba(58,52,51,0.05)',
}

const darkThemeProperties: CustomPalette = {
  primary: '#C3073f',
  text: 'rgba(241,233,231,1)',
  textSecondary: 'rgba(241,233,231,0.6)',
  background: 'rgba(0,0,0,1)',
  backgroundVariant: 'rgba(28,26,26,1)',
  border: 'rgba(241,233,231,0.15)',
  borderLight: 'rgba(241,233,231,0.05)',
}

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    // primary: {
    //   main: lightThemeProperties.primary,
    // },
    // text: {
    //   primary: lightThemeProperties.text,
    //   secondary: lightThemeProperties.textSecondary,
    // },
    // background: {
    //   default: lightThemeProperties.background,
    //   paper: lightThemeProperties.backgroundVariant,
    // },
    // action: {
    //   active: lightThemeProperties.primary,
    //   hover: lightThemeProperties.primary,
    // },
  },
  // components: {
  //   // MuiPaper: {
  //   //   styleOverrides: {
  //   //     root: {
  //   //       backgroundColor: lightThemeProperties.backgroundVariant,
  //   //     },
  //   //   },
  //   // },

  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         fontWeight: 500,
  //         borderRadius: '4px',
  //         '&: hover': {
  //           backgroundColor: 'green!important'
  //         }
  //       },
  //     }
  //   },
  //   MuiPaper: {
  //     defaultProps: {
  //       elevation: 0
  //     },
  //     styleOverrides: {
  //       root: {
  //         backgroundImage: 'none'
  //       },
  //       rounded: {
  //         // borderRadius: `${theme?.customization?.borderRadius}px`
  //       }
  //     }
  //   },
  //   MuiCardHeader: {
  //     styleOverrides: {
  //       root: {
  //         // color: theme.colors?.textDark,
  //         padding: '24px'
  //       },
  //       title: {
  //         fontSize: '1.125rem'
  //       }
  //     }
  //   },
  //   MuiCardContent: {
  //     styleOverrides: {
  //       root: {
  //         padding: '24px'
  //       }
  //     }
  //   },
  //   MuiCardActions: {
  //     styleOverrides: {
  //       root: {
  //         padding: '24px'
  //       }
  //     }
  //   },
  //   MuiListItemButton: {
  //     styleOverrides: {
  //       root: {
  //         // color: theme.darkTextPrimary,
  //         paddingTop: '10px',
  //         paddingBottom: '10px',
  //         '&.Mui-selected': {
  //           // color: theme.menuSelected,
  //           // backgroundColor: theme.menuSelectedBack,
  //           '&:hover': {
  //             // backgroundColor: theme.menuSelectedBack
  //           },
  //           '& .MuiListItemIcon-root': {
  //             // color: theme.menuSelected
  //           }
  //         },
  //         '&:hover': {
  //           // backgroundColor: theme.menuSelectedBack,
  //           // color: theme.menuSelected,
  //           '& .MuiListItemIcon-root': {
  //             // color: theme.menuSelected
  //           }
  //         }
  //       }
  //     }
  //   },
  //   MuiListItemIcon: {
  //     styleOverrides: {
  //       root: {
  //         // color: theme.darkTextPrimary,
  //         minWidth: '36px'
  //       }
  //     }
  //   },
  //   MuiListItemText: {
  //     styleOverrides: {
  //       primary: {
  //         // color: theme.textDark
  //       }
  //     }
  //   },
  //   MuiInputBase: {
  //     styleOverrides: {
  //       input: {
  //         // color: theme.textDark,
  //         '&::placeholder': {
  //           // color: theme.darkTextSecondary,
  //           fontSize: '0.875rem'
  //         }
  //       }
  //     }
  //   },
  //   MuiOutlinedInput: {
  //     styleOverrides: {
  //       root: {
  //         // background: bgColor,
  //         // borderRadius: `${theme?.customization?.borderRadius}px`,
  //         '& .MuiOutlinedInput-notchedOutline': {
  //           // borderColor: theme.colors?.grey400
  //         },
  //         '&:hover $notchedOutline': {
  //           // borderColor: theme.colors?.primaryLight
  //         },
  //         '&.MuiInputBase-multiline': {
  //           padding: 1
  //         }
  //       },
  //       input: {
  //         fontWeight: 500,
  //         // background: bgColor,
  //         padding: '15.5px 14px',
  //         // borderRadius: `${theme?.customization?.borderRadius}px`,
  //         '&.MuiInputBase-inputSizeSmall': {
  //           padding: '10px 14px',
  //           '&.MuiInputBase-inputAdornedStart': {
  //             paddingLeft: 0
  //           }
  //         }
  //       },
  //       inputAdornedStart: {
  //         paddingLeft: 4
  //       },
  //       notchedOutline: {
  //         // borderRadius: `${theme?.customization?.borderRadius}px`
  //       }
  //     }
  //   },
  //   MuiSlider: {
  //     styleOverrides: {
  //       root: {
  //         '&.Mui-disabled': {
  //           // color: theme.colors?.grey300
  //         }
  //       },
  //       mark: {
  //         // backgroundColor: theme.paper,
  //         width: '4px'
  //       },
  //       valueLabel: {
  //         // color: theme?.colors?.primaryLight
  //       }
  //     }
  //   },
  //   MuiDivider: {
  //     styleOverrides: {
  //       root: {
  //         // borderColor: theme.divider,
  //         opacity: 1
  //       }
  //     }
  //   },
  //   MuiAvatar: {
  //     styleOverrides: {
  //       root: {
  //         // color: theme.colors?.primaryDark,
  //         // background: theme.colors?.primary200
  //       }
  //     }
  //   },
  //   MuiChip: {
  //     styleOverrides: {
  //       root: {
  //         '&.MuiChip-deletable .MuiChip-deleteIcon': {
  //           color: 'inherit'
  //         }
  //       }
  //     }
  //   },
  //   MuiTooltip: {
  //     styleOverrides: {
  //       tooltip: {
  //         // color: theme.paper,
  //         // background: theme.colors?.grey700
  //       }
  //     }
  //   }
  // },
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // primary: {
    //   main: darkThemeProperties.primary,
    // },
    // text: {
    //   primary: darkThemeProperties.text,
    //   secondary: darkThemeProperties.textSecondary,
    // },
    // background: {
    //   default: darkThemeProperties.background,
    //   paper: darkThemeProperties.backgroundVariant,
    // },
    // action: {
    //   active: darkThemeProperties.primary,
    //   hover: darkThemeProperties.primary,
    // },
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
})

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
