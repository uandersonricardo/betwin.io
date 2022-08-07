import React from "react";

import { Flex, Spinner } from "@chakra-ui/react";

const Loading: React.FC = () => (
  <Flex w="full" h="full" align="center" justify="center">
    <Spinner color="pink.400" size="lg" />
  </Flex>
);

export default Loading;
