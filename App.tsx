import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { AuthContextProvider } from "./src/contexts";
import { THEME } from "./src/global";
import { Routes } from "./src/routes";
import { FullScreenLoader } from "./src/components";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={THEME.default}>
        <AuthContextProvider>
          {fontsLoaded ? <Routes /> : <FullScreenLoader />}
        </AuthContextProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
