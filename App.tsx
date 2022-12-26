import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { THEME } from "./src/global";
import { FullScreenLoader } from "./src/components";
import { Welcome } from "./src/screens";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME.default}>
      {fontsLoaded ? (
        <SafeAreaView>
          <StatusBar backgroundColor="#171717" />
          <Welcome />
        </SafeAreaView>
      ) : (
        <FullScreenLoader />
      )}
    </NativeBaseProvider>
  );
}
