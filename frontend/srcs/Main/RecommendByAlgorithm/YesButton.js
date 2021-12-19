import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { onPressSelectFood } from "../../func/func_on_press";

export const YesButton = ({ nav, name }) => {
  return (
    <>
      <TouchableOpacity
        style={styles.buttonYes}
        onPress={() => onPressSelectFood(nav, name)}
      >
        <Text style={styles.buttonText}>응!</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonYes: {
    margin: "10%",
    backgroundColor: "orange",
    alignItems: "center",
    height: 55,
    width: 100,
    justifyContent: "center",
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontFamily: "BlackHanSans_400Regular",
  },
});
