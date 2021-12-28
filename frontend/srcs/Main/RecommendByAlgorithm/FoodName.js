import React from "react";
import { Text, StyleSheet } from "react-native";

export const FoodName = ({ name }) => {
  return <Text style={styles.foodname}>{name}</Text>;
};

const styles = StyleSheet.create({
  foodname: {
    fontSize: 25,
    fontFamily: "BlackHanSans_400Regular",
    marginTop: 30,
    justifyContent: "center",
    textAlign: "center",
  },
});
