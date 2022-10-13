import { Box, Button, Heading, Text } from "@chakra-ui/react"

const Hero = ({dictionary}) => {
    return(
        <Box w="100%" h="100vh" position="relative" zIndex={1} display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
            <Box w="100%" h="100%" display="flex" alignItems="center" justifyContent="center" flexDir="column" >
                <Heading align="center" color="white" fontSize={["5xl", "6xl", "7xl", "7xl"]} >
                    {dictionary.home.title}
                </Heading>
                <Text align="center" color="white" fontSize={["md", "lg", "xl", "xl"]} >
                    {dictionary.home.subtitle}
                </Text>
                <Button mt="1rem" size="lg" shadow="2xl" borderRadius="5em" >
                    <Text cursor="pointer" fontSize={["xs", "sm", "sm", "lg"]}>
                        Donaciones
                    </Text>
                </Button>
            </Box>
        </Box>
    )
}

export default Hero;