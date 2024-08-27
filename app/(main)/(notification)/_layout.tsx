import React from "react";
import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  MaterialTopTabBarProps,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";

import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { SafeAreaView, StatusBar } from "react-native";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: "black", borderColor: "red" },
        tabBarIndicatorStyle: {
          borderColor: "#f4d03f", // Change this to the desired active tab border color
          borderBottomWidth: 2, // Ad
        },

        tabBarContentContainerStyle: { justifyContent: "flex-start" },
      }}
    >
      <MaterialTopTabs.Screen
        name="index"
        options={{
          tabBarLabel: "all",
          tabBarLabelStyle: {
            textAlign: "center",
            textTransform: "capitalize",
          },
        }}
      />
      <MaterialTopTabs.Screen
        name="Following"
        options={{
          tabBarLabel: "Following",
          tabBarLabelStyle: {
            textAlign: "center",
            textTransform: "capitalize",
          },
        }}
      />
      <MaterialTopTabs.Screen
        name="Mentions"
        options={{
          tabBarLabel: "Mentions",
          tabBarLabelStyle: {
            textAlign: "center",
            textTransform: "capitalize",
          },
        }}
      />
    </MaterialTopTabs>
  );
}
