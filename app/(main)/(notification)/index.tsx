import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

const index = () => {
  return (
    <View style={styles.mainContainer}>
      <Text
        style={{
          color: "rgba(255,255,255,0.6)",
        }}
      >
        No new notification
      </Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});
