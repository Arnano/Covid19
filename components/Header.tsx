import {
  Box,
  Heading,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure
} from "@chakra-ui/core";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      width="960px"
      margin="20px auto"
      padding={"1.25rem 0"}
      display="flex"
      justifyContent="space-between"
    >
      <Heading as="h1" size="2xl">
        Covid19 tracking App
      </Heading>
      <Button variantColor="yellow" onClick={onOpen}>
        About
      </Button>
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
