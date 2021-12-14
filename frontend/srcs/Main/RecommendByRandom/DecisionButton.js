import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { makeDateString } from "../../func/func_calculate_date";
import {
  getdataFromStorage,
  setDataToStorage,
} from "../../func/func_data_communication";

export const DecisionButton = ({ navigation, foodName }) => {
  const onPress = () => {
    const keyName = makeDateString();
    const goToMain = () => navigation.navigate("Main");
    const existenceFunc = (data) => {
      let newData = JSON.parse(data);
      newData.push(foodName);
      setDataToStorage(keyName, newData, goToMain);
    };
    const absenceFunc = (ele) => setDataToStorage(ele, [foodName], goToMain);
    getdataFromStorage(keyName, existenceFunc, absenceFunc, 0);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
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
