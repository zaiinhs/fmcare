"use client";

import { DATA_POKEMON } from "@/data";
import { Flex, Container, Text, Input, Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function Home() {
  const [dataSelected, setDataSelected] = useState<any>([]);
  const [valueSearch, setValueSearch] = useState<any>("");

  const router = useRouter();
  const findPokemonSelected = (value: string) => {
    return DATA_POKEMON.find((pokemon) => pokemon.name.includes(value));
  };

  useEffect(() => {
    const selectedData = findPokemonSelected(valueSearch);
    valueSearch !== "" ? setDataSelected([selectedData]) : setDataSelected([]);
  }, [valueSearch]);

  const handleDetailPage = (item: any) => {
    router.push(`/${item.id}`);
  };

  return (
    <Container maxW={"1024px"} my={"3em"}>
      <Flex direction={"column"}>
        <Text fontSize={"2.5em"} fontWeight={"700"}>
          Stock Pokemon
        </Text>

        <Flex ml={".5em"} alignItems={"center"}>
          <Box>
            <IoSearch fontSize={"1.5em"} color="grey" />
          </Box>
          <Input
            ml={"-2em"}
            pl={"2.5em"}
            placeholder="Search pokemon..."
            size="md"
            onChange={(e) => setValueSearch(e.target.value)}
          />
        </Flex>

        <Flex mt={"2em"} direction={"column"}>
          <Flex
            my={"1em"}
            borderBottom={"1px solid"}
            borderColor={"grey"}
            justifyContent={"space-between"}
          >
            <Text fontSize={"large"} fontWeight={"800"}>
              Name
            </Text>
            <Text fontSize={"large"} fontWeight={"800"}>
              Stok
            </Text>
          </Flex>

          <Box
            height={"60dvh"}
            className="scroll_pokemon"
            overflowY={"scroll"}
            lineHeight={"3em"}
          >
            {dataSelected.length !== 0 && dataSelected[0] !== undefined ? (
              dataSelected.map((item: any) => {
                return (
                  <Button
                    _hover={{ bg: "grey", color: "white" }}
                    as={"div"}
                    variant={"none"}
                    width={"100%"}
                    cursor={"pointer"}
                    justifyContent={"space-between"}
                    onClick={() => handleDetailPage(item)}
                    key={item?.id}
                  >
                    <Text fontWeight={"500"}>{item?.name}</Text>
                    <Text>{`${item?.stok} pcs`}</Text>
                  </Button>
                );
              })
            ) : dataSelected[0] === undefined && dataSelected.length !== 0 ? (
              <Flex justifyContent={"center"}>
                <Text color={"red"} fontWeight={"600"}>
                  Not Found
                </Text>
              </Flex>
            ) : (
              DATA_POKEMON.map((item: any) => {
                return (
                  <Button
                    _hover={{ bg: "grey", color: "white" }}
                    as={"div"}
                    variant={"none"}
                    width={"100%"}
                    cursor={"pointer"}
                    justifyContent={"space-between"}
                    onClick={() => handleDetailPage(item)}
                    key={item?.id}
                  >
                    <Text fontWeight={"500"}>{item?.name}</Text>
                    <Text>{`${item?.stok} pcs`}</Text>
                  </Button>
                );
              })
            )}
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
