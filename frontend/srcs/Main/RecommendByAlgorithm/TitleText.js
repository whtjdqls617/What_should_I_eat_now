import React from "react";
import { StyleSheet, Text } from "react-native";

export const TitleText = () => {
  return <Text style={styles.title}>이걸로 결정?</Text>;
};

const styles = StyleSheet.create({
  title: {
    flex: 0.6,
    textAlign: "center",
    fontFamily: "BlackHanSans_400Regular",
    fontSize: 40,
  },
});
