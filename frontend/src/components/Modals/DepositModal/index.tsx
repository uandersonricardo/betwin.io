import React, { useState } from "react";

import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
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
import { TbWallet } from "react-icons/tb";

import depositRequest from "../../../requests/deposit";

type DepositModalProps = {
  onClose: () => void;
  isOpen: boolean;
};

const DepositModal: React.FC<DepositModalProps> = ({ onClose, isOpen }) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const [method, setMethod] = useState<string | null>(null);
  const [value, setValue] = useState("1.00");

  const { mutate, isLoading } = useMutation(depositRequest, {
    onSuccess: res => {
      const { url } = res.data;

      window.open(url, "_blank");

      queryClient.invalidateQueries(["/cash"]);

      onClose();
    },
    onError: (err: any) => {
      let message = "Não foi possível criar o pedido de depósito";

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
      method: method || "",
      value: parseFloat(value)
    };

    mutate(data);
  };

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
            <Icon as={TbWallet} mr="2" />
            Depositar
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb="4">Método de pagamento</Text>
          <Button
            variant="outline"
            w="full"
            onClick={toggleMethod("mercadopago")}
            borderColor={method === "mercadopago" ? "pink.400" : undefined}
            bg={method === "mercadopago" ? "gray.800" : undefined}
            mb="4"
          >
            <Image
              src="https://logospng.org/download/mercado-pago/logo-mercado-pago-icone-1024.png"
              alt="Mercado Pago Logo"
              h="6"
              w="6"
              mr="2"
            />
            Mercado Pago
          </Button>
          <Text mb="4">Valor</Text>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={"R$"}
              color="gray.500"
            />
            <NumberInput
              min={1}
              max={10000}
              defaultValue={1}
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
          <HStack spacing="4">
            <Button variant="outline" w="full" onClick={changeValue("50.00")}>
              R$50
            </Button>
            <Button variant="outline" w="full" onClick={changeValue("100.00")}>
              R$100
            </Button>
            <Button variant="outline" w="full" onClick={changeValue("500.00")}>
              R$500
            </Button>
          </HStack>
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
            Depositar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DepositModal;
