import { Box, Heading, Text } from "@chakra-ui/react"

const FAQ = () => {
    return(
        <Box w="100%" h="100vh" bg="brand.primary.800" display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
            <Box w="100%" h="100%" display="flex" alignItems="center" justifyContent="center" flexDir="column" >
            <Heading align="center" fontSize={["5xl", "6xl", "7xl", "7xl"]} >
                FAQs
            </Heading>
            <Text align="center" fontSize={["md", "lg", "xl", "xl"]} >
                Sabemos que juntos llegaremos lejos
            </Text>
            </Box>
        </Box>
    )
}

export default FAQ;