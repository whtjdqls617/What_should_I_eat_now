import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import {
  getDataFromServer,
  getTokenFromStorage,
} from "../func/func_data_communication";
import { ip } from "../data/data";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CalendarButton = ({ navigation, icon, SignInExpired }) => {

  const onPressCalendarButton = () => {

    const okFunc = (value) => {
      const now = new Date();
      const year = now.getFullYear().toString();
      const month = (now.getMonth() + 1).toString().padStart(2, "0");
      const day = "01";
      const date = year + "-" + month + "-" + day;
      const today =
        year + "-" + month + "-" + now.getDate().toString().padStart(2, "0");

      const params = {
        params: { month: date },
        headers: {
          "X-AUTH-TOKEN": value,
        },
      };

      const resFunc = (data) => {
        const object = {
          data: data,
          today: today,
          SignInExpired: SignInExpired,
        };
        navigation.navigate("CustomCalendar", object);
      };

      getDataFromServer(
        `${ip}/calendar/food`,
        params,
        resFunc,
        0,
        SignInExpired
      );
    };

    getTokenFromStorage(okFunc, 0, 0);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPressCalendarButton}
    >
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
	alignItems: "center" },
  img_calendar: {
    width: 88,
    height: 88,
  },
});
