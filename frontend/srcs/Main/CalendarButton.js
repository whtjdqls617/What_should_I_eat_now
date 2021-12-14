import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { getdataFromStorage } from "../func/func_data_communication";
import { makeDateString } from "../func/func_calculate_date";

export const CalendarButton = ({ navigation, icon }) => {
  const onPress = () => {
    const dateString = makeDateString().substring(1);
    const keyName = "@" + dateString.substring(0, 7);

    const existenceFunc = (keyName, data) => {
      const object = {
        data: data,
        today: dateString,
      };
      navigation.navigate("CustomCalendar", object);
    };

    const absenceFunc = (keyName) => {
      const object = {
        data: "",
        today: dateString,
      };
      navigation.navigate("CustomCalendar", object);
    };

    getdataFromStorage(keyName, existenceFunc, absenceFunc, 0);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={icon}
        resizeMode="contain"
        style={styles.img_calendar}
      ></Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  img_calendar: {
    width: 88,
    height: 88,
  },
});
