import React, { useState } from "react";

import {
  Badge,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  InputGroup,
  InputLeftElement,
  LightMode,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
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
  VStack
} from "@chakra-ui/react";
import { TbDice5, TbSoccerField, TbWall, TbWallet } from "react-icons/tb";

type BetModalProps = {
  onClose: () => void;
  isOpen: boolean;
};

const BetModal: React.FC<BetModalProps> = ({ onClose, isOpen }) => {
  const [method, setMethod] = useState<string | null>(null);
  const [value, setValue] = useState("1.00");

  const toggleMethod = (method: string) => {
    return () => {
      setMethod(currentMethod => (currentMethod === method ? null : method));
    };
  };

  const changeValue = (value: string) => {
    return () => {
      setValue(value);
    };
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="blackAlpha.700" />
      <ModalContent bg="gray.900">
        <ModalHeader>
          <Flex align="center">
            <Icon as={TbDice5} mr="2" />
            Apostar
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb="4">Detalhes</Text>
          <Flex
            direction="column"
            p="3"
            border="2px dashed"
            borderColor="gray.700"
            borderRadius="md"
            mb="4"
          >
            <Text fontWeight="bold">Real Madrid x Barcelona</Text>
            <Text color="gray.500" size="sm">
              Real Madrid - Total
            </Text>
            <Flex justify="space-between" align="center">
              <Text fontWeight="bold" size="sm">
                Mais de 0.5
              </Text>
              <Text fontWeight="bold" size="sm" color="pink.400">
                1.38
              </Text>
            </Flex>
          </Flex>
          <Text mb="4">Valor</Text>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={"R$"}
              color="gray.500"
            />
            <NumberInput
              min={0.5}
              max={500}
              defaultValue={5}
              precision={2}
              step={0.01}
              onChange={valueString => setValue(valueString)}
              value={value}
              mb="4"
              focusBorderColor="gray.900"
              errorBorderColor="red.400"
              w="full"
            >
              <NumberInputField
                bg="gray.800"
                borderColor="gray.800"
                pl="10"
                _hover={{
                  bg: "gray.800",
                  borderColor: "gray.800"
                }}
                _focus={{
                  bg: "gray.800",
                  borderColor: "gray.800"
                }}
                _placeholder={{
                  color: "gray.600"
                }}
              />
              <NumberInputStepper>
                <NumberIncrementStepper
                  borderColor="gray.800"
                  _active={{ color: "pink.400" }}
                />
                <NumberDecrementStepper
                  borderColor="gray.800"
                  _active={{ color: "pink.400" }}
                />
              </NumberInputStepper>
            </NumberInput>
          </InputGroup>
          <HStack spacing="4" mb="4">
            <Button variant="outline" w="full" onClick={changeValue("10.00")}>
              R$10
            </Button>
            <Button variant="outline" w="full" onClick={changeValue("50.00")}>
              R$50
            </Button>
            <Button variant="outline" w="full" onClick={changeValue("100.00")}>
              R$100
            </Button>
          </HStack>
          <Text textAlign="right" w="full" color="gray.500">
            Ganho potencial:{" "}
            <Text color="white" fontWeight="bold" fontSize="2xl">
              R$123.38
            </Text>
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            bg="pink.500"
            _hover={{ bg: "pink.600 " }}
            _active={{ bg: "pink.700 " }}
            color="white"
          >
            Apostar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BetModal;
