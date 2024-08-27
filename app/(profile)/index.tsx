import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const index = () => {
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          marginVertical: 20,
          paddingHorizontal: 25,
          alignItems: "flex-start",
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            source={{
              uri: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            }}
            width={100}
            height={100}
            resizeMode="cover"
            style={{
              borderRadius: 100,
            }}
          />
          <View
            style={{
              marginTop: 9,
              paddingLeft: 15,
              flex: 1,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "800",
                fontSize: 18,
              }}
            >
              Jagdeep Singh
            </Text>
            <View
              style={{
                width: "100%",
                borderWidth: 1,
                borderColor: "#f4d03f",
                height: 40,
                marginTop: 12,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 12,
                }}
              >
                Edit Profile
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                width: "50%",
              }}
            ></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    paddingVertical: 10,
    flex: 1,
    flexWrap: "wrap",
  },
});
