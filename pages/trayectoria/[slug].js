import { Box, Heading } from "@chakra-ui/react"
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const Post = ({ title, body, image }) => {
    const [imageUrl, setImageUrl] = useState("");
    const { scrollYProgress } = useScroll();
    const router = useRouter();

    useEffect(() => {
        const imgBuilder = imageUrlBuilder({
            projectId: "jtkuuwmj",
            dataset: "production"
        });

        setImageUrl(imgBuilder.image(image))
    }, [image]);

    const renderMainImage = () => {
        return(
            imageUrl &&      
                <Box
                    w='100%'
                    h='65vh'
                    boxShadow="2xl"
                    p='1rem'
                    pos='relative'
                    borderRadius="8px"
                    bgImage={`url(${imageUrl})`}
                    bgSize='cover'
                />
        )
    }

    return(
        <Box w="100%" h="auto" bg="white" display="flex" alignItems="center" justifyContent="flex-start" flexDirection="column" >
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <Box w="100%" padding={["7rem 4%", "7rem 4%", "7rem 4%", "8rem 14rem"]} >
                <Box w="100%" h="auto">
                    <motion.div
                        whileHover={{ y: 0 }}
                        whileTap={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => router.push(`/trayectoria`)}
                    >
                        <Box pb="1rem" ml="-10px" w="100%" display="flex" alignItems="center" justifyContent="flex-start" flexDirection="row" >
                            <ChevronLeftIcon color="brand.primary.800" fontSize={["2xl", "2xl", "4xl", "4xl"]} />
                            <Heading color="brand.primary.800" fontSize={["xl", "xl", "2xl", "2xl"]} >
                                Regresar
                            </Heading>
                        </Box>
                    </motion.div>
                    {renderMainImage()}
                    <Box pt="3rem">
                        <Heading color="brand.primary.800" fontSize={["5xl", "5xl", "6xl", "6xl"]} >
                            {title}
                        </Heading>
                    </Box>
                    <Box color="brand.primary.800" pt="2rem" className="article"  >
                        <BlockContent blocks={body} dataset="production" projectId="jtkuuwmj" />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Post;

export const getServerSideProps = async pageContext => {
    const pageSlug = pageContext.query.slug;

    if(!pageSlug) {
        return {
            notFound: true
        }
    }

    const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);

    const url = `https://jtkuuwmj.api.sanity.io/v1/data/query/production?query=${query}`

    const result = await fetch(url).then((res) => res.json());

    const post = result.result[0];

    if(!post) {
        return {
            props: {
                derp: "derp"
            }
        }
    } else {
        return {
            props: {
                title: post.title,
                body: post.body,
                image: post.mainImage
            }
        }
    }
}