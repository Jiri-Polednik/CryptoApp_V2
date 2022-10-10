import { createTheme } from '@mui/material'
import createPalette from '@mui/material/styles/createPalette'
import appPalette from './appPalette'
import typography from './typography'
import components from './components'

const palette = createPalette({
  mode: 'dark',
  primary: {
    main: appPalette.GOLD['500'],
    contrastText: appPalette.GRAY['800'],
  },
  secondary: {
    main: appPalette.GRAY['800'],
    contrastText: appPalette.GOLD['300'],
  },
  background: {
    default: appPalette.GRAY['800'],
    paper: appPalette.GRAY['400'],
  },
})

export default createTheme({
  palette,
  companyPalette: appPalette,
  typography,
  components: {
    ...components,
  },
})
