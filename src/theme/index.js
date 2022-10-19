import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    brand: {
      primary: {
        100: "#D4E8FE",
        200: "#AACFFE",
        300: "#7FB3FC",
        400: "#5F99F9",
        500: "#1636FF",
        600: "#2057D3",
        700: "#1640B1",
        800: "#283459",
        900: "#081E76",
      },
      accent: "#5C9DF0",
      black: "#000000",
      white: "#FFFFFF"
    }
  }
});

export default theme