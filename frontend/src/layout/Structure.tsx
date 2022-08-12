import React, { ReactNode } from "react";

import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Flex
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  TbBallBasketball,
  TbHome,
  TbPlayerPlay,
  TbSoccerField,
  TbStar
} from "react-icons/tb";

import Header from "./Header";
import Sidebar from "./Sidebar";

export interface LinkItemProps {
  name: string;
  icon?: IconType;
  type: "link" | "group";
}

const LinkItems: LinkItemProps[] = [
  { name: "Navegação", type: "group" },
  { name: "Início", icon: TbHome, type: "link" },
  { name: "Ao vivo", icon: TbPlayerPlay, type: "link" },
  { name: "Favoritos", icon: TbStar, type: "link" },
  { name: "Esportes", type: "group" },
  { name: "Futebol", icon: TbSoccerField, type: "link" },
  { name: "Basquete", icon: TbBallBasketball, type: "link" }
];

interface StructureProps {
  children?: ReactNode;
}

const Structure: React.FC<StructureProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex h="full" bg="gray.900" direction="column">
      <Sidebar
        onClose={() => onClose}
        items={LinkItems}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} items={LinkItems} />
        </DrawerContent>
      </Drawer>

      <Header onOpen={onOpen} />
      <Flex
        ml={{ base: 0, md: 20 }}
        bg="gray.800"
        borderColor="gray.700"
        borderLeft="1px"
        borderTop="1px"
        borderTopLeftRadius="lg"
        flex="auto"
        color="gray.700"
        direction="column"
        overflowX="hidden"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default Structure;
