import React from "react";
import { View } from "react-native";

export default function Spacer(props) {
  if (props.horizontal) {
    return <View style={{ marginLeft: props.space }} />;
  }

  return <View style={{ marginTop: props.space }} />;
}
