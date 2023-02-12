import React from "react";
import { Pressable } from "react-native";
export default function Button(props) {
  return (
    <Pressable
      onPress={props.onPress}
      onPressIn={props.onPressIn}
      onPressOut={props.onPressOut}
      hitSlop={props.hitSlop ?? { left: 0, right: 0, top: 0, bottom: 0 }}
      style={[
        props.style,
        {
          paddingHorizontal: props.paddingHorizontal,
          paddingVertical: props.paddingVertical,
        },
      ]}
    >
      {props.children}
    </Pressable>
  );
}
