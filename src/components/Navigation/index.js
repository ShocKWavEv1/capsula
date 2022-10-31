import { useRouter } from "next/router"
import { motion, Variants } from "framer-motion";
import { Box, Heading, Grid, GridItem, Text, Stack, Button, Hide, keyframes, MenuButton, MenuIcon, Show, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, Menu, MenuList, MenuItem } from "@chakra-ui/react"
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useContext, useEffect, useState } from "react";
import MainContext from "../../context";

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%; }
  25% { transform: scale(1.05) rotate(0); border-radius: 20%; }
  50% { transform: scale(1.05) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { 
            type: "spring", 
            stiffness: 300, 
            damping: 24 
        }
    },
    closed: { 
        opacity: 0, 
        y: 20, 
        transition: { 
            duration: 0.2 
        } 
    }
};


const Navigation = () => {
    const router = useRouter();

    const contextService = useContext(MainContext);

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        console.log(contextService?.categories)
    }, [contextService])

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

    const renderProjects = () => {
        return(
            <Menu isLazy>
                <MenuButton>
                    <Text color="white" cursor="pointer" fontSize={["xs", "sm", "sm", "md"]} _hover={{ opacity: 0.7 }}>
                        Transparencia 
                        <ChevronDownIcon fontSize={["lg", "lg", "xl", "2xl"]} />
                    </Text>
                </MenuButton>
                <MenuList py="0px" >
                    {
                        contextService.categories.map((item, i) => {
                            return(
                                <MenuItem onClick={() => router.push(`/trayectoria?cat=${item._id}`)} key={i} p="1rem" >
                                    {item.title}
                                </MenuItem>
                            )
                        })
                    }
                </MenuList>
            </Menu>
        )
    }

    const renderDropdown = () => {
        return(
            <motion.ul
              variants={{
                open: {
                  clipPath: "inset(0% 0% 0% 0% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05
                  }
                },
                closed: {
                  clipPath: "inset(10% 50% 90% 50% round 10px)",
                  transition: {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3
                  }
                }
              }}
              style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
                {
                    contextService.categories.map((item, i) => {
                        return(
                            <motion.li key={i} variants={itemVariants}>
                                <Box w="250px" p="1rem" backgroundColor="white">
                                    <Heading color="brand.primary.800" >
                                        {item.title}
                                    </Heading>
                                </Box>
                            </motion.li>
                        )
                    })
                }
            </motion.ul>
        )
    }

    return(
        <Box w="100%">
            <Grid w="100%" h="100%" templateColumns='repeat(12, 2fr)'>
                <GridItem w="100%" display="flex" alignItems="center" justifyContent="flex-start" flexDir="row" colSpan={[4, 4, 4, 6]} h='100%'>
                    <motion.div
                        whileTap={{ scale: .8 }}
                        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
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
                    </motion.div>
                </GridItem>
                <GridItem w="100%" display="flex" alignItems="center" justifyContent="flex-end" flexDir="row" colSpan={[8, 8, 8, 6]} h='100%'>
                    <Stack direction='row' spacing={4} align='center'>
                        <Hide below="md" >
                            {renderProjects()}
                            <motion.div
                                whileTap={{ scale: .8 }}
                            >
                                <Text color="white" onClick={() => router.push("/transparencia")} cursor="pointer" fontSize={["xs", "sm", "sm", "md"]} _hover={{ opacity: 0.7 }}>
                                    Transparencia 
                                </Text>
                            </motion.div>
                            <Button size="sm" shadow="2xl" borderRadius="5em">
                                <Text cursor="pointer" fontSize={["xs", "sm", "sm", "md"]}>
                                    Donaciones
                                </Text>
                            </Button>
                        </Hide>
                    </Stack>
                    <Show below="md" >
                        {renderProjects()}
                    </Show>
                </GridItem>
            </Grid>
        </Box>
    )
} 

export default Navigation