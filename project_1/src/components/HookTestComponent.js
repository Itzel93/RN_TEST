import React, { useMemo } from "react";
import { View } from "react-native";
import Typography from "./Typography";

export default function HookTestComponent(props) {
  const text = useMemo(() => {
    return props.a + props.b;
  }, [props.a, props.b]);
  return (
    <View>
      <Typography>{text}</Typography>
    </View>
  );
}
