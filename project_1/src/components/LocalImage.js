import React from "react";
import { Image as RNImage } from "react-native";

export default function LocalImage(props) {
  return (
    <RNImage
      source={props.localAsset}
      style={[props.style, { width: props.width, height: props.height }]}
    />
  );
}
