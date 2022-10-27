import { Box, Heading, Text } from "@chakra-ui/react"

const Capsula = () => {
    return(
        <Box w="100%" h="100vh" bg="red" display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
            <Box w="100%" h="100%" display="flex" alignItems="center" justifyContent="center" flexDir="column" >
                <Heading align="center" fontSize={["5xl", "6xl", "7xl", "7xl"]} >
                    Cápsula
                </Heading>
                <Text align="center" fontSize={["md", "lg", "xl", "xl"]} >
                    Sabemos que juntos llegaremos lejos
                </Text>
            </Box>
        </Box>
    )
}

export default Capsula;