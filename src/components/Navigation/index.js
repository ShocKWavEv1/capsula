import { useRouter } from "next/router"
import { motion } from 'framer-motion';
import { Box, Heading, Grid, GridItem, Text, Stack, Button, Hide, keyframes } from "@chakra-ui/react"

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(1.05) rotate(0); border-radius: 20%; }
  50% { transform: scale(1.05) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

const Navigation = () => {
    const router = useRouter();
    return(
        <Box w="100%">
            <Grid w="100%" h="100%" templateColumns='repeat(12, 2fr)'>
                <GridItem w="100%" display="flex" alignItems="center" justifyContent="flex-start" flexDir="row" colSpan={[4, 4, 4, 6]} h='100%'>
                    <Box
                        as={motion.div}
                        animation={animation}
                        // not work: transition={{ ... }}
                        padding="2"
                        // @ts-ignore - "Does not exist" Type Error against Motion
                        bgGradient="linear(to-l, #FFF, #FFF)"
                        width="1"
                        height="1"
                        display="flex"
                    />
                    <Heading pl="7px" color="white"  cursor="pointer" onClick={() => router.push("/")} fontSize={["lg", "lg", "xl", "2xl"]} fontWeight="600" _hover={{ opacity: 0.7 }} >
                        cápsula
                    </Heading>
                </GridItem>
                <GridItem w="100%" display="flex" alignItems="center" justifyContent="flex-end" flexDir="row" colSpan={[8, 8, 8, 6]} h='100%'>
                    <Stack direction='row' spacing={4} align='center'>
                        <Hide below="sm" >
                            <Text color="white"  onClick={() => router.push("/trayectoria")} cursor="pointer" fontSize={["xs", "sm", "sm", "sm"]} _hover={{ opacity: 0.7 }}>
                                Trayectoria
                            </Text>
                            <Text color="white"  onClick={() => router.push("/transparencia")} cursor="pointer" fontSize={["xs", "sm", "sm", "sm"]} _hover={{ opacity: 0.7 }}>
                                Transparencia 
                            </Text>
                        </Hide>
                        <Button size="sm" shadow="2xl" borderRadius="5em">
                            <Text cursor="pointer" fontSize={["xs", "sm", "sm", "sm"]}>
                                Donaciones
                            </Text>
                        </Button>
                    </Stack>
                </GridItem>
            </Grid>
        </Box>
    )
} 

export default Navigation