import { Box, Grid, GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

import bg from "../../../assets/bg/1.jpeg";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const Nosotros = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    const NOSOTROS = [
        {
            name: "Félix Rodríguez 1, director en RODICA",
            img: bg,
            desc: "“Sofía es un seguro integral que nos 1 permite atender situaciones menores y mayores. Sin caer en procesos engorrosos ni en demoras para conseguir la atención médica. Sin caer en procesos engorrosos ni en demoras para conseguir la atención médica”"
        },
        {
            name: "Félix Rodríguez 2, director en RODICA",
            img: bg,
            desc: "“Sofía es un seguro integral que nos 2 permite atender situaciones menores y mayores. Sin caer en procesos engorrosos ni en demoras para conseguir la atención médica.”"
        },
        {
            name: "Félix Rodríguez 3, director en RODICA",
            img: bg,
            desc: "“Sofía es un seguro integral que nos 3 permite atender situaciones menores y mayores. Sin caer en procesos engorrosos ni en demoras para conseguir la atención médica.”"
        },
        {
            name: "Félix Rodríguez 4, director en RODICA",
            img: bg,
            desc: "“Sofía es un seguro integral que nos 4 permite atender situaciones menores y mayores. Sin caer en procesos engorrosos ni en demoras para conseguir la atención médica.”"
        },
        {
            name: "Félix Rodríguez 5, director en RODICA",
            img: bg,
            desc: "“Sofía es un seguro integral que nos 5 permite atender situaciones menores y mayores. Sin caer en procesos engorrosos ni en demoras para conseguir la atención médica.”"
        }
    ];

    const [currentItem, setCurrent] = useState(NOSOTROS[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if(currentIndex >= NOSOTROS.length) {
            setCurrentIndex(0);
            setCurrent(NOSOTROS[0]);
        } else {
            setCurrent(NOSOTROS[currentIndex]);
        }
    }, [currentIndex]);

    const handlePrevIndex = () => {
        if(currentIndex === 0) {
            return null
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const handleNextIndex = () => {
        setCurrentIndex(currentIndex + 1);
    }

    return(
        <Box w="100%" h="auto" bg="white" padding={["7rem 4%", "7rem 4%", "7rem 4%", "8rem 4%"]} display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
            <Box textAlign="center" w="100%" h="auto" display="flex" alignItems="flex-start" justifyContent="center">
                <Heading color="brand.primary.800" fontSize={["5xl", "5xl", "6xl", "6xl"]} >
                    Lo que dicen nuestr@s Soci@s
                </Heading>
            </Box>
            <Box pt="4rem" w="100%">
                <Grid w="100%" templateColumns='repeat(12, 2fr)'>
                    <GridItem w="100%" display="flex" alignItems="center" justifyContent="flex-start" flexDir="row" colSpan={[12, 12, 6, 5]}>
                        <Box w="100%" h="100%">
                            <motion.div
                                key={currentItem ? currentItem.name : "empty"}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Box
                                    w='100%'
                                    h='55vh'
                                    boxShadow="2xl"
                                    p='1rem'
                                    pos='relative'
                                    borderRadius="8px"
                                    bgImage={`url(${currentItem.img.src})`}
                                    bgSize='cover'
                                    _before={{
                                    content: '""',
                                    borderRadius: "8px",
                                    bgColor: `brand.primary.800`,
                                    bgSize: 'cover',
                                    pos: 'absolute',
                                    borderTopRadius: 'lg',
                                    top: 0,
                                    right: 0,
                                    left: 0,
                                    bottom: 0,
                                    opacity: 0.5
                                    }}
                                />
                            </motion.div>
                        </Box>
                    </GridItem>
                    <GridItem w="100%" display="flex" alignItems="center" justifyContent="flex-start" flexDir="column" colSpan={[12, 12, 6, 7]}>
                        <Box p={["0rem 0rem", "0rem 0rem", "0rem 0rem 0rem 2rem", "0rem 0rem 0rem 2rem"]} textAlign="center" w="100%" h={["40vh", "40vh", "55vh", "55vh"]} display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
                            <Box w="100%" h={["80%", "80%", "90%", "90%"]} display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
                                <motion.div
                                    key={currentItem ? currentItem.desc : "empty"}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: .2 }}
                                >
                                    <Text color="brand.primary.800" fontSize={["md", "md", "md", "lg"]} >
                                        {currentItem.desc}
                                    </Text>
                                </motion.div>
                                <motion.div
                                    key={currentItem ? currentItem.name : "empty"}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: .2 }}
                                >
                                    <Heading pt="1rem" color="brand.primary.800" fontSize={["md", "xl", "lg", "2xl"]} >
                                        {currentItem.name}
                                    </Heading>
                                </motion.div>
                            </Box>
                            <Box w="100%" h={["20%", "20%", "10%", "10%"]} display="flex" alignItems="center" justifyContent="flex-end">
                                <Box onClick={() => handlePrevIndex()} mr="0.5rem" w="30px" h="30px" display="flex" alignItems="center" justifyContent="center" borderRadius="25rem" boxShadow="2xl" bg="brand.primary.500" color="white">
                                    <ChevronLeftIcon fontSize={["md", "md", "lg", "lg"]} />
                                </Box>
                                <Box onClick={() => handleNextIndex()} w="30px" h="30px" display="flex" alignItems="center" justifyContent="center" borderRadius="25rem" boxShadow="2xl" bg="brand.primary.500" color="white">
                                    <ChevronRightIcon fontSize={["md", "md", "lg", "lg"]}/>
                                </Box>
                            </Box>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    )
}

export default Nosotros;