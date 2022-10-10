import { createTheme } from '@mui/material'
import createPalette from '@mui/material/styles/createPalette'
import appPalette from './appPalette'
import typography from './typography'
import components from './components'

const palette = createPalette({
  primary: {
    main: appPalette.GOLD[100],
    contrastText: appPalette.GRAY[700],
  },
  secondary: {
    main: appPalette.GOLD[300],
    contrastText: appPalette.GRAY[700],
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
