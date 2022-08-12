import React from "react";

import {
  Badge,
  Button,
  Flex,
  Heading,
  Icon,
  LightMode,
  Spacer,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import { TbSoccerField } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

// TODO: Componetizar as seções e passar por array de objetos

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const navigateToMatch = (id: string) => {
    return () => {
      console.log("aaa");
      navigate("/match/" + id);
    };
  };

  return (
    <Flex direction="column" bg="gray.50" flex="auto" color="gray.700">
      <Flex as="section" direction="column" bg="white">
        <Flex align="center" mb="4" px="6" pt="6">
          <Icon as={TbSoccerField} fontSize="6xl" mr="4" />
          <Flex direction="column">
            <Heading fontSize="2xl" fontWeight="bold">
              Futebol
            </Heading>
            <Text fontSize="md" color="gray.500">
              Veja as partidas em destaque
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
              Todos os jogos
            </Tab>
            <Tab
              _selected={{ color: "pink.500", borderColor: "pink.500" }}
              fontWeight="semibold"
            >
              Ao vivo
            </Tab>
            <Tab
              _selected={{ color: "pink.500", borderColor: "pink.500" }}
              fontWeight="semibold"
            >
              Encerrados
            </Tab>
            <Tab
              _selected={{ color: "pink.500", borderColor: "pink.500" }}
              fontWeight="semibold"
            >
              A seguir
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel p="0">
              <Flex
                bg="gray.50"
                px="6"
                py="4"
                borderColor="gray.200"
                borderBottomWidth="1px"
                align="center"
                color="gray.700"
              >
                <Icon as={TbSoccerField} fontSize="4xl" mr="4" />
                <Text fontSize="lg" fontWeight="bold">
                  Premier League
                </Text>
              </Flex>
              <LightMode>
                <TableContainer>
                  <Table bg="white">
                    <Thead>
                      <Tr bg="gray.50">
                        <Th maxW="6" borderColor="gray.200">
                          Tempo
                        </Th>
                        <Th maxW="6" borderColor="gray.200">
                          Status
                        </Th>
                        <Th borderColor="gray.200">Partida</Th>
                        <Th borderColor="gray.200"></Th>
                        <Th borderColor="gray.200"></Th>
                        <Th textAlign="center" maxW="4" borderColor="gray.200">
                          1
                        </Th>
                        <Th textAlign="center" maxW="4" borderColor="gray.200">
                          X
                        </Th>
                        <Th textAlign="center" maxW="4" borderColor="gray.200">
                          2
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr
                        _hover={{ bg: "gray.100" }}
                        cursor="pointer"
                        onClick={navigateToMatch("jd8asd90dajs")}
                      >
                        <Td
                          borderColor="gray.200"
                          borderLeftWidth="3px"
                          borderLeftColor="red.500"
                          maxW="6"
                          textAlign="center"
                        >
                          <Text fontWeight="bold">45:02</Text>
                          <Text
                            fontWeight="bold"
                            fontSize="xs"
                            textTransform="uppercase"
                            color="gray.400"
                          >
                            Agora
                          </Text>
                        </Td>
                        <Td maxW="6">
                          <Badge bg="red.500" color="white">
                            Ao vivo
                          </Badge>
                        </Td>
                        <Td borderColor="gray.200">
                          <Text fontWeight="bold">Manchester United</Text>
                        </Td>
                        <Td borderColor="gray.200" textAlign="center">
                          <Badge
                            bg="gray.700"
                            color="white"
                            mx="4"
                            fontSize="md"
                            borderRadius="sm"
                            py="0.5"
                            px="2"
                          >
                            1 : 4
                          </Badge>
                        </Td>
                        <Td borderColor="gray.200" textAlign="right">
                          <Text fontWeight="bold">Liverpool</Text>
                        </Td>
                        <Td borderColor="gray.200" textAlign="center" maxW="4">
                          <Button variant="outline" size="sm">
                            2.4
                          </Button>
                        </Td>
                        <Td borderColor="gray.200" textAlign="center" maxW="4">
                          <Button variant="outline" size="sm">
                            1.9
                          </Button>
                        </Td>
                        <Td borderColor="gray.200" textAlign="center" maxW="4">
                          <Button variant="outline" size="sm">
                            1.1
                          </Button>
                        </Td>
                      </Tr>
                      <Tr _hover={{ bg: "gray.100" }} cursor="pointer">
                        <Td maxW="6" textAlign="center">
                          <Text fontWeight="bold">16:00</Text>
                          <Text
                            fontWeight="bold"
                            fontSize="xs"
                            textTransform="uppercase"
                            color="gray.400"
                          >
                            27 Ago
                          </Text>
                        </Td>
                        <Td maxW="6"></Td>
                        <Td borderColor="gray.200">
                          <Text fontWeight="bold">Chelsea</Text>
                        </Td>
                        <Td borderColor="gray.200" textAlign="center">
                          <Badge
                            bg="gray.200"
                            color="gray.500"
                            mx="4"
                            fontSize="md"
                            borderRadius="sm"
                            py="0.5"
                            px="2"
                          >
                            <Text as="span" color="gray.900">
                              2
                            </Text>{" "}
                            : 0
                          </Badge>
                        </Td>
                        <Td borderColor="gray.200" textAlign="right">
                          <Text fontWeight="bold" color="gray.400">
                            Fulham
                          </Text>
                        </Td>
                        <Td borderColor="gray.200" textAlign="center" maxW="4">
                          <Button variant="outline" size="sm">
                            3.3
                          </Button>
                        </Td>
                        <Td borderColor="gray.200" textAlign="center" maxW="4">
                          <Button variant="outline" size="sm">
                            2.1
                          </Button>
                        </Td>
                        <Td borderColor="gray.200" textAlign="center" maxW="4">
                          <Button variant="outline" size="sm">
                            2.7
                          </Button>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </LightMode>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
            <TabPanel>
              <p>four!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
