const defaultFontFamily = 'Montserrat'

const typography = (palette) => ({
  h1: {
    fontSize: '4rem',
    fontWeight: 400,
    fontFamily: defaultFontFamily,
    marginBottom: '1rem',
  },
  h2: {
    fontSize: '3.2rem',
    fontWeight: 400,
    fontFamily: defaultFontFamily,
    marginBottom: '0.8rem',
    color: palette.primary.main,
  },
  h3: {
    fontSize: '2.6rem',
    fontWeight: 300,
    fontFamily: defaultFontFamily,
    marginBottom: '0.6rem',
    color: palette.secondary.contrastText,
  },
  h4: {
    fontSize: '2rem',
    fontWeight: 300,
    fontFamily: defaultFontFamily,
    marginBottom: '0.5rem',
  },
  h5: {
    fontSize: '1.8rem',
    fontWeight: 300,
    fontFamily: defaultFontFamily,
    marginBottom: '0.4rem',
    color: palette.secondary.contrastText,
  },
  h6: {
    fontSize: '1.5rem',
    fontWeight: 300,
    fontFamily: defaultFontFamily,
    marginBottom: '0.3rem',
  },
  caption: {
    fontSize: '0.9rem',
    color: palette.text.disabled,
  },
  button: {
    fontWeight: 600,
    fontFamily: defaultFontFamily,
  },
  allVariants: {
    fontSize: '1.1rem',
    fontFamily: defaultFontFamily,
  },
  subtitle2: { fontSize: '1.6rem', fontFamily: defaultFontFamily, color: palette.secondary.contrastText },
})

export default typography
