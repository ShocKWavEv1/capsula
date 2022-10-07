const { Box, Heading, Grid, GridItem, Text, Spacer, Stack, Button } = require("@chakra-ui/react")

const Footer = () => {
    return(
        <Box w="100%" p={"0 2% 2% 2%"}>
            <Grid w="100%" h="100%" templateColumns='repeat(12, 2fr)'>
                <GridItem w="100%" display="flex" alignItems="flex-start" justifyContent="center" flexDir="column" colSpan={[8, 8, 8, 8]} h='100%'>
                    <Text color="white" fontSize={["sm", "sm", "sm", "sm"]}>
                        cápsula 2022
                    </Text>
                </GridItem>
                <GridItem w="100%" display="flex" alignItems="center" justifyContent="flex-end" flexDir="row" colSpan={[4, 4, 4, 4]} h='100%'>
                    <Text cursor="pointer" color="white" fontSize={["sm", "sm", "sm", "sm"]} _hover={{ opacity: 0.7 }}>
                        English
                    </Text>
                </GridItem>
            </Grid>
        </Box>
    )
} 

export default Footer