import {
  Box,
  BoxProps,
  CloseButton,
  Divider,
  Flex,
  Image,
  Text
} from "@chakra-ui/react";

import logo from "../assets/logo.png";
import SidebarItem from "./SidebarItem";
import { LinkItemProps } from "./Structure";

interface SidebarProps extends BoxProps {
  onClose: () => void;
  items: LinkItemProps[];
}

const Sidebar: React.FC<SidebarProps> = ({ onClose, items, ...rest }) => {
  return (
    <Box
      as="nav"
      transition="3s ease"
      bg="gray.900"
      w={{ base: "full", md: "20" }}
      pos="fixed"
      h="full"
      pt={{ base: 0, md: 4 }}
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <Image src={logo} alt="Logo" h="6" />

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {items.map(link => (
        <SidebarItem
          key={link.name}
          display={{
            base: "flex",
            md: link.type === "group" ? "none" : undefined
          }}
          icon={link.icon}
          type={link.type}
        >
          {link.name}
        </SidebarItem>
      ))}
    </Box>
  );
};

export default Sidebar;
