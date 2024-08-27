import { Tabs, useRouter } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Entypo, Feather, Ionicons, Octicons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        headerShown: false,
        headerStyle: {
          backgroundColor: "black",
          height: 60,
        },

        tabBarStyle: {
          height: 60,
          backgroundColor: "black",
          borderColor: "black",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: ``,
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <AntDesign
                name={"home"}
                size={24}
                color={focused ? "#f4d03f" : "rgba(255,255,255,0.8)"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="(explore)"
        options={{
          title: ``,
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Feather
                name="airplay"
                size={24}
                color={focused ? "#f4d03f" : "rgba(255,255,255,0.8)"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="(feed)"
        options={{
          title: ``,
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <View
                style={{
                  position: "relative",
                }}
              >
                <Octicons
                  name="comment-discussion"
                  size={24}
                  color={focused ? "#f4d03f" : "rgba(255,255,255,0.8)"}
                />
              </View>

              {/* <Text
                style={{
                  color: focused ? "#f4d03f" : "rgba(255,255,255,0.8)",
                  fontSize: 9,
                  marginTop: 2,
                }}
              >
                Notication
              </Text> */}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="(notification)"
        options={{
          title: ``,
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <View
                style={{
                  position: "relative",
                }}
              >
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 50,
                    backgroundColor: "red",
                    position: "absolute",
                    top: 2,
                    zIndex: 10,
                    right: 2,
                  }}
                ></View>
                <Ionicons
                  name="notifications"
                  size={24}
                  color={focused ? "#f4d03f" : "rgba(255,255,255,0.8)"}
                />
              </View>

              {/* <Text
                style={{
                  color: focused ? "#f4d03f" : "rgba(255,255,255,0.8)",
                  fontSize: 9,
                  marginTop: 2,
                }}
              >
                Notication
              </Text> */}
            </View>
          ),
        }}
      />
      {/* <Tabs.Screen
        name="(profile)"
        options={{
          title: ``,
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Pressable
              onPress={() => {
                return router.push("/modal");
              }}
              style={{
                alignItems: "center",
              }}
            >
              <View
                style={{
                  position: "relative",
                }}
              >
                <View
                  style={{
                    height: 35,
                    width: 35,
                    backgroundColor: "#f4d03f",
                    borderRadius: 100,
                  }}
                ></View>
              </View>
            </Pressable>
          ),
        }}
      /> */}
    </Tabs>
  );
}
