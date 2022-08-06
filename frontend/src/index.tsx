import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";

import Screens from "./screens";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <ChakraProvider>
    <Screens />
  </ChakraProvider>
);
