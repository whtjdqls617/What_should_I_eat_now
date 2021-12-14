import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export const SettingButton = ({ navigation, icon }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("FoodList")}
    >
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
