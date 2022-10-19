import { Box, Heading, Text } from "@chakra-ui/react"
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const Nosotros = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return(
        <Box w="100%" h="100vh" bg="blue" display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
            <Box w="100%" h="100%" display="flex" alignItems="center" justifyContent="center" flexDir="column" >
            <motion.h2 style={{ y }}>
                <Heading fontSize={["5xl", "6xl", "7xl", "7xl"]} >
                    Nosotros
                </Heading>
            </motion.h2>
            <Text align="center" fontSize={["md", "lg", "xl", "xl"]} >
                Sabemos que juntos llegaremos lejos
            </Text>
            </Box>
        </Box>
    )
}

export default Nosotros;