import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";

import { AuthProvider } from "./contexts/Auth";
import Screens from "./screens";
import theme from "./styles";

const queryClient = new QueryClient();

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <>
    <ColorModeScript initialColorMode="dark" />
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <Screens />
        </AuthProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </>
);
