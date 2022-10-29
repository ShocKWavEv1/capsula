import { Box, Heading } from "@chakra-ui/react"
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { useEffect, useState } from "react";

const Post = ({ title, body, image }) => {
    const [imageUrl, setImageUrl] = useState("");

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
            <Box w="100%" padding={["7rem 4%", "7rem 4%", "7rem 4%", "8rem 14rem"]} >
                <Box w="100%" h="auto">
                    {renderMainImage()}
                    <Box pt="2rem">
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

    console.log(result)

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