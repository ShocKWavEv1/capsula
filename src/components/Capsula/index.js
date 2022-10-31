import { Box, Heading, ScaleFade, SimpleGrid, Text } from "@chakra-ui/react"
import { useInView } from "framer-motion";
import { useRef } from "react";
import bg from "../../../assets/bg/sssurface-2.svg";

const Capsula = () => {
    const NOSOTROS = [
        {
            title: "nos involucramos contigo",
            desc: "Entendemos el contexto, audiencia, necesidades y retos del proyecto. Nos informamos."
        },
        {
            title: "amamos los retos"
        },
        {
            title: "nos obsesiona la calidad"
        },
        {
            title: "somos humanos"
        },
        {
            title: "trabajamos para tus usuarios"
        },
        {
            title: "somos justos"
        }
    ]

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return(
        <Box w="100%" h="auto" bg="white" padding={["7rem 4% 0rem 4%", "7rem 4% 0rem 4%", "7rem 4% 0rem 4%", "8rem 4% 2rem 4%"]} display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
            <Box w="100%" h="100%" display="flex" alignItems="center" justifyContent="center" flexDir="column" >
                <Heading color="brand.primary.800" align="center" fontSize={["5xl", "5xl", "6xl", "6xl"]} >
                    con la estrategia en el núcleo
                </Heading>
                <Text pt="0.45rem" color="blue.500" align="center" fontSize={["md", "md", "xl", "xl"]} >
                    tecnologia eficaz y segura
                </Text>
            </Box>
            <Box mt="3rem" w="100%">
                <SimpleGrid columns={[1, 2, 2, 3]} spacingX="20px" spacingY="60px" >
                    {
                        NOSOTROS.map((item, i) => {
                            return(
                                <ScaleFade key={i} initialScale={0} in>
                                    <Box p="1rem" w="100%" bg="white" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
                                        <Box
                                            w='100px'
                                            h='100px'
                                            bgImage={`url(${bg.src})`}
                                            bgSize='cover'
                                        />
                                        <Heading pt="0rem" textAlign="center" color="brand.primary.800" fontSize={["lg", "lg", "xl", "2xl"]} >
                                            {item.title}
                                        </Heading>
                                        <Text pt="1rem" color="brand.primary.800" textAlign="center" >
                                            Entendemos el contexto, audiencia, necesidades y retos del proyecto. Nos informamos.
                                        </Text>
                                    </Box>
                                </ScaleFade>
                            )
                        })
                    }
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default Capsula;