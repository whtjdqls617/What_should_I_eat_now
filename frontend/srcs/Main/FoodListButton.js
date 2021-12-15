import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { getdataFromStorage } from "../func/func_data_communication";

export const FoodListButton = ({ navigation, icon }) => {
  const onPress = () => {
    const keyName = "@food_list";

    const existenceFunc = (keyName, data) => {
      navigation.navigate("FoodList", data);
    };

    const absenceFunc = (keyName) => {
      const object = {
        likeFood: [],
        disLikeFood: [],
      };
      navigation.navigate("FoodList", object);
    };

    getdataFromStorage(keyName, existenceFunc, absenceFunc, 0);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={icon}
        resizeMode="contain"
        style={styles.img_setting}
      ></Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  img_setting: {
    width: 88,
    height: 88,
  },
});
