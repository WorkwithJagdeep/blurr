import { Stack } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "black",
          },
        }}
      />
    </Stack>
  );
}
