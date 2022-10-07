import '@fontsource/poppins/400.css'
import '@fontsource/poppins/700.css'

import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../src/container/Layout'
import theme from '../src/theme'
import Meta from '../src/utils/Meta'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Meta title={"CÁPSULA | Sabemos que juntos llegaremos lejos"} />
      <Layout>
        <Component {...pageProps} />
      </Layout>        
    </ChakraProvider>
  )
}

export default MyApp
