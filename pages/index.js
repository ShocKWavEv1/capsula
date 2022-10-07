import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import bg from "../assets/bg/ffflux.svg";
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <Box w="100%" h="100vh" zIndex={0} >
      <Image
        src={bg}
        alt={bg}
        layout='fill'
        objectFit='cover'
        sizes='100vw'
      />
      <Box w="100%" h="100vh" position="relative" zIndex={1} display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
        <Box w="100%" mt="2rem" h="100%" display="flex" alignItems="center" justifyContent="center" flexDir="column" >
          <Heading align="center" color="white" fontSize={["5xl", "6xl", "7xl", "7xl"]} >
            Cápsula en construcción
          </Heading>
          <Text align="center" color="white" fontSize={["md", "lg", "xl", "xl"]} >
            Sabemos que juntos llegaremos lejos
          </Text>
        </Box>
        <Footer />
      </Box>
    </Box>
  )
}
