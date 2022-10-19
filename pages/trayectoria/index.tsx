// Photos from https://citizenofnowhe.re/lines-of-the-city
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import { Box, Button, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import {PROYECTOS} from './proyectos.js';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageContainer({ id, title, date, desc, idx, total, img}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <Box ref={ref} bg="white" w="50%">
        <Box bg="brand.primary.800" w="100%" borderRadius="8px" overflow="hidden" boxShadow="lg" >
          <Image
            src={img}
            alt={"CAPSULA"}
            layout="fill"
            objectFit='cover'
          />
        </Box>
      </Box>
      <Box w="50%" p="0rem 2rem 0rem 3rem" bg="white" display="flex" alignItems="center" justifyContent="center" flexDir="column" >
        <motion.h2 style={{ y }}>
          <Stack direction='column' spacing={4} align='left'>
            <Heading color="brand.primary.800" fontSize={"md"} >
              {date}
            </Heading>
            <Heading color="brand.primary.800" fontSize={"5xl"} >
              {title}
            </Heading>
            <Text fontSize={"sm"} color="brand.primary.800" >
              {desc}
            </Text>
          </Stack>
          <Button mt="1rem" colorScheme='brand.primary' color="white" size="md" shadow="lg" borderRadius="5em">
            <Text cursor="pointer" p="0rem 1rem" fontSize={["xs", "sm", "sm", "sm"]}>
              Leer mas
            </Text>
          </Button>
        </motion.h2>
      </Box>
    </section>
  );
}

const Trayectoria = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Box bg="white" padding={["0 4%", "0 4%", "0 4%", "0% 4%"]}>
      {PROYECTOS.map((item, i) => (
        <ImageContainer key={i} id={i} title={item.title} date={item.date} desc={item.desc} idx={i} total={PROYECTOS.length} img={item.img} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </Box>
  );
}

export default Trayectoria;
