import React from "react";

import { Flex } from "@chakra-ui/react";

import Main from "./Main";
import Structure from "./Structure";

const Layout: React.FC = () => (
  <Structure>
    <Main />
  </Structure>
);

export default Layout;
