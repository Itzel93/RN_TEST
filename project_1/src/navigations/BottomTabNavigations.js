import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import ImageListScreen from "../screens/ImageListScreen";
import FavoriteImageListScreen from "../screens/FavoriteImageListScreen";
import TabIcon from "../components/TabIcon";
const Tabs = createBottomTabNavigator();

const BottomTabNavigations = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          const getName = () => {
            if (route.name === "ImageList") {
              return "home";
            }
            if (route.name === "FavoriteImageList") {
              return "star";
            }
          };

          const iconName = getName();

          return <TabIcon name={iconName} iconColor={color} />;
        },
      })}
    >
      <Tabs.Screen name="ImageList" component={ImageListScreen}></Tabs.Screen>
      <Tabs.Screen
        name="FavoriteImageList"
        component={FavoriteImageListScreen}
      ></Tabs.Screen>
    </Tabs.Navigator>
  );
};

export default BottomTabNavigations;
