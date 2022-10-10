import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

function ThemeToggle(props) {
  const { toggleTheme } = props
  const theme = useTheme()
  return (
    <Box
      onClick={toggleTheme}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        paddingLeft: 5,
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} color='inherit'>
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  )
}

export default ThemeToggle
