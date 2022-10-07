const { Box, Heading, Grid, GridItem, Text, Spacer, Stack, Button, Show, Hide } = require("@chakra-ui/react")

const Navigation = () => {
    return(
        <Box w="100%">
            <Grid w="100%" h="100%" templateColumns='repeat(12, 2fr)'>
                <GridItem w="100%" display="flex" alignItems="flex-start" justifyContent="center" flexDir="column" colSpan={[4, 4, 4, 6]} h='100%'>
                    <Heading color="white" fontSize={["lg", "lg", "xl", "2xl"]} fontWeight="600" >
                        cápsula
                    </Heading>
                </GridItem>
                <GridItem w="100%" display="flex" alignItems="center" justifyContent="flex-end" flexDir="row" colSpan={[8, 8, 8, 6]} h='100%'>
                    <Stack direction='row' spacing={4} align='center'>
                        <Hide below="sm" >
                            <Text cursor="pointer" color="white" fontSize={["xs", "sm", "sm", "sm"]} _hover={{ opacity: 0.7 }}>
                                Trayectoria
                            </Text>
                            <Text cursor="pointer" color="white" fontSize={["xs", "sm", "sm", "sm"]} _hover={{ opacity: 0.7 }}>
                                Transparencia
                            </Text>
                        </Hide>
                        <Button size="sm" shadow="2xl" borderRadius="5em" >
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