import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Pressable, Text, View } from "react-native";
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    WorkSans: require("../assets/fonts/WorkSans-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      return router.push("/");
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="(chats)"
          options={{
            title: "",
            headerBackVisible: false,
            headerShown: true,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
            headerBackButtonMenuEnabled: false,
            headerLeft: () => (
              <View
                style={{
                  paddingLeft: 10,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 24,
                    fontWeight: "bold",
                    fontFamily: "WorkSans",
                    lineHeight: 24,
                    letterSpacing: -0.3,
                    textAlign: "center",
                    marginTop: 9,
                  }}
                >
                  Chats
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="(main)"
          options={{
            title: "",
            headerBackVisible: false,
            headerShown: true,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
            headerBackButtonMenuEnabled: false,
            headerLeft: () => (
              <Pressable
                onPress={() => {
                  return router.push("/(profile)");
                }}
                style={{
                  backgroundColor: "#f4d03f",
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                }}
              ></Pressable>
            ),
            headerTitle: () => (
              <View style={{}}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 22,
                    fontWeight: "bold",
                    fontFamily: "WorkSans",
                    lineHeight: 24,
                    letterSpacing: -0.3,
                    textAlign: "center",
                    marginTop: 9,
                  }}
                >
                  Blurr
                  <Text
                    style={{
                      color: "#f4d03f",
                    }}
                  >
                    .
                  </Text>
                </Text>
              </View>
            ),

            headerRight: () => (
              <View
                style={{
                  paddingHorizontal: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    position: "relative",
                    marginRight: 20,
                  }}
                >
                  <AntDesign name="search1" size={24} color="white" />
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 50,
                      backgroundColor: "red",
                      position: "absolute",
                      top: 2,
                      right: 2,
                    }}
                  ></View>
                </View>
                <Pressable
                  onPress={() => {
                    return router.push("/(chats)");
                  }}
                  style={{
                    position: "relative",
                  }}
                >
                  <Feather name="message-circle" size={30} color="white" />
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 50,
                      backgroundColor: "red",
                      position: "absolute",
                      top: 2,
                      right: 2,
                    }}
                  ></View>
                </Pressable>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="(profile)"
          options={{
            title: "Profile",
            headerShown: true,
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
            headerBackButtonMenuEnabled: false,
            headerRight: () => (
              <AntDesign name="setting" size={24} color="white" />
            ),
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
