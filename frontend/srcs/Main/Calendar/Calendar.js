import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { AddEatenFood } from "./AddEatenFood";
import { EatenFoods } from "./EatenFoods";
import { ThisMonthCalendar } from "./ThisMonthCalendar";
import { HomeButton } from "../HomeButton";
import { StatusMessage } from "./StatusMessage";
import { DateText } from "./DateText";
import { LogBox } from "react-native";
import {
  getDataFromStorage,
  setDataToStorage,
} from "../../func/func_data_communication";

export const CustomCalendar = ({ navigation, route }) => {
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  const monthFoodData = route.params.data;
  const today = route.params.today;

  let initialDayFood =
    monthFoodData[today] === undefined ? [] : monthFoodData[today];

  const [day, setDay] = useState(initialDayFood);
  const [date, setDate] = useState(today);
  const [month, setMonth] = useState(monthFoodData);

  const onXPress = (index) => {
    const newDay = day.slice();
    newDay.splice(index, 1);
    let newMonth = JSON.parse(JSON.stringify(month));
    newMonth[date] = newDay;
    setMonth(newMonth);
    setDay(newDay);

    const firstKeyName = "@" + date;
    const secondKeyName = firstKeyName.substring(0, 8);

    const existenceFunc = (keyName, data) => {
      if (keyName.length > 8) {
        setDataToStorage(keyName, newDay, 0);
      } else {
        const key = firstKeyName.substring(1);
        data[key] = newDay;
        setDataToStorage(keyName, data, 0);
      }
    };

    getDataFromStorage(firstKeyName, existenceFunc, 0, 0);
    getDataFromStorage(secondKeyName, existenceFunc, 0, 0);
  };

  return (
    <>
      <HomeButton navigation={navigation} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.top}>
          <ThisMonthCalendar
            setDay={setDay}
            month={month}
            setMonth={setMonth}
            setDate={setDate}
          />
        </View>
        <View style={styles.dateText}>
          <DateText date={date} />
        </View>
        <View style={styles.bottom}>
          <ScrollView
            horizontal={true}
            key={Number(date.substring(date.length - 2))}
          >
            <EatenFoods number={day.length} day={day} onXPress={onXPress} />
            <AddEatenFood
              day={day}
              setDay={setDay}
              month={month}
              setMonth={setMonth}
              date={date}
            />
          </ScrollView>
        </View>
        <View style={{ justifyContent: "center", flex: 0.2 }}>
          <StatusMessage day={day} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer2: {
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    flex: 0.7,
  },
  bottom: {
    flex: 0.32,
    justifyContent: "center",
  },
  dateText: { justifyContent: "center", flex: 0.15, marginTop: "20%" },
  textstyle: {
    textAlign: "center",
  },
  xbuttonrow: {
    flexDirection: "row",
  },
  xbuttonstyles: {
    flex: 1,
  },
  date: {
    fontSize: 23,
    color: "black",
    fontFamily: "BlackHanSans_400Regular",
    textAlign: "center",
  },
});
/*
필요한 정보

- 음식을 먹은 날짜(시간 포함)
- 먹은 음식 이름

- 달이 바뀔 때마다 서버에 해당 달의 먹은 내역 받아오기
- 맨 처음엔 캘린더 페이지 들어오기 전에 미리 그 달의 먹은 내역 서버에서 받아오기
*/

/*

하루
에 먹은 내역

- 가로로 스크롤
*/
