import {
  DrawerFooter,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Box,
  Text,
  Flex,
  chakra,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  IconButton,
} from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

export const ConfirmationDrawer = ({ isOpen, onClose, onCloseOrder }: any) => {
  const handleSubmitStockPokemon = () => {
    onCloseOrder();
    onClose();
  };

  const handleEditAgainPokemon = () => {
    onClose();
  };

  const handleCancel = () => {
    onCloseOrder();
    onClose();
  };

  return (
    <Drawer onClose={handleCancel} isOpen={isOpen} size={"full"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Confirm stock updates</DrawerHeader>
        <DrawerBody>
          <Flex direction="column">
            <Box>
              <Text>Remaining stock</Text>
              <Text fontSize={"2em"}>+333 pcs</Text>
            </Box>

            <Flex mt={"1em"} gap={"8em"}>
              <Box>
                <Text fontSize={"1em"} fontWeight={"700"}>
                  In System
                </Text>
                <Text>10 pcs</Text>
              </Box>

              <Flex alignItems={"center"} gap={"1em"}>
                <FaArrowRightLong />
                <Box>
                  <Text fontSize={"1em"} fontWeight={"700"}>
                    Result update stock
                  </Text>
                  <Text>323 pcs</Text>
                </Box>
              </Flex>
            </Flex>

            <Flex mt={"2em"} direction={"column"}>
              <TableContainer>
                <Table size="sm">
                  <Thead>
                    <Tr>
                      <Th>Activity</Th>
                      <Th>Details</Th>
                      <Th>Quantity</Th>
                      <Th isNumeric>Action</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>
                        <chakra.span>Update Stock</chakra.span> <br />{" "}
                        <chakra.span fontSize={"smaller"} color={"grey"}>
                          22 July 2024, 08.00
                        </chakra.span>
                      </Td>
                      <Td>3 pcs, 45 lusin (12s)</Td>
                      <Td color={"green"}>+30</Td>
                      <Td isNumeric>
                        <IconButton
                          variant={"none"}
                          color={"#006A7A"}
                          aria-label="Edit Pokemon"
                          icon={<FaRegEdit />}
                          onClick={handleEditAgainPokemon}
                        />
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Flex>
          </Flex>
        </DrawerBody>

        <DrawerFooter>
          <Button
            color={"#006A7A"}
            variant="outline"
            mr={3}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmitStockPokemon}
            bg={"#006A7A"}
            color={"white"}
          >
            Save
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
