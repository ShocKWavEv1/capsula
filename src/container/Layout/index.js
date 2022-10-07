import React from "react";
import { Box, Flex, Heading } from '@chakra-ui/react';
import Navigation from "../../components/Navigation";

const Layout = ({children}) => {

    return(
        <Box w="100%" h="auto" position="relative" zIndex={0}>
            <Box padding={["5% 4% 0 4%", "5% 4% 0 4%", "3% 4% 0 4%", "3% 4% 0 4%"]} position="fixed" w="100%"  zIndex={2}>
                <Navigation />
            </Box>
            <Box w="100%" bg="blue" h="auto">
                {children}
            </Box>
        </Box>
    )
}

export default Layout;