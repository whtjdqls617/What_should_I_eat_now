import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  getDataFromStorage,
  setDataToStorage,
} from "../../func/func_data_communication";
import { onPressSelectFood } from "../../func/func_on_press";

export const DecisionButton = ({ navigation, foodName }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => onPressSelectFood(navigation, foodName)}
    >
      <Text style={styles.buttonText}>결정</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
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
