import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  getTokenFromStorage,
  postDataToServer,
} from "../../func/func_data_communication";
import { ip } from "../../data/data";

export const DecisionButton = ({ navigation, SignInExpired, foodName }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        const okFunc = (value) => {
          postDataToServer(
            `${ip}/recommend-food/select`,
            foodName,
            value,
            0,
            SignInExpired
          );
          navigation.navigate("Main");
        };
        getTokenFromStorage(okFunc, 0, 0);
      }}
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
