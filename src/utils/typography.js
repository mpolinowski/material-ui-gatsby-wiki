import Typography from "typography"
import typographyTheme from "typography-theme-github"
// import typographyTheme from "typography-theme-noriega"
// import typographyTheme from "typography-theme-moraga"

typographyTheme.overrideThemeStyles = (options) => ({
  'h1,h2,h3,h4.h5': {
    borderBottom: 'none',
  }
})


const typography = new Typography(typographyTheme)
const { rhythm, scale } = typography
export { rhythm, scale, typography as default }