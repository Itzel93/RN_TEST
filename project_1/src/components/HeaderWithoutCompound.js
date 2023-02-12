// import React from "react";
// import { View, Dimensions } from "react-native";
// import { SafeAreaInsetsContext } from "react-native-safe-area-context";
// import Button from "./Button";
// import Spacer from "./Spacer";
// import Typography from "./Typography";

// const { width } = Dimensions.get("window").width;

// export default function HeaderWithoutCompound(props) {
//   return (
//     <SafeAreaInsetsContext.Consumer>
//       {(insets) => (
//         <View style={{ paddingTop: insets.top }}>
//           <View
//             style={{
//               width: width,
//               height: 56,
//               flexDirection: "row",
//               borderBottomColor: "gray",
//               borderBottomWidth: 1,
//             }}
//           >
//             <Spacer horizontal space={12} />
//             <View
//               style={{
//                 flex: 1,
//                 flexDirection: "row",
//                 justifyContent: "space-between",
//               }}
//             >
//               <View style={{ flexDirection: "row", alignItems: "center" }}>
//                 {props.leftIcon && (
//                   <Button onPress={props.leftIcon.onPress}>
//                     <Icon name={props.leftIcon.iconName} size={28} />
//                   </Button>
//                 )}
//                 <Typography>{props.title}</Typography>
//               </View>
//               {props.rightIcon && (
//                 <Button onPress={props.rightIcon.onPress}>
//                   <Icon name={props.rightIcon.iconName} size={28} />
//                 </Button>
//               )}
//             </View>
//             <Spacer horizontal space={12} />
//           </View>
//         </View>
//       )}
//     </SafeAreaInsetsContext.Consumer>
//   );
// }
