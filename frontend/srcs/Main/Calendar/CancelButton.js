import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export const CancelButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.button_2}
      onPress={() => navigation.navigate("Main")}
    >
      <Text style={styles.buttontextstyle}>취소</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button_2: {
    margin: "8%",
    backgroundColor: "gray",
    alignItems: "center",
    height: 55,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  buttontextstyle: {
    fontSize: 20,
    color: "white",
    fontFamily: "BlackHanSans_400Regular",
  },
});
