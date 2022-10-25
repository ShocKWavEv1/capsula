import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import { Box, Button, Heading, Show, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Footer from '../../src/components/Footer';

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
      <SimpleGrid columns={[1, 1, 1, 2]} w="100%" mt="3rem" bg="white" >
        <Box ref={ref} bg="white">
          <Box
            w='100%'
            h='550px'
            borderTopRadius='lg'
            boxShadow="2xl"
            p='1rem'
            pos='relative'
            bgImage={`url(${img.src})`}
            bgSize='cover'
            _before={{
              content: '""',
              bgColor: `brand.primary.800`,
              bgSize: 'cover',
              pos: 'absolute',
              borderTopRadius: 'lg',
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              opacity: 0.5
            }}/>
        </Box>
        <Box p="0rem 2rem 0rem 3rem" bg="white" display="flex" alignItems="center" justifyContent="center" flexDir="column" >
          <motion.h2 style={{ y, marginTop: "-9rem" }}>
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
      </SimpleGrid>
    </section>
  );
}

const Trayectoria = ({ dictionary }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const renderSingleCard = (item, i) => {
    return(
      <motion.div
        whileHover={{ scale: [null, 1.05, 1.05] }}
        transition={{ duration: 0.3 }}
      >
        <Box p="1rem" bg='white' boxShadow="xl" borderRadius="8px" display="flex" alignItems="center" justifyContent="center" flexDirection="column" key={i} >
          <Box
            w='100%'
            h={["350px", "400px", "300px", "250px"]}
            borderTopRadius='lg'
            boxShadow="2xl"
            p='1rem'
            pos='relative'
            bgImage={`url(${item?.img.src})`}
            bgSize='cover'
            _before={{
              content: '""',
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
          <Box pt="2rem" bg="white" display="flex" alignItems="center" justifyContent="center" flexDir="column" >
            <Stack direction='column' spacing={4} align='left'>
              <Heading color="brand.primary.800" fontSize={"xs"} >
                {item.date}
              </Heading>
              <Heading color="brand.primary.800" fontSize={"3xl"} >
                {item.title}
              </Heading>
              <Text fontSize={"sm"} color="brand.primary.800" >
                {item.desc}
              </Text>
              <Button mt="1rem" colorScheme='brand.primary' color="white" size="md" shadow="lg" borderRadius="5em">
                <Text cursor="pointer" p="0rem 1rem" fontSize={["sm", "sm", "sm", "sm"]}>
                  Leer mas
                </Text>
              </Button>
            </Stack>
          </Box>
        </Box>
      </motion.div>
    )
  }

  return (
    <Box bg="white">
      <Show above="lg" >
        {PROYECTOS.map((item, i) => (
          <ImageContainer key={i} id={i} title={item.title} date={item.date} desc={item.desc} idx={i} total={PROYECTOS.length} img={item.img} />
        ))}
        <motion.div className="progress" style={{ scaleX }} />
      </Show>
      <Show below="lg" >
        <SimpleGrid p={"6rem 0rem 2rem 0rem"} columns={[1, 1, 2, 2]} spacing='20px'>
          {PROYECTOS.map((item, i) => (
            renderSingleCard(item, i)
          ))}
        </SimpleGrid>
      </Show>
    </Box>
  );
}

export default Trayectoria;

export async function getStaticProps({locale}) {
  const response = await import(`../../lang/${locale}.json`);
  return {
    props: {
      dictionary: response.default
    }
  }
}