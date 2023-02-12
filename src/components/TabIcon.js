import React from "react";
import { View } from "react-native";
import Badge from "./Badge";
import Icon from "./Icons";

export default function TabIcon(props) {
  if (props.visibleBadge) {
    return (
      <View>
        <Badge fontSize={10}>
          <Icon name={props.name} size={20} color={props.iconColor} />
        </Badge>
      </View>
    );
  }
  return (
    <View>
      <Icon name={props.name} size={20} color={props.iconColor} />
    </View>
  );
}
