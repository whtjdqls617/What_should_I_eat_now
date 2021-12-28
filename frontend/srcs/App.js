import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNav } from "./navigations/MainStack";
import { StyleSheet, Alert } from "react-native";
import { FirstLoading } from "./FirstLoading";
import { BlackHanSans_400Regular } from "@expo-google-fonts/black-han-sans";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  let [fontsLoaded] = useFonts({
    BlackHanSans_400Regular,
  });

  const MyTheme = {
    dark: false,
    colors: {
      background: "white",
    },
  };

  setTimeout(() => {
    setIsLoading(false);
  }, 1400);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    if (isLoading == true) {
      return (
        <>
          <FirstLoading />
        </>
      );
    } else
      return (
        <NavigationContainer theme={MyTheme}>
          <MainStackNav />
        </NavigationContainer>
      );
  }
}

const sytles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
