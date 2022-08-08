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
import NavItem from "./NavItem";
import { LinkItemProps } from "./Structure";

interface SidebarProps extends BoxProps {
  onClose: () => void;
  items: LinkItemProps[];
}

const SidebarContent: React.FC<SidebarProps> = ({
  onClose,
  items,
  ...rest
}) => {
  return (
    <Box
      transition="3s ease"
      bg="gray.900"
      borderRight="1px"
      borderRightColor="gray.700"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image src={logo} alt="Logo" h="6" />

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {items.map(link => (
        <NavItem key={link.name} icon={link.icon} type={link.type}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

export default SidebarContent;
