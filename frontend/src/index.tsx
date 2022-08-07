import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";

import Screens from "./screens";
import theme from "./styles";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <>
    <ColorModeScript initialColorMode="dark" />
    <ChakraProvider theme={theme}>
      <Screens />
    </ChakraProvider>
  </>
);
