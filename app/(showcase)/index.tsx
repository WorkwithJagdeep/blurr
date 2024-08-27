import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const index = () => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: "#f4d03f",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            marginBottom: 15,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            marginHorizontal: 5,
          }}
        ></View>
        <View
          style={{
            width: 10,
            height: 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            marginBottom: 15,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            backgroundColor: "#e8e8e8",
            marginHorizontal: 5,
          }}
        ></View>
        <View
          style={{
            width: 10,
            height: 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            marginBottom: 15,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            backgroundColor: "#e8e8e8",
            marginHorizontal: 5,
          }}
        ></View>
        <View
          style={{
            width: 10,
            height: 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            marginBottom: 15,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            backgroundColor: "#e8e8e8",
            marginHorizontal: 5,
          }}
        ></View>
      </View>
      <Text
        style={{
          color: "white",
          fontSize: 32,
          fontWeight: "bold",
          textAlign: "center",
          paddingHorizontal: 20,
        }}
      >
        Send Messages Freely
      </Text>
      <Text
        style={{
          color: "rgba(255,255,255,0.5)",
          paddingHorizontal: 25,
          textAlign: "center",
          marginTop: 10,
          marginBottom: 15,
        }}
      >
        Express yourself without fear. Enjoy complete privacy with
        self-destructing messages and whisper mode.
      </Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
