import { ReactText } from "react";

import { Flex, FlexProps, Icon, Link } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
  icon?: IconType;
  type: "link" | "group";
  children: ReactText;
}

const NavItem: React.FC<NavItemProps> = ({ icon, type, children, ...rest }) => {
  if (type === "link") {
    return (
      <Link
        href="#"
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <Flex
          align="center"
          py="2"
          px="4"
          mx="4"
          mb="2"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          color="gray.300"
          _hover={{
            bg: "gray.800",
            color: "white"
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              _groupHover={{
                color: "white"
              }}
              fontSize="lg"
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    );
  }

  return (
    <Flex
      align="center"
      px="4"
      mx="4"
      mt="4"
      mb="2"
      role="group"
      color="gray.500"
      textTransform="uppercase"
      fontWeight="bold"
      fontSize="sm"
      {...rest}
    >
      {icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: "white"
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};

export default NavItem;
