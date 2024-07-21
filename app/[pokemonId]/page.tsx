"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
import { UpdateStockModal } from "../components/UpdateStockModal";
import { ConfirmationDrawer } from "../components/ConfirmationDrawer";

const PokemonDetail = () => {
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenConfirmation,
    onOpen: onOpenConfirmation,
    onClose: onCloseConfirmation,
  } = useDisclosure();

  const handleUpdate = () => {
    onOpen();
  };

  return (
    <Container maxW={"1024px"} my={"3em"}>
      <UpdateStockModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenConfirmation={onOpenConfirmation}
      />
      <ConfirmationDrawer
        isOpen={isOpenConfirmation}
        onClose={onCloseConfirmation}
      />
      <Button
        textAlign={"start"}
        w={"fit-content"}
        my={"1em"}
        ml={"1em"}
        color={"#006A7A"}
        leftIcon={<FaArrowLeftLong />}
        onClick={() => router.push("/")}
        variant={"link"}
      >
        Stock Pokemon list
      </Button>
      <Flex mt={"3em"} gap={"2em"} direction={"column"}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize={"2.5em"} fontWeight={"700"}>
            Pokemon Name
          </Text>

          <Button
            onClick={handleUpdate}
            borderRadius={"full"}
            variant={"outline"}
            color={"#006A7A"}
          >
            Update Stock
          </Button>
        </Flex>

        <Flex direction={"column"} gap={"2em"}>
          <Box>
            <Text>Remaining stock</Text>
            <Text fontSize={"2em"}>10 pcs</Text>
          </Box>

          <Box>
            <Text fontSize={"1em"} fontWeight={"700"}>
              Stock history
            </Text>
            <Text>Stock units in pcs</Text>
          </Box>

          <Flex>Table Stock</Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default PokemonDetail;
