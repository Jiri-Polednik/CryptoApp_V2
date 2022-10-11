import React from 'react'
import Box from '@mui/material/Box'
import { Button, Typography, useTheme } from '@mui/material'

function ErrorPage() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Typography variant='h1' sx={{ color: theme.palette.primary.main }}>
        Oops!
      </Typography>
      <Typography variant='h6' sx={{ color: theme.palette.primary.main }}>
        Something went wrong
      </Typography>
      <Button variant='contained'>Back Home</Button>
    </Box>
  )
}

export default ErrorPage
