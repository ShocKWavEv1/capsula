import { Box, Heading, Text } from "@chakra-ui/react"
import { ALL_FAQS } from "../../utils/data/faqs";

const FAQ = () => {
    return(
        <Box p={["8rem 4%", "8rem 4%", "8rem 4%", "8% 14rem"]} w="100%" h="auto" bg="white" display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
            <Box w="100%" h="100%" display="flex" alignItems="center" justifyContent="center" flexDir="column" >
                <Heading color="brand.primary.800" align="center" fontSize={["5xl", "6xl", "7xl", "6xl"]} >
                    Preguntas frecuentes
                </Heading>
                <Text pt="0.45rem" color="blue.500" align="center" fontSize={["md", "lg", "xl", "xl"]} >
                    Simple, powerful, and useful.
                </Text>
            </Box>
            <Box w="100%" pt="2rem">
                {
                    ALL_FAQS.map((item, i) => {
                        return(
                            <Box pt="2rem" w="100%" key={i} display="flex" alignItems="flex-start" justifyContent="center" flexDirection="column" >
                                <Heading color="brand.primary.800" fontSize={["lg", "xl", "xl", "2xl"]}>
                                    {item.title}
                                </Heading>
                                {
                                    item.desc.map((desc, j) => {
                                        return(
                                            <Box pt="1rem" w="100%" key={j} display="flex" alignItems="flex-start" justifyContent="center" flexDirection="column" >
                                                <Text color="brand.primary.800" fontSize={["md", "md", "md", "lg"]}>
                                                    {desc}
                                                </Text>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default FAQ;