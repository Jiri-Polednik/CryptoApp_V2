import { createTheme } from '@mui/material'
import createPalette from '@mui/material/styles/createPalette'
import appPalette from './appPalette.js'
import typography from './typography'
import components from './components'

const palette = createPalette({
  mode: 'dark',
  primary: {
    main: appPalette.GOLD['500'],
    contrastText: '#fff',
  },
  secondary: {
    main: appPalette.BLUE['500'],
    contrastText: '#fff',
  },
  background: {
    default: appPalette.DARK_GRAY['800'],
    paper: appPalette.DARK_GRAY['700'],
  },
})

export default createTheme({
  palette,
  companyPalette: appPalette,
  typography,
  components: {
    ...components,
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: appPalette.DARK_GRAY['700'],
          color: palette.common.white,
          fontSize: '0.9rem',
          borderRadius: '6px',
        },
      },
    },
  },
})
