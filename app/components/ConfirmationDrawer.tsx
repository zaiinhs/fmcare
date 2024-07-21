import {
  DrawerFooter,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";

export const ConfirmationDrawer = ({ isOpen, onClose }: any) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Confirm stock updates</DrawerHeader>
        <DrawerBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consequat nisl vel pretium lectus quam id. Semper quis lectus nulla
            at volutpat diam ut venenatis. Dolor morbi non arcu risus quis
            varius quam quisque. Massa ultricies mi quis hendrerit dolor magna
            eget est lorem. Erat imperdiet sed euismod nisi porta. Lectus
            vestibulum mattis ullamcorper velit.
          </p>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
