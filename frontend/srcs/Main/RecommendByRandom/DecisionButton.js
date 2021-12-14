import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { makeDateString } from "../../func/func_calculate_date";
import {
  getdataFromStorage,
  setDataToStorage,
} from "../../func/func_data_communication";

export const DecisionButton = ({ navigation, foodName }) => {
  const onPress = () => {
    const firstKeyName = makeDateString();
    const secondKeyName = firstKeyName.substring(0, 8);
    const goToMain = () => navigation.navigate("Main");

    const existenceFunc = (keyName, data) => {
      let newData = JSON.parse(data);
      if (keyName.length > 8) {
        newData.push(foodName);
        setDataToStorage(keyName, newData, 0);
      } else {
        const key = firstKeyName.substring(1);
        if (newData[key] === undefined) newData[key] = [];
        newData[key].push(foodName);
        setDataToStorage(keyName, newData, goToMain);
      }
    };

    const absenceFunc = (ele) => {
      const key = firstKeyName.substring(1);
      let object = {};
      object[key] = [foodName];
      ele.length > 8
        ? setDataToStorage(ele, [foodName], 0)
        : setDataToStorage(ele, object, goToMain);
    };

    getdataFromStorage(firstKeyName, existenceFunc, absenceFunc, 0);
    getdataFromStorage(secondKeyName, existenceFunc, absenceFunc, 0);
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
