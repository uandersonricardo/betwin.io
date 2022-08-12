import {
  Avatar,
  Box,
  Flex,
  FlexProps,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import {
  TbArrowsRightLeft,
  TbBell,
  TbCash,
  TbChevronDown,
  TbLogout,
  TbMenu2,
  TbSearch,
  TbUser,
  TbUserCircle,
  TbUserPlus,
  TbWallet
} from "react-icons/tb";

import logo from "../assets/logo.png";
import DepositModal from "../components/Modals/DepositModal";

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const Header: React.FC<MobileProps> = ({ onOpen, ...rest }) => {
  const { isOpen, onOpen: onClick, onClose } = useDisclosure();

  return (
    <Flex
      as="header"
      ml={{ base: 0, md: 20 }}
      px={{ base: 4, md: 4 }}
      minHeight="20"
      alignItems="center"
      bg="gray.900"
      justifyContent={{ base: "start", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        size="lg"
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="ghost"
        aria-label="open menu"
        icon={<TbMenu2 />}
        bg="gray.900"
        fontSize="xl"
        _hover={{
          bg: "gray.800",
          color: "white"
        }}
      />

      <Box
        w={{ base: "auto", md: "72" }}
        ml={{ base: "2", md: "0" }}
        mr={{ base: "0", md: "4" }}
      >
        <Image src={logo} alt="Logo" h="6" display="flex" mr="4" />
      </Box>

      <Spacer display={{ base: "flex", md: "none" }} />

      <InputGroup
        size="lg"
        display={{ base: "none", md: "flex" }}
        mr="4"
        flex="1"
      >
        <Input
          pr="3rem"
          type="text"
          id="search"
          placeholder="Pesquisar"
          bg="gray.800"
          variant="filled"
          _hover={{
            bg: "gray.800"
          }}
          _focus={{
            bg: "gray.800"
          }}
          _placeholder={{
            color: "gray.600"
          }}
          focusBorderColor="gray.800"
        />
        <InputRightElement w="3rem">
          <IconButton
            aria-label="Pesquisar"
            h="1.75rem"
            size="sm"
            w="auto"
            variant="transparent"
            color="gray.500"
            _hover={{ color: "white" }}
            _active={{ color: "white" }}
            icon={<TbSearch />}
          />
        </InputRightElement>
      </InputGroup>

      <HStack spacing={{ base: "4", md: "6" }} ml={{ base: "4", md: "8" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="abrir menu"
          icon={<TbBell />}
          color="gray.300"
          _hover={{
            bg: "gray.800",
            color: "white"
          }}
          fontSize="xl"
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              color="gray.300"
              _hover={{
                color: "white"
              }}
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm" color="white">
                    Justina Clark
                  </Text>
                  <Text fontSize="xs" color="pink.500">
                    R$5.00
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }} fontSize="xl">
                  <TbChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList bg="gray.900" borderColor="gray.700">
              <MenuItem icon={<TbUser fontSize="1rem" />}>Perfil</MenuItem>
              <MenuItem icon={<TbArrowsRightLeft fontSize="1rem" />}>
                Transações
              </MenuItem>
              <MenuItem icon={<TbUserPlus fontSize="1rem" />}>Indicar</MenuItem>
              <MenuDivider />
              <MenuItem icon={<TbWallet fontSize="1rem" />} onClick={onClick}>
                Depositar
              </MenuItem>
              <MenuItem icon={<TbCash fontSize="1rem" />}>Sacar</MenuItem>
              <MenuDivider />
              <MenuItem color="red.500" icon={<TbLogout fontSize="1rem" />}>
                Sair
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
      <DepositModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Header;
