import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { Provider } from "react-redux";
import BottomTabNavigations from "./src/navigations/BottomTabNavigations";
import { RootStackNavigations } from "./src/navigations/RootStackNavigations";
import store from "./src/store/store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <RootStackNavigations />
      </Provider>
    </NavigationContainer>
  );
}
