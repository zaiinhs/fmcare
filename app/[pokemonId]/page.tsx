"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  chakra,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter, useParams } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
import { UpdateStockModal } from "../components/UpdateStockModal";
import { ConfirmationDrawer } from "../components/ConfirmationDrawer";
import { DATA_POKEMON } from "@/data";
import { useEffect, useState } from "react";

const PokemonDetail = () => {
  const [detail, setDetail] = useState<any>();

  const router = useRouter();
  const params = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenConfirmation,
    onOpen: onOpenConfirmation,
    onClose: onCloseConfirmation,
  } = useDisclosure();

  const handleUpdate = () => {
    onOpen();
  };

  useEffect(() => {
    const _pokemonDetail = DATA_POKEMON.find(
      (item) => item.id === params.pokemonId
    );
    setDetail(_pokemonDetail);
  }, []);

  return (
    <Container maxW={"1024px"} my={"3em"}>
      <UpdateStockModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenConfirmation={onOpenConfirmation}
      />
      <ConfirmationDrawer
        onCloseOrder={onClose}
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

      {detail ? (
        <Flex mt={"3em"} gap={"2em"} direction={"column"}>
          <Flex
            direction={{ base: "column", sm: "row" }}
            alignItems={{ base: "start", sm: "center" }}
            justifyContent={"space-between"}
          >
            <Text fontSize={"2.5em"} fontWeight={"700"}>
              {detail.name}
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
              <Text fontSize={"2em"}>{detail.stok} pcs</Text>
            </Box>

            <Box>
              <Text fontSize={"1em"} fontWeight={"700"}>
                Stock history
              </Text>
              <Text>Stock units in pcs</Text>
            </Box>

            <Flex direction={"column"}>
              <TableContainer>
                <Table size="sm">
                  <Thead>
                    <Tr>
                      <Th>Activity</Th>
                      <Th>Notes</Th>
                      <Th>Quantity</Th>
                      <Th isNumeric>Stock</Th>
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
                      <Td>Stock awal</Td>
                      <Td color={"green"}>+30</Td>
                      <Td isNumeric>10</Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <chakra.span>Update</chakra.span> <br />{" "}
                        <chakra.span fontSize={"smaller"} color={"grey"}>
                          21 July 2024, 09.00
                        </chakra.span>
                      </Td>
                      <Td>Stock</Td>
                      <Td color={"green"}>+100</Td>
                      <Td isNumeric>10</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Flex>
          </Flex>
        </Flex>
      ) : null}
    </Container>
  );
};

export default PokemonDetail;
