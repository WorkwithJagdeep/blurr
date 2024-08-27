import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalstyles } from "@/styles/global";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  return (
    <View style={globalstyles.appContainer}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 80,
        }}
      >
        <View
          style={{
            height: 110,
            width: "100%",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            borderRadius: 20,
            padding: 25,
            // Android
            elevation: 5,
          }}
        >
          <Image
            source={require("@/assets/images/logo.png")}
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
          />
        </View>
      </View>
      <View
        style={{
          marginVertical: 20,
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontSize: 42,
            color: "white",
            fontFamily: "WorkSans",
            textAlign: "left",
            fontWeight: "800",
          }}
        >
          Find your{" "}
          <Text
            style={{
              color: "#f4d03f",
            }}
          >
            people
          </Text>
          . Build your world.
        </Text>
        {/* <Text
          style={{
            marginVertical: 10,
            fontSize: 16,
            fontFamily: "WorkSans",
            textAlign: "left",
            color: "rgba(255,255,255,0.8)",
          }}
        >
          Join a community that feels like home. Where connections are real, and
          belonging is effortless.
        </Text> */}
      </View>
      <Pressable
        onPress={() => {
          return router.push("/(main)");
        }}
        style={{
          backgroundColor: "#e8e8e8",
          paddingVertical: 20,
          borderRadius: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          // Android
          elevation: 5,
          marginBottom: 15,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 19,
            fontWeight: "700",
            color: "black",
            textAlign: "center",
            paddingHorizontal: 20,
            fontFamily: "WorkSans",
          }}
        >
          Hey, What's up
        </Text>
      </Pressable>
      <Text
        style={{
          color: "rgba(255,255,255,0.5)",
          fontSize: 12,
          textAlign: "center",
          paddingHorizontal: 8,
          marginBottom: 10,
        }}
      >
        By continue, you agree to our Terms of Use and have read and agred to
        our Privacy Policy.
      </Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
