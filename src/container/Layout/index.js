import React, { useEffect } from "react";
import { Box } from '@chakra-ui/react';
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import WhatsApp from "../../utils/whatsapp";

const Layout = ({children}) => {
    return(
        <Box w="100%" h="auto" position="relative" zIndex={0}>
            <Box className="fixed_menu" padding={["5% 4% 0 4%", "5% 4% 0 4%", "3% 4% 0 4%", "3% 4% 0 4%"]} position="fixed" w="100%"  zIndex={2}>
                <Navigation />
            </Box>
            <Box w="100%" h="auto">
                {children}
            </Box>
            <WhatsApp />
        </Box>
    )
}

export default Layout;
