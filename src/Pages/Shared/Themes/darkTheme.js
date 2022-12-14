import { createTheme } from '@mui/material'
import createPalette from '@mui/material/styles/createPalette'
import appPalette from './appPalette'
import typography from './typography'
import components from './components'

const palette = createPalette({
  mode: 'dark',
  primary: {
    main: appPalette.GRAY['50'],
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
  graph: {
    default: appPalette.GOLD['300'],
  },
})

export default createTheme({
  palette,
  appPalette,
  typography,
  components: {
    ...components,
  },
})
