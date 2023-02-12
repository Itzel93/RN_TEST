import React from "react";
import { View, Dimensions, Text, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Spacer from "../Spacer";
import HeaderIcon from "./HeaderButton";
import HeaderGroup from "./HeaderGroup";
import HeaderTitle from "./HeaderTitle";

export default function Header(props) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  return (
    <View style={{ paddingTop: insets.top }}>
      <View
        style={{
          width: width,
          height: 56,
          flexDirection: "row",
          borderBottomColor: "gray",
          borderBottomWidth: 1,
          alignItems: "center",
        }}
      >
        <Spacer horizontal={true} space={12} />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {props.children}
        </View>
        <Spacer horizontal={true} space={12} />
      </View>
    </View>
  );
}

Header.Title = HeaderTitle;
Header.Icon = HeaderIcon;
Header.Group = HeaderGroup;
