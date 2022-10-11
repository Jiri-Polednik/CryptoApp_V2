import { createTheme } from '@mui/material'
import createPalette from '@mui/material/styles/createPalette'
import appPalette from './appPalette'
import typography from './typography'
import components from './components'

const palette = createPalette({
  primary: {
    main: appPalette.GOLD['500'],
    contrastText: appPalette.GRAY['700'],
  },
  secondary: {
    main: appPalette.GOLD['300'],
    contrastText: appPalette.GRAY['700'],
  },
  background: {
    default: appPalette.GRAY['50'],
    paper: appPalette.GRAY['100'],
  },
  graph: {
    default: appPalette.GOLD['500'],
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
