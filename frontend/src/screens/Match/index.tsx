import React from "react";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  LightMode,
  SimpleGrid,
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
  Tr,
  useDisclosure
} from "@chakra-ui/react";
import { TbSoccerField, TbStar, TbX } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

import BetModal from "../../components/Modals/BetModal";

const Match: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <Flex direction="column" bg="gray.100" color="gray.700">
      <LightMode>
        <Flex
          direction="column"
          bg="white"
          borderBottom="1px solid"
          borderBottomColor="gray.200"
          mb="6"
        >
          <Flex
            justify="space-between"
            align="center"
            p="6"
            w="full"
            borderBottom="1px solid"
            borderBottomColor="gray.100"
          >
            <IconButton
              variant="outline"
              aria-label="Fechar"
              icon={<TbX />}
              onClick={goBack}
            />
            <Flex align="center" justify="center">
              <Image
                src="https://i.pinimg.com/originals/f1/44/fc/f144fc61d0b0ed7716d740aa9deefb07.png"
                alt="League Logo"
                mr="4"
                w="6"
                h="6"
              />
              <Text fontWeight="bold">English Premier League</Text>
            </Flex>
            <IconButton
              variant="outline"
              aria-label="Favoritar"
              icon={<TbStar />}
            />
          </Flex>
          <SimpleGrid columns={3} spacing={2} p="6">
            <Flex direction="column" justify="center" align="center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png"
                fallbackSrc="https://upload.wikimedia.org/wikipedia/en/thumb/6/67/FIFA_Nations_World_Champion_Badge.svg/1200px-FIFA_Nations_World_Champion_Badge.svg.png"
                h="36"
                w="36"
                objectFit="contain"
                objectPosition="center"
                mb="4"
              />
              <Text fontWeight="bold" textAlign="center" fontSize="2xl">
                Real Madrid
              </Text>
            </Flex>
            <Flex direction="column" justify="center" align="center">
              <Text fontWeight="bold" fontSize="md" color="gray.500">
                12 de agosto, 16:00
              </Text>
              <Text fontWeight="bold" fontSize="6xl">
                5 : 4
              </Text>
              <Badge bg="red.500" color="white" px="2" py="1" borderRadius="sm">
                Ao vivo
              </Badge>
            </Flex>
            <Flex direction="column" justify="center" align="center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/pt/thumb/4/43/FCBarcelona.svg/1200px-FCBarcelona.svg.png"
                h="36"
                w="36"
                objectFit="contain"
                objectPosition="center"
                mb="4"
              />
              <Text fontWeight="bold" textAlign="center" fontSize="2xl">
                Barcelona
              </Text>
            </Flex>
            <Flex direction="column" justify="center" align="center" mt="4">
              <Text fontWeight="bold" fontSize="md" color="gray.500" mb="2">
                1
              </Text>
              <Button
                bg="gray.700"
                color="white"
                _hover={{
                  bg: "pink.400",
                  color: "white"
                }}
                _active={{
                  bg: "pink.500",
                  color: "white"
                }}
                size="lg"
                py="8"
                w="full"
                onClick={onOpen}
              >
                2.14
              </Button>
            </Flex>
            <Flex direction="column" justify="center" align="center" mt="4">
              <Text fontWeight="bold" fontSize="md" color="gray.500" mb="2">
                X
              </Text>
              <Button
                bg="gray.700"
                color="white"
                _hover={{
                  bg: "pink.400",
                  color: "white"
                }}
                _active={{
                  bg: "pink.500",
                  color: "white"
                }}
                size="lg"
                py="8"
                w="full"
                onClick={onOpen}
              >
                1.32
              </Button>
            </Flex>
            <Flex direction="column" justify="center" align="center" mt="4">
              <Text fontWeight="bold" fontSize="md" color="gray.500" mb="2">
                2
              </Text>
              <Button
                bg="gray.700"
                color="white"
                _hover={{
                  bg: "pink.400",
                  color: "white"
                }}
                _active={{
                  bg: "pink.500",
                  color: "white"
                }}
                size="lg"
                py="8"
                w="full"
                onClick={onOpen}
              >
                1.09
              </Button>
            </Flex>
          </SimpleGrid>
        </Flex>

        <Box w="full">
          <Accordion defaultIndex={[0]} allowToggle maxW="full">
            <AccordionItem maxW="full">
              <Flex
                direction="column"
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                mx="6"
                mb="6"
              >
                <h2>
                  <AccordionButton
                    _hover={{ bg: "gray.100" }}
                    px="4"
                    py="4"
                    _focusVisible={{
                      boxShadow: "none"
                    }}
                  >
                    <Box flex="1" textAlign="left">
                      Handicap asiático - 1º Tempo
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  maxW="full"
                  px="4"
                  py="4"
                  borderTop="1px solid"
                  borderTopColor="gray.200"
                >
                  <SimpleGrid columns={2} spacing={4}>
                    <Button
                      variant="outline"
                      w="full"
                      size="lg"
                      py="4"
                      display="flex"
                      justifyContent="space-between"
                      borderLeft="3px solid"
                      borderLeftColor="pink.400"
                      _hover={{
                        bg: "pink.400",
                        color: "white"
                      }}
                      _active={{
                        bg: "pink.500",
                        color: "white"
                      }}
                      onClick={onOpen}
                    >
                      <Text>(-0.25) Goiás</Text>
                      <Text>1.32</Text>
                    </Button>
                    <Button
                      variant="outline"
                      w="full"
                      size="lg"
                      py="4"
                      display="flex"
                      justifyContent="space-between"
                      borderLeft="3px solid"
                      borderLeftColor="pink.400"
                      _hover={{
                        bg: "pink.400",
                        color: "white"
                      }}
                      _active={{
                        bg: "pink.500",
                        color: "white"
                      }}
                      onClick={onOpen}
                    >
                      <Text>(0.25) Avaí</Text>
                      <Text>2.17</Text>
                    </Button>
                    <Button
                      variant="outline"
                      w="full"
                      size="lg"
                      py="4"
                      display="flex"
                      justifyContent="space-between"
                      borderLeft="3px solid"
                      borderLeftColor="pink.400"
                      _hover={{
                        bg: "pink.400",
                        color: "white"
                      }}
                      _active={{
                        bg: "pink.500",
                        color: "white"
                      }}
                      onClick={onOpen}
                    >
                      <Text>(-0.50) Goiás</Text>
                      <Text>3.74</Text>
                    </Button>
                    <Button
                      variant="outline"
                      w="full"
                      size="lg"
                      py="4"
                      display="flex"
                      justifyContent="space-between"
                      borderLeft="3px solid"
                      borderLeftColor="pink.400"
                      _hover={{
                        bg: "pink.400",
                        color: "white"
                      }}
                      _active={{
                        bg: "pink.500",
                        color: "white"
                      }}
                      onClick={onOpen}
                    >
                      <Text>(0.50) Avaí</Text>
                      <Text>4.92</Text>
                    </Button>
                  </SimpleGrid>
                </AccordionPanel>
              </Flex>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box w="full">
          <Accordion defaultIndex={[0]} allowToggle maxW="full">
            <AccordionItem maxW="full">
              <Flex
                direction="column"
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                mx="6"
                mb="6"
              >
                <h2>
                  <AccordionButton
                    _hover={{ bg: "gray.100" }}
                    px="4"
                    py="4"
                    _focusVisible={{
                      boxShadow: "none"
                    }}
                  >
                    <Box flex="1" textAlign="left">
                      Handicap asiático - 1º Tempo
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  maxW="full"
                  px="4"
                  py="4"
                  borderTop="1px solid"
                  borderTopColor="gray.200"
                >
                  <SimpleGrid columns={2} spacing={4}>
                    <Button
                      variant="outline"
                      w="full"
                      size="lg"
                      py="4"
                      display="flex"
                      justifyContent="space-between"
                      borderLeft="3px solid"
                      borderLeftColor="pink.400"
                      _hover={{
                        bg: "pink.400",
                        color: "white"
                      }}
                      _active={{
                        bg: "pink.500",
                        color: "white"
                      }}
                      onClick={onOpen}
                    >
                      <Text>(-0.25) Goiás</Text>
                      <Text>1.32</Text>
                    </Button>
                    <Button
                      variant="outline"
                      w="full"
                      size="lg"
                      py="4"
                      display="flex"
                      justifyContent="space-between"
                      borderLeft="3px solid"
                      borderLeftColor="pink.400"
                      _hover={{
                        bg: "pink.400",
                        color: "white"
                      }}
                      _active={{
                        bg: "pink.500",
                        color: "white"
                      }}
                      onClick={onOpen}
                    >
                      <Text>(0.25) Avaí</Text>
                      <Text>2.17</Text>
                    </Button>
                    <Button
                      variant="outline"
                      w="full"
                      size="lg"
                      py="4"
                      display="flex"
                      justifyContent="space-between"
                      borderLeft="3px solid"
                      borderLeftColor="pink.400"
                      _hover={{
                        bg: "pink.400",
                        color: "white"
                      }}
                      _active={{
                        bg: "pink.500",
                        color: "white"
                      }}
                      onClick={onOpen}
                    >
                      <Text>(-0.50) Goiás</Text>
                      <Text>3.74</Text>
                    </Button>
                    <Button
                      variant="outline"
                      w="full"
                      size="lg"
                      py="4"
                      display="flex"
                      justifyContent="space-between"
                      borderLeft="3px solid"
                      borderLeftColor="pink.400"
                      _hover={{
                        bg: "pink.400",
                        color: "white"
                      }}
                      _active={{
                        bg: "pink.500",
                        color: "white"
                      }}
                      onClick={onOpen}
                    >
                      <Text>(0.50) Avaí</Text>
                      <Text>4.92</Text>
                    </Button>
                  </SimpleGrid>
                </AccordionPanel>
              </Flex>
            </AccordionItem>
          </Accordion>
        </Box>
      </LightMode>
      <BetModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Match;
