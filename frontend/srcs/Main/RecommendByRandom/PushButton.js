import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { random } from "../../data/icons";

export const PushButton = ({ setFoodName }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        setFoodName("");
      }}
    >
      <Image style={{ height: 70, width: 70 }} source={random} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 0.4,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 50,
    color: "red",
    fontFamily: "BlackHanSans_400Regular",
  },
});
