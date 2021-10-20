import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "@expo-google-fonts/inter";

export const FirstLoading = () => {
	const [fontsLoaded] = useFonts({
    Base : require("../assets/fonts/BlackHanSans-Regular.ttf"),
  });
  if (!fontsLoaded)
  	return null;
  return (
    <>
      <View style={styles.container}>
        <Text
          style={{
			fontFamily : 'Base',
            fontSize: 55,
            fontWeight: "bold",
          }}
        >
          지금 뭐먹지
        </Text>
      </View>
      <View style={styles.editor}>
        <Text style={{ fontSize: 18, fontFamily : 'Base' }}>2S2H</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  editor: {
    flex: 0.1,
    alignItems: "center",
  },
});
