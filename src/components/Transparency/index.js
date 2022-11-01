import { Box, Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import bg from "../../../assets/bg/uuunion-4.svg";
import { useRef } from "react";

const Transparency = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return(
        <Box w="100%" h="auto" bg="white" padding={["7rem 4%", "7rem 4%", "7rem 4%", "7rem 4%"]}>
            <Grid w="100%" h="auto" templateColumns='repeat(12, 2fr)'>
                <GridItem w="100%" display="flex" alignItems="flex-start" justifyContent="center" flexDir="column" colSpan={[12, 12, 12, 6]}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        style={{ width: "90%" }}
                    >
                        <Box
                            w='100%'
                            h='60vh'
                            boxShadow="2xl"
                            p='1rem'
                            pos='relative'
                            borderRadius="8px"
                            bgImage={`url(${bg.src})`}
                            bgSize='cover'
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        />
                    </motion.div>
                </GridItem>
                <GridItem w="100%" display="flex" alignItems="flex-start" justifyContent="center" flexDir="column" colSpan={[12, 12, 12, 6]} h='100%'>
                    <Box
                        ref={ref}
                        style={{
                            transform: isInView ? "none" : "translateY(200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                    >
                        <Heading color="brand.primary.800" fontSize={["5xl", "5xl", "6xl", "6xl"]} >
                            ¿Porqué donar con cápsula?
                        </Heading>
                        <Text pt="1rem" color="brand.primary.800" fontSize={["md", "md", "xl", "xl"]}>
                            Permite publicar compromisos como administrador hacia los usuarios para facilitar el diálogo y monitorear el progreso de la propuesta / compromiso.
                        </Text>
                        <Button mt="1rem" colorScheme='brand.primary' color="white" p="1.45rem 2.45rem" shadow="lg" borderRadius="8px">
                            <Text cursor="pointer" fontSize={["xs", "sm", "sm", "md"]}>
                                Ir a transparencia
                            </Text>
                        </Button>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Transparency;