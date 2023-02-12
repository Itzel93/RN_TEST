import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ImageDetailScreen from "../screens/ImageDetailScreen";
import BottomTabNavigations from "./BottomTabNavigations";

const Stack = createNativeStackNavigator();

export const RootStackNavigations = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTab" component={BottomTabNavigations} />
      <Stack.Screen name="ImageDetail" component={ImageDetailScreen} />
    </Stack.Navigator>
  );
};
