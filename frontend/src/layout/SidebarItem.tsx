import { ReactText } from "react";

import { Box, Flex, FlexProps, Icon, Tooltip } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface SidebarItemProps extends FlexProps {
  icon?: IconType;
  type: "link" | "group";
  children: ReactText;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  type,
  children,
  ...rest
}) => {
  if (type === "link") {
    return (
      <Tooltip label={children} placement="right" bg="gray.900" color="white">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Flex
            align="center"
            justify="center"
            fontSize="xl"
            mx="3"
            mb="2"
            w="14"
            h="14"
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
                mr={{ base: "4", md: "0" }}
                _groupHover={{
                  color: "white"
                }}
                fontSize="xl"
                as={icon}
              />
            )}
            <Box display={{ base: "inline", md: "none" }}>{children}</Box>
          </Flex>
        </Link>
      </Tooltip>
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

export default SidebarItem;
