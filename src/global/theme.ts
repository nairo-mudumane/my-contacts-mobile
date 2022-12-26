import { extendTheme } from "native-base";

export const THEME = {
  default: extendTheme({
    fontConfig: {
      Roboto: {
        300: {
          normal: "Roboto_300Light",
        },
        400: {
          normal: "Roboto_400Regular",
        },
        500: {
          normal: "Roboto_500Medium",
        },
        700: {
          normal: "Roboto_700Bold",
        },
      },
    },
    fonts: {
      heading: "Roboto",
      body: "Roboto",
      mono: "Roboto",
    },
  }),
};
