import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "mobx-react";

import stores from "./store/Stores";
import ProductScreen from "./pages/ProductPage";
import BasketScreen from "./pages/BasketPage";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider {...stores}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="product"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="product" component={ProductScreen}></Stack.Screen>
          <Stack.Screen name="basket" component={BasketScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
