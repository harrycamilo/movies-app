import { createTheme } from "@nextui-org/react"

const theme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primaryLight: '$purple200',
      primaryLightHover: '$purple300',
      primaryLightActive: '$purple400',
      primaryLightContrast: '$purple600',
      primary: '#9750DD',
      primaryFocus: '$purple700',
      primaryBorder: '$purple500',
      primaryBorderHover: '$purple600',
      primarySolidHover: '$purple700',
      primarySolidContrast: '$white',
      primaryShadow: '$purple500',

      secondaryLight: '$purple200',
      secondaryLightHover: '$purple300',
      secondaryLightActive: '$purple400',
      secondaryLightContrast: '$purple600',
      secondary: '#6356e5',
      secondaryFocus: '$purple700',
      secondaryBorder: '$purple500',
      secondaryBorderHover: '$purple600',
      secondarySolidHover: '$purple700',
      secondarySolidContrast: '$white',
      secondaryShadow: '$purple500',
    }
  }
});

export default theme;