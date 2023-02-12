import React from "react";
import { Text as RNText } from "react-native";
import PropTypes from "prop-types";

export default function Typography(props) {
  return (
    <RNText style={{ color: props.color, fontSize: props.fontSize }}>
      {props.children}
    </RNText>
  );
}

// Typography.propTypes = {
//   color: PropTypes.string,
//   fontSize: PropTypes.number,
//   children: PropTypes.string
// };
