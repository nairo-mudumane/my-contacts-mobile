import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
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
import { AuthContextProvider } from "./src/contexts";
import { AppRoutes } from "./src/routes/app.routes";
import { Login } from "./src/screens";

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
        <SafeAreaView>
          <AuthContextProvider>
            {fontsLoaded ? (
              // <Login />
              <AppRoutes />
            ) : (
              <FullScreenLoader />
            )}
          </AuthContextProvider>
        </SafeAreaView>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
