import { ChevronDownIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const { Box, Heading, Grid, GridItem, Text, Spacer, Stack, Button, Menu, MenuButton, MenuList, MenuItem } = require("@chakra-ui/react")

const Footer = ({ dictionary }) => {

    const router = useRouter();

    const onChange = (val) => {
        const locale = val;
        router.push(router.pathname, router.pathname, {
          locale: locale
        });
    }

    const renderMenuButton = () => {
        return(
            <MenuButton
                px="0.5rem"
                bg="transparent"
                size="xs"
                transition='all 0.2s'
                _focus={{ boxShadow: 'outline' }}
            >
                <Text color="white" fontSize={["sm", "sm", "sm", "sm"]}>
                    {router.locale === "es" ? "español" : "english"} <ChevronDownIcon />
                </Text>
            </MenuButton>
        )
    }

    const renderLangMenu = () => {
        return(
            <Menu>
                {renderMenuButton()}
                <MenuList bg="brand.primary.500" borderColor="brand.primary.500" minWidth="50px" py="0px" >
                    <MenuItem onClick={() => onChange("es")} _hover={{ backgroundColor: "brand.accent" }} _focus={{ backgroundColor: "brand.primary.400" }} >
                        <Text color="white" fontSize={["sm", "sm", "sm", "sm"]}>
                            {dictionary.footer.spanish}
                        </Text>
                    </MenuItem>
                    <MenuItem onClick={() => onChange("en")} _hover={{ backgroundColor: "brand.accent" }} _focus={{ backgroundColor: "brand.primary.400" }} >
                        <Text color="white" fontSize={["sm", "sm", "sm", "sm"]}>
                            {dictionary.footer.english}
                        </Text>
                    </MenuItem>
                </MenuList>
            </Menu>
        )
    }

    return(
        <Box w="100%" padding={["0 4% 5% 4%", "0 4% 5% 4%", "0 4% 2% 4%", "0% 4% 2% 4%"]} bg="brand.primary.800">
            <Grid w="100%" h="100%" templateColumns='repeat(12, 2fr)'>
                <GridItem w="100%" display="flex" alignItems="flex-start" justifyContent="center" flexDir="column" colSpan={[8, 8, 8, 8]} h='100%'>
                    <Text color="white" fontSize={["sm", "sm", "sm", "sm"]}>
                        cápsula 2022
                    </Text>
                </GridItem>
                <GridItem w="100%" display="flex" alignItems="center" justifyContent="flex-end" flexDir="row" colSpan={[4, 4, 4, 4]} h='100%'>
                    {renderLangMenu()}
                </GridItem>
            </Grid>
        </Box>
    )
} 

export default Footer