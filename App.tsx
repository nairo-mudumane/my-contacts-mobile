import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";
import { THEME } from "./src/global";
import { Text } from "react-native";
import { FullScreenLoader } from "./src/components";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
  });

  return (
    <NativeBaseProvider theme={THEME.default}>
      {!fontsLoaded ? (
        <FullScreenLoader />
      ) : (
        <SafeAreaView>
          <StatusBar />
          <Text>App</Text>
        </SafeAreaView>
      )}
    </NativeBaseProvider>
  );
}
