import React, { useState } from "react";

import {
  Button,
  Flex,
  HStack,
  Icon,
  InputGroup,
  InputLeftElement,
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
  Text,
  useToast
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TbDice5 } from "react-icons/tb";

import betRequest from "../../../requests/bet";
import { MatchInfo, Odd } from "../../../types";

type BetModalProps = {
  onClose: () => void;
  isOpen: boolean;
  odd?: Odd;
  match?: MatchInfo;
  category?: string;
};

const BetModal: React.FC<BetModalProps> = ({
  onClose,
  isOpen,
  match,
  odd,
  category
}) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const [value, setValue] = useState("1.00");

  const { mutate, isLoading } = useMutation(betRequest, {
    onSuccess: () => {
      queryClient.invalidateQueries(["/cash"]);

      toast({
        title: "Parabéns!",
        description: "A aposta foi realizada com sucesso",
        status: "success",
        duration: 3000,
        isClosable: true
      });

      onClose();
    },
    onError: (err: any) => {
      let message = "Não foi possível realizar a aposta";

      if (err?.response?.data?.errors) {
        message = err.response.data.errors[0].msg;
      }

      toast({
        title: "Ops...",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true
      });
    }
  });

  const onSubmit = () => {
    const data = {
      matchId: match?.id || "",
      oddId: odd?.id || "",
      value: parseFloat(value),
      oddValue: odd?.odd || 0
    };

    mutate(data);
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
            <Text fontWeight="bold">
              {match?.home || "-"} x {match?.away || "-"}
            </Text>
            <Text color="gray.500" size="sm">
              {category || "-"}
            </Text>
            <Flex justify="space-between" align="center">
              <Text fontWeight="bold" size="sm">
                {odd?.line ? `(${(odd.line / 1000).toFixed(2)}) ` : ""}
                {odd?.label || "-"}
              </Text>
              <Text fontWeight="bold" size="sm" color="pink.400">
                {odd ? (odd.odd / 1000).toFixed(2) : "-"}
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
              R${((Number(value) * (odd?.odd || 0)) / 1000).toFixed(2)}
            </Text>
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            bg="pink.500"
            _hover={{ bg: "pink.600 " }}
            _active={{ bg: "pink.700 " }}
            color="white"
            isLoading={isLoading}
            onClick={onSubmit}
          >
            Apostar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BetModal;
