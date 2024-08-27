import { Dimensions, StyleSheet } from "react-native";

export const globalstyles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#000000",
    height: Dimensions.get("screen").height,
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
});
