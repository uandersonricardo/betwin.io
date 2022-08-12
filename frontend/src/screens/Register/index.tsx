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

const Register: React.FC = () => {
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
          Cadastre-se no betwin.io
        </Text>

        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <FormControl isInvalid={!!errors.username} mb="4">
            <FormLabel htmlFor="username" fontSize="sm" color="gray.500">
              Usuário
            </FormLabel>
            <Input
              id="username"
              placeholder="Digite seu usuário"
              {...register("username", {
                required: "Campo obrigatório"
              })}
              bg="gray.900"
              variant="filled"
              _hover={{
                bg: "gray.900"
              }}
              _focus={{
                bg: "gray.900"
              }}
              _focusVisible={{
                bg: "gray.900"
              }}
              _placeholder={{
                color: "gray.600"
              }}
              focusBorderColor="gray.900"
              errorBorderColor="red.400"
              size="lg"
            />
            <FormErrorMessage color="red.400">
              {errors.username && errors.username.message
                ? errors.username.message.toString()
                : ""}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password} mb="4">
            <FormLabel htmlFor="password" fontSize="sm" color="gray.500">
              Senha
            </FormLabel>
            <InputGroup size="lg">
              <Input
                pr="3rem"
                type={show ? "text" : "password"}
                id="password"
                placeholder="Digite sua senha"
                {...register("password", {
                  required: "Campo obrigatório"
                })}
                bg="gray.900"
                variant="filled"
                _hover={{
                  bg: "gray.900"
                }}
                _focus={{
                  bg: "gray.900"
                }}
                _placeholder={{
                  color: "gray.600"
                }}
                focusBorderColor="gray.900"
                errorBorderColor="red.400"
              />
              <InputRightElement w="3rem">
                <IconButton
                  aria-label={show ? "Ocultar senha" : "Mostrar senha"}
                  h="1.75rem"
                  size="sm"
                  w="auto"
                  variant="transparent"
                  color="gray.500"
                  _hover={{ color: "white" }}
                  _active={{ color: "white" }}
                  onClick={handleClick}
                  icon={show ? <RiEyeOffFill /> : <RiEyeFill />}
                />
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage color="red.400">
              {errors.password && errors.password.message
                ? errors.password.message.toString()
                : ""}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.email} mb="4">
            <FormLabel htmlFor="email" fontSize="sm" color="gray.500">
              E-mail
            </FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu usuário"
              {...register("email", {
                required: "Campo obrigatório"
              })}
              bg="gray.900"
              variant="filled"
              _hover={{
                bg: "gray.900"
              }}
              _focus={{
                bg: "gray.900"
              }}
              _focusVisible={{
                bg: "gray.900"
              }}
              _placeholder={{
                color: "gray.600"
              }}
              focusBorderColor="gray.900"
              errorBorderColor="red.400"
              size="lg"
            />
            <FormErrorMessage color="red.400">
              {errors.email && errors.email.message
                ? errors.email.message.toString()
                : ""}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.cpf} mb="8">
            <FormLabel htmlFor="cpf" fontSize="sm" color="gray.500">
              CPF
            </FormLabel>
            <Input
              id="cpf"
              placeholder="Digite seu usuário"
              {...register("cpf", {
                required: "Campo obrigatório"
              })}
              bg="gray.900"
              variant="filled"
              _hover={{
                bg: "gray.900"
              }}
              _focus={{
                bg: "gray.900"
              }}
              _focusVisible={{
                bg: "gray.900"
              }}
              _placeholder={{
                color: "gray.600"
              }}
              focusBorderColor="gray.900"
              errorBorderColor="red.400"
              size="lg"
            />
            <FormErrorMessage color="red.400">
              {errors.cpf && errors.cpf.message
                ? errors.cpf.message.toString()
                : ""}
            </FormErrorMessage>
          </FormControl>
          <Button
            bg="pink.500"
            w="full"
            _hover={{ bg: "pink.600" }}
            _active={{ bg: "pink.700" }}
            isLoading={isSubmitting}
            type="submit"
            size="lg"
          >
            Comece já!
          </Button>
          <Flex align="center" my="4">
            <Box flex="1" h="1px" bg="gray.700" />
            <Text color="gray.500" fontSize="sm" mx="6">
              ou
            </Text>
            <Box flex="1" h="1px" bg="gray.700" />
          </Flex>
          <Link to="/login">
            <Button w="full" size="lg" variant="outline">
              Entrar
            </Button>
          </Link>
        </form>
      </Flex>
    </Flex>
  );
};

export default Register;
