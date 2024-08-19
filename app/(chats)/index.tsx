import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { randomMessages } from "@/Data/Data";

const index = () => {
  return (
    <ScrollView
      style={{
        paddingVertical: 10,
      }}
    >
      <View>
        {randomMessages.map((message, index: number) => (
          <View
            style={{
              paddingVertical: 15,
              paddingHorizontal: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/761115/pexels-photo-761115.jpeg?auto=compress&cs=tinysrgb&w=600",
                }}
                width={50}
                height={50}
                style={{
                  borderRadius: 100,
                }}
              />
              <View
                style={{
                  paddingHorizontal: 15,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    paddingRight: 15,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontWeight: "500",
                    }}
                  >
                    {message.username}
                  </Text>
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={1}
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: 12,
                      fontWeight: "300",
                      marginTop: 2,
                    }}
                  >
                    {message.message}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
