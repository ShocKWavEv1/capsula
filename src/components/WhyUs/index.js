import { Box, Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import bg from "../../../assets/bg/ffflux.svg";
import { RiPlayCircleLine } from "react-icons/ri";

const WhyUs = () => {
    return(
        <Box w="100%" h="auto" bg="white" padding={["7rem 4%", "7rem 4%", "7rem 4%", "7rem 4%"]}>
            <Grid w="100%" h="auto" templateColumns='repeat(12, 2fr)'>
                <GridItem w="100%" display="flex" alignItems="flex-start" justifyContent="center" flexDir="column" colSpan={[12, 12, 12, 6]}>
                    <Heading color="brand.primary.800" fontSize={["5xl", "5xl", "6xl", "6xl"]} >
                        ¿Qué es cápsula?
                    </Heading>
                    <Text pt="1rem" color="brand.primary.800" fontSize={["md", "md", "xl", "xl"]}>
                        Review with fewer fumbled threads by commenting directly on components, layouts, and copy in real time, without creating tickets or leaving the browser. High-performance teams iterate faster.
                    </Text>
                    <Button mt="1rem" colorScheme='brand.primary' color="white" p="1.45rem 2.45rem" shadow="lg" borderRadius="8px">
                        <Text cursor="pointer" fontSize={["xs", "sm", "sm", "md"]}>
                            Donaciones
                        </Text>
                    </Button>
                </GridItem>
                <GridItem w="100%" display="flex" alignItems="flex-end" justifyContent="center" flexDir="column" colSpan={[12, 12, 12, 6]} h='100%'>
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
                        >
                            <RiPlayCircleLine fontSize="10rem" color="#fff" />
                        </Box>
                    </motion.div>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default WhyUs;