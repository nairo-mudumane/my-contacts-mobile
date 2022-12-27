import { createStackNavigator } from "@react-navigation/stack";
import { Home, Login } from "../screens";

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
