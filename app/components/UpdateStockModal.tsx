"use client";

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Box,
  Flex,
  Input,
  chakra,
} from "@chakra-ui/react";

export const UpdateStockModal = ({
  isOpen,
  onClose,
  onOpenConfirmation,
}: any) => {
  const handleSubmitStock = () => {
    onOpenConfirmation();
  };
  return (
    <Modal
      isCentered
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent m={"1em"}>
        <ModalHeader>Update Stock</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Text>
            Enter the amount of stock currently available on the shelves.
          </Text>

          <Box my={"1em"} w={"100%"}>
            <Flex
              borderBottom={"1px solid"}
              borderColor={"grey"}
              justifyContent={"space-between"}
            >
              <Text fontWeight={"800"}>Packaging</Text>
              <Text fontWeight={"800"}>Quantity</Text>
              <Text fontWeight={"800"}>Stock</Text>
            </Flex>

            <Flex
              my={".3em"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text>Pcs</Text>
              <Flex alignItems={"center"} gap={".5em"}>
                <chakra.span>1 x </chakra.span>
                <Input type="text" w={"100px"} h={"inherit"} />{" "}
                <chakra.span>=</chakra.span>
              </Flex>
              <Text>0</Text>
            </Flex>

            <Flex
              my={".3em"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text>Lusin</Text>
              <Flex alignItems={"center"} gap={".5em"}>
                <chakra.span>1 x </chakra.span>
                <Input type="text" w={"100px"} h={"inherit"} />{" "}
                <chakra.span>=</chakra.span>
              </Flex>
              <Text>0</Text>
            </Flex>

            <Flex
              justifyContent={"space-between"}
              borderTop={"1px solid"}
              borderColor={"grey"}
              mt={"2em"}
              py={".5em"}
            >
              <Text>
                <chakra.span fontWeight={"800"}>Total Stock </chakra.span>(in
                pcs)
              </Text>

              <Text fontWeight={"800"}>543</Text>
            </Flex>
          </Box>
        </ModalBody>

        <ModalFooter gap={"1em"}>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            onClick={handleSubmitStock}
            bg={"#006A7A"}
            color={"white"}
            mr={3}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
