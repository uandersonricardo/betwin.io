import React, { useState } from "react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

const Confirmation: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const onSubmit = (values: any) => {
    return new Promise(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve(true);
      }, 3000);
    });
  };

  return (
    <Flex
      as="main"
      w="full"
      h="full"
      justify="center"
      align="start"
      p={{ base: "0", lg: "8" }}
    >
      <Flex
        bg="gray.800"
        borderRadius={{ base: "0", lg: "xl" }}
        p="8"
        w={{ base: "full", lg: "md" }}
        minH={{ base: "full", lg: "auto" }}
        maxW="full"
        direction="column"
        justify="center"
        align="center"
        my="auto"
      >
        <Image src={logo} alt="Logo" maxW="full" h="8" w="auto" />
        <Text fontWeight="bold" fontSize="xl" mt="6" mb="8" color="gray.500">
          Verifique seu e-mail
        </Text>

        <Box>
          <Text mb="2" fontSize="xl" textAlign="center">
            Bem-vindo à família <b>betwin.io</b>!
          </Text>
          <Text textAlign="center" color="gray.300">
            Acesse sua caixa de e-mail e clique no link da mensagem para
            verificar sua conta.
          </Text>
        </Box>
        <Link to="/login">
          <Button
            bg="pink.500"
            w="full"
            _hover={{ bg: "pink.600" }}
            _active={{ bg: "pink.700" }}
            type="submit"
            size="lg"
            mt="8"
          >
            Voltar para o login
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Confirmation;
