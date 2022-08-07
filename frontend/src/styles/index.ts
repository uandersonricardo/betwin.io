import { extendTheme } from "@chakra-ui/react";

import colors from "./foundations/colors";
import fonts from "./foundations/fonts";
import styles from "./styles";

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark"
  },
  styles,
  colors,
  fonts
});

export default theme;
