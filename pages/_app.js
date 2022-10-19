import '@fontsource/poppins/400.css'
import '@fontsource/poppins/700.css'

import { ChakraProvider, ScaleFade } from '@chakra-ui/react'
import Layout from '../src/container/Layout'
import theme from '../src/theme'
import Meta from '../src/utils/Meta'
import '../styles/globals.css'
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

function MyApp({ Component, pageProps, router }) {
  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <ChakraProvider theme={theme}>
        <Meta title={"CÁPSULA | Sabemos que juntos llegaremos lejos"} />
        <Layout>
          <motion.main
            key={router.route}
            variants={variants} // Pass the variant object into Framer Motion 
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: 'linear' }} // Set the transition to linear
            className=""
          >
              <Component {...pageProps}  />
          </motion.main>
        </Layout>        
      </ChakraProvider>
    )
  }
}

export default MyApp
