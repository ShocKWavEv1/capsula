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
        500: "#2C71F6",
        600: "#2057D3",
        700: "#1640B1",
        800: "#0E2C8E",
        900: "#081E76",
      }
    }
  }
});

export default theme