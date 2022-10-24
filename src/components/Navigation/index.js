import { useRouter } from "next/router"
import { motion } from 'framer-motion';
import { Box, Heading, Grid, GridItem, Text, Stack, Button, Hide, keyframes, MenuButton, MenuIcon, Show, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, Menu, MenuList, MenuItem } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";

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

    const [isOpen, onClose] = useState(false);

    const renderMenuButton = () => {
        return(
            <MenuButton
                px="0.5rem"
                size="md"
                transition='all 0.2s'
                bg='white' 
                shadow="lg" 
                borderRadius="5em"
                _focus={{ boxShadow: 'outline' }}
            >
                <HamburgerIcon fontSize=".85rem"  color="brnad.primary.800" />
            </MenuButton>
        )
    }

    const renderLangMenu = () => {
        return(
            <Menu>
                {renderMenuButton()}
                <MenuList zIndex={999999} bg="white" borderColor="white" minWidth="250px" py="0px" >
                    <MenuItem _hover={{ backgroundColor: "black" }} _focus={{ backgroundColor: "black" }} >
                        <Text color="white" fontSize={["sm", "XL", "sm", "sm"]}>
                            Hii
                        </Text>
                    </MenuItem>
                    <MenuItem _hover={{ backgroundColor: "black" }} _focus={{ backgroundColor: "black" }} >
                        <Text color="white" fontSize={["sm", "sm", "sm", "sm"]}>
                            Hii
                        </Text>
                    </MenuItem>
                </MenuList>
            </Menu>
        )
    }

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
                        <Hide below="md" >
                            <Text color="white" onClick={() => router.push("/trayectoria")} cursor="pointer" fontSize={["xs", "sm", "sm", "sm"]} _hover={{ opacity: 0.7 }}>
                                Trayectoria
                            </Text>
                            <Text color="white" onClick={() => router.push("/transparencia")} cursor="pointer" fontSize={["xs", "sm", "sm", "sm"]} _hover={{ opacity: 0.7 }}>
                                Transparencia 
                            </Text>
                            <Button size="sm" shadow="2xl" borderRadius="5em">
                                <Text cursor="pointer" fontSize={["xs", "sm", "sm", "sm"]}>
                                    Donaciones
                                </Text>
                            </Button>
                        </Hide>
                    </Stack>
                    <Show below="md" >
                        {renderLangMenu()}
                    </Show>
                </GridItem>
            </Grid>
            
        </Box>
    )
} 

export default Navigation