import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "../hooks";
import { ContactById, Home, Login } from "../screens";

const Stack = createStackNavigator();

export function AppRoutes() {
  const { user } = useAuth();

  return (
    <Stack.Navigator
      initialRouteName={!user.token ? "login" : "home"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="contactById" component={ContactById} />
    </Stack.Navigator>
  );
}
