import React from "react";
import { Box, Flex, Heading } from '@chakra-ui/react';
import Navigation from "../../components/Navigation";

const Layout = ({children}) => {

    return(
        <Box w="100%" h="auto" position="relative" zIndex={0}>
            <Flex as="header" position="fixed" w="100%" padding={"0 4%"} zIndex={2}>
                <Navigation />
            </Flex>
            <Box w="100%" bg="blue" h="auto">
                {children}
            </Box>
        </Box>
    )
}

export default Layout;