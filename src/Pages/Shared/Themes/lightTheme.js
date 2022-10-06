import { colors, createTheme } from '@mui/material'
import createPalette from '@mui/material/styles/createPalette'
import appPalette from './appPalette.js'
import typography from './typography'
import components from './components'

const palette = createPalette({
  primary: {
    main: appPalette.GOLD[500],
    contrastText: '#fff',
  },
  secondary: {
    main: appPalette.BLUE[500],
    contrastText: '#fff',
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
