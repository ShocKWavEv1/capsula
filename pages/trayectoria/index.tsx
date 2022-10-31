import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import { Box, Button, Heading, Show, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Footer from '../../src/components/Footer';

import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/router";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageContainer({ id, title, date, desc, idx, total, img, slug}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const router = useRouter();

  return (
    <section>
      <SimpleGrid columns={[1, 1, 1, 2]} w="100%" mt="3rem" bg="white" >
        <Box ref={ref} bg="white">
          <motion.div
            whileHover={{ scale: 1.0 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Box
                w='100%'
                h='550px'
                borderTopRadius='lg'
                boxShadow="2xl"
                p='1rem'
                pos='relative'
                bgImage={`url(${img})`}
                bgSize='cover'
                onClick={() => router.push(`/trayectoria/${slug}`)}
              />
          </motion.div>
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
            <Button onClick={() => router.push(`/trayectoria/${slug}`)} mt="1rem" colorScheme='brand.primary' color="white" size="md" shadow="lg" borderRadius="8px">
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

const Trayectoria = ({ posts }) => {
  const [mappedPosts, setMappedPosts] = useState([]);

  const router = useRouter();

  console.log(posts)

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if(posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "jtkuuwmj",
        dataset: "production"
      });

      setMappedPosts(
        posts.map(post => {
          return {
            ...post,
            mainImage: imgBuilder.image(post.mainImage)
          }
        })
      )
    } else {
      setMappedPosts([]);
    }
  }, [posts])

  const renderSingleCard = (item, i) => {
    return(
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={() => router.push(`/trayectoria/${item.slug.current}`)}
      >
        <Box p="1rem" bg='white' boxShadow="xl" borderRadius="8px" display="flex" alignItems="center" justifyContent="center" flexDirection="column" key={i} >
          <Box
            w='100%'
            h={["350px", "400px", "300px", "250px"]}
            borderTopRadius='lg'
            boxShadow="2xl"
            p='1rem'
            pos='relative'
            bgImage={`url(${item.mainImage})`}
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
                {item.description}
              </Text>
              <Button mt="1rem" colorScheme='brand.primary' color="white" size="md" shadow="lg" borderRadius="8px">
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
    <Box bg="white" padding={["0 4% 5% 4%", "0 4% 5% 4%", "0 4% 2% 4%", "0% 4% 2% 4%"]}>
      <Show above="lg" >
        {mappedPosts.map((item, i) => (
          <ImageContainer 
            key={i} 
            id={i} 
            title={item.title} 
            date={item.date} 
            slug={item.slug.current}
            desc={item.description} 
            idx={i} 
            total={posts.length} 
            img={item.mainImage} 
          />
        ))}
        <motion.div className="progress" style={{ scaleX }} />
      </Show>
      <Show below="lg" >
        <SimpleGrid p={"6rem 0rem 2rem 0rem"} columns={[1, 1, 2, 2]} spacing='20px'>
          {mappedPosts.map((item, i) => (
            renderSingleCard(item, i)
          ))}
        </SimpleGrid>
      </Show>
    </Box>
  );
}

export default Trayectoria;

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query;

  const query = encodeURIComponent(`*[ _type == "post" ]`);

  console.log(pageSlug.cat);


  const url = `https://jtkuuwmj.api.sanity.io/v1/data/query/production?query=${query}`

  const result = await fetch(url).then((res) => res.json());

  if(!result.result || !result.result.length) {
    return {
      props: {
        posts: []
      }
    }
  } else {
    return {
      props: {
        posts: result.result
      }
    }
  }
}