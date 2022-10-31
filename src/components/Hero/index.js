import { Box, Button, Grid, GridItem, Heading, Show, Text } from "@chakra-ui/react";
import bg from '../../../assets/bg/cccircular.svg';
import { motion } from 'framer-motion';
import AnimatedText from '../../utils/AnimatedText';
import { useState } from "react";

const Hero = ({dictionary}) => {
    const [replay, setReplay] = useState(true);

    const placeholderText = [
        { 
            type: "heading1", 
            text: "Send payment requests, get paid fast!" 
        },
        /*{
          type: "heading2",
          text: "Plink works with Mollie. Your customer can complete the payment requests using all major payment methods, like creditcard or iDEAL."
        }*/
    ];
    
    const container = {
        visible: {
          transition: {
            staggerChildren: 0.025
          }
        }
    };

    return(
        <Box padding={["7rem 4%", "7rem 4%", "7rem 4%", "8rem 4% 0rem 4%"]} w="100%" h={["90vh", "90vh", "90vh", "85vh"]} position="relative" zIndex={1} display="flex" alignItems="center" justifyContent="center" flexDirection="column" >
            <Box w="100%" h="100%" display="flex" alignItems="center" justifyContent="center" flexDir="column" >
                <Grid pt={["3rem", "3rem", "3rem", "0rem"]} w="100%" h="100%" templateColumns='repeat(12, 2fr)'>
                    <GridItem w="100%" h="100%" display="flex" alignItems="flex-start" justifyContent="center" flexDir="column" colSpan={[12, 12, 12, 7]}>
                        <motion.div
                            initial="hidden"
                            // animate="visible"
                            animate={replay ? "visible" : "hidden"}
                            variants={container}
                            >
                            <Box>
                                {placeholderText.map((item, index) => {
                                return <AnimatedText {...item} key={index} />;
                                })}
                            </Box>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                        >
                            <Text pt="1rem" color="white" align="left" fontSize={["md", "lg", "lg", "lg"]} wordBreak="break-all" >
                                Plink works with Mollie. Your customer can complete the payment requests using all major payment methods, like creditcard or iDEAL.
                            </Text>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 2 }}
                        >
                            <Box pt="1rem">
                                <Button size="lg" shadow="2xl" borderRadius="5em">
                                    <Text cursor="pointer" fontSize={["xs", "sm", "sm", "md"]}>
                                        Donaciones
                                    </Text>
                                </Button>
                            </Box>
                        </motion.div>
                    </GridItem>
                    <Show above="lg" >
                    <GridItem w="100%" h="100%" display="flex" alignItems="flex-start" justifyContent="center" flexDir="column" colSpan={[12, 12, 6, 5]}>
                        <motion.div
                            style={{ width: "100%", height: "100%" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 2.5 }}
                        >
                            <Box
                                w='100%'
                                h='100%'
                                pos='relative'
                                bgImage={`url(${bg.src})`}
                                bgSize='contain'
                                bgRepeat="no-repeat"
                                bgPosition="right center"
                            />
                        </motion.div>
                    </GridItem>
                    </Show>
                </Grid>
            </Box>
        </Box>
    )
}

export default Hero;