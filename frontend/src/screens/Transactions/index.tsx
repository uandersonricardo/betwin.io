import React, { useEffect, useRef, useState } from "react";

import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  LightMode,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useToast
} from "@chakra-ui/react";
import { TbArrowsRightLeft } from "react-icons/tb";

import Loading from "../../components/Common/Loading";
import useFetch from "../../hooks/useFetch";
import { Transaction } from "../../types";
import {
  translateMethod,
  translateStatus,
  translateType
} from "../../utils/transaction";

const Transactions: React.FC = () => {
  const toast = useToast();
  const ref = useRef(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const {
    isLoading,
    data: fetchData,
    error: fetchError
  } = useFetch("/transactions");

  useEffect(() => {
    if (fetchError) {
      toast({
        title: "Ops...",
        description: "Algo deu errado.",
        status: "error",
        duration: 3000,
        isClosable: true
      });
    }
  }, [fetchError]);

  useEffect(() => {
    if (fetchData) {
      setTransactions(fetchData.transactions);
    }
  }, [fetchData]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Flex bg="gray.50" flex="auto" color="gray.700">
      <Flex
        as="section"
        direction="column"
        bg="white"
        w="full"
        overflow="hidden"
        borderTop="1px solid"
        borderTopColor="gray.200"
      >
        <Flex align="center" mb="4" px="6" pt="6">
          <Icon fontSize="6xl" mr="4" as={TbArrowsRightLeft} />
          <Flex direction="column">
            <Heading fontSize="2xl" fontWeight="bold">
              Transações
            </Heading>
            <Text fontSize="md" color="gray.500">
              Veja suas últimas transações
            </Text>
          </Flex>
        </Flex>
        <Tabs colorScheme="pink">
          <TabList
            px="6"
            bg="white"
            borderColor="gray.200"
            borderBottomWidth="1px"
          >
            <Tab
              _selected={{ color: "pink.500", borderColor: "pink.500" }}
              fontWeight="semibold"
            >
              Todas
            </Tab>
            <Tab
              _selected={{ color: "pink.500", borderColor: "pink.500" }}
              fontWeight="semibold"
            >
              Depósitos
            </Tab>
            <Tab
              _selected={{ color: "pink.500", borderColor: "pink.500" }}
              fontWeight="semibold"
            >
              Saques
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel p="0">
              <LightMode>
                <Flex direction="column" bg="white" w="full" overflow="hidden">
                  <Grid
                    w="full"
                    templateColumns="1fr 1fr 1fr 7rem 1fr 1fr"
                    gap={4}
                    bg="gray.50"
                    borderBottom="1px solid"
                    borderColor="gray.200"
                    py="3"
                    px="8"
                    textTransform="uppercase"
                    fontWeight="bold"
                    fontSize="xs"
                    color="gray.600"
                  >
                    <GridItem>Identificador</GridItem>
                    <GridItem>Tipo</GridItem>
                    <GridItem>Método</GridItem>
                    <GridItem>Valor</GridItem>
                    <GridItem>Status</GridItem>
                    <GridItem>Data</GridItem>
                  </Grid>
                  {transactions.map(transaction => (
                    <Grid
                      templateColumns="1fr 1fr 1fr 7rem 1fr 1fr"
                      gap={4}
                      w="full"
                      overflow="hidden"
                      borderBottom="1px solid"
                      borderColor="gray.200"
                      alignItems="center"
                      px="8"
                      py="4"
                      key={transaction.id}
                    >
                      <GridItem>{transaction.id}</GridItem>
                      <GridItem>{translateType(transaction.type)}</GridItem>
                      <GridItem>{translateMethod(transaction.method)}</GridItem>
                      <GridItem>R${transaction.value.toFixed(2)}</GridItem>
                      <GridItem>{translateStatus(transaction.status)}</GridItem>
                      <GridItem>
                        {new Date(transaction.date).toLocaleString()}
                      </GridItem>
                    </Grid>
                  ))}
                </Flex>
              </LightMode>
            </TabPanel>
            <TabPanel p="0">
              <LightMode>
                <Flex direction="column" bg="white" w="full" overflow="hidden">
                  <Grid
                    w="full"
                    templateColumns="1fr 1fr 1fr 7rem 1fr 1fr"
                    gap={4}
                    bg="gray.50"
                    borderBottom="1px solid"
                    borderColor="gray.200"
                    py="3"
                    px="8"
                    textTransform="uppercase"
                    fontWeight="bold"
                    fontSize="xs"
                    color="gray.600"
                  >
                    <GridItem>Identificador</GridItem>
                    <GridItem>Tipo</GridItem>
                    <GridItem>Método</GridItem>
                    <GridItem>Valor</GridItem>
                    <GridItem>Status</GridItem>
                    <GridItem>Data</GridItem>
                  </Grid>
                  {transactions
                    .filter(transaction => transaction.type === "deposit")
                    .map(transaction => (
                      <Grid
                        templateColumns="1fr 1fr 1fr 7rem 1fr 1fr"
                        gap={4}
                        w="full"
                        overflow="hidden"
                        borderBottom="1px solid"
                        borderColor="gray.200"
                        alignItems="center"
                        px="8"
                        py="4"
                        key={transaction.id}
                      >
                        <GridItem>{transaction.id}</GridItem>
                        <GridItem>{translateType(transaction.type)}</GridItem>
                        <GridItem>
                          {translateMethod(transaction.method)}
                        </GridItem>
                        <GridItem>R${transaction.value.toFixed(2)}</GridItem>
                        <GridItem>
                          {translateStatus(transaction.status)}
                        </GridItem>
                        <GridItem>
                          {new Date(transaction.date).toLocaleString()}
                        </GridItem>
                      </Grid>
                    ))}
                </Flex>
              </LightMode>
            </TabPanel>
            <TabPanel p="0">
              <LightMode>
                <Flex direction="column" bg="white" w="full" overflow="hidden">
                  <Grid
                    w="full"
                    templateColumns="1fr 1fr 1fr 7rem 1fr 1fr"
                    gap={4}
                    bg="gray.50"
                    borderBottom="1px solid"
                    borderColor="gray.200"
                    py="3"
                    px="8"
                    textTransform="uppercase"
                    fontWeight="bold"
                    fontSize="xs"
                    color="gray.600"
                  >
                    <GridItem>Identificador</GridItem>
                    <GridItem>Tipo</GridItem>
                    <GridItem>Método</GridItem>
                    <GridItem>Valor</GridItem>
                    <GridItem>Status</GridItem>
                    <GridItem>Data</GridItem>
                  </Grid>
                  {transactions
                    .filter(transaction => transaction.type === "withdraw")
                    .map(transaction => (
                      <Grid
                        templateColumns="1fr 1fr 1fr 7rem 1fr 1fr"
                        gap={4}
                        w="full"
                        overflow="hidden"
                        borderBottom="1px solid"
                        borderColor="gray.200"
                        alignItems="center"
                        px="8"
                        py="4"
                        key={transaction.id}
                      >
                        <GridItem>{transaction.id}</GridItem>
                        <GridItem>{translateType(transaction.type)}</GridItem>
                        <GridItem>
                          {translateMethod(transaction.method)}
                        </GridItem>
                        <GridItem>R${transaction.value.toFixed(2)}</GridItem>
                        <GridItem>
                          {translateStatus(transaction.status)}
                        </GridItem>
                        <GridItem>
                          {new Date(transaction.date).toLocaleString()}
                        </GridItem>
                      </Grid>
                    ))}
                </Flex>
              </LightMode>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
};

export default Transactions;
