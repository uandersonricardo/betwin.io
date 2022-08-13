import React from "react";

import { Flex, Spinner } from "@chakra-ui/react";

const Loading: React.FC = () => (
  <Flex
    w="full"
    h="full"
    flex="auto"
    align="center"
    justify="center"
    bg="gray.100"
  >
    <Spinner color="gray.700" size="lg" />
  </Flex>
);

export default Loading;
