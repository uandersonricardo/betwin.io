import React, { ReactNode } from "react";

import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  TbBallBasketball,
  TbHome,
  TbPlayerPlay,
  TbSoccerField,
  TbStar
} from "react-icons/tb";

import MobileNav from "./MobileNav";
import SidebarContent from "./SidebarContent";

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
    <Box minH="full" bg="gray.900">
      <SidebarContent
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
          <SidebarContent onClose={onClose} items={LinkItems} />
        </DrawerContent>
      </Drawer>

      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

export default Structure;
