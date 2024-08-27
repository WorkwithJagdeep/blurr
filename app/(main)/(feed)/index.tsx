import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { messages } from "@/Data/Data";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Feather, Octicons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";

const index = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        {messages.map((message, index: number) => (
          <View
            key={index}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 18,
              borderBottomWidth: 0.5,
              borderBottomColor: "rgba(255,255,255,0.1)",
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Image
                source={{
                  uri: `${message.image}`,
                }}
                width={40}
                height={40}
                style={{
                  objectFit: "cover",
                  backgroundColor: "#f4d03f",
                  borderRadius: 8,
                }}
              />
              <View
                style={{
                  flex: 1,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingBottom: 6,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      marginHorizontal: 15,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 14,
                        fontWeight: "800",
                      }}
                    >
                      {message.name}
                    </Text>
                    <Text
                      style={{
                        color: "rgba(255,255,255,0.6)",
                        fontSize: 12,
                        marginLeft: 8,
                      }}
                    >
                      @{message.username}
                    </Text>
                    {message.isVerified && (
                      <View
                        style={{
                          marginLeft: 9,
                        }}
                      >
                        <Octicons name="verified" size={16} color="#f4d03f" />
                      </View>
                    )}
                  </View>
                  <View>
                    <Feather
                      name="more-horizontal"
                      size={20}
                      color="rgba(255,255,255,0.8)"
                    />
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 13,
                      paddingLeft: 15,
                    }}
                  >
                    {message.message}
                  </Text>
                </View>
                <View
                  style={{
                    paddingTop: 20,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      marginHorizontal: 15,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Feather
                      name="arrow-up-circle"
                      size={22}
                      color="rgba(255,255,255,0.4)"
                    />
                    <Text
                      style={{
                        color: "rgba(255,255,255,0.6)",
                        fontSize: 13,
                        marginLeft: 8,
                      }}
                    >
                      9,244
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginHorizontal: 15,
                    }}
                  >
                    <Ionicons
                      name="chatbubble-ellipses-outline"
                      size={22}
                      color="rgba(255,255,255,0.4)"
                    />
                    <Text
                      style={{
                        color: "rgba(255,255,255,0.6)",
                        fontSize: 13,
                        marginLeft: 8,
                      }}
                    >
                      1,500
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginHorizontal: 15,
                    }}
                  >
                    <FontAwesome
                      name="share"
                      size={22}
                      color="rgba(255,255,255,0.4)"
                    />
                    <Text
                      style={{
                        color: "rgba(255,255,255,0.6)",
                        fontSize: 13,
                        marginLeft: 8,
                      }}
                    >
                      2,244
                    </Text>
                  </View>
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

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "black",
  },
});
