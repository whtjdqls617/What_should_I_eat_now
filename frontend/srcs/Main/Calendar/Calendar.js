import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { AddEatenFood } from "./AddEatenFood";
import { EatenFoods } from "./EatenFoods";
import { ThisMonthCalendar } from "./ThisMonthCalendar";
import { ip } from "../../data/data";
import { getTokenFromStorage } from "../../func/func_data_communication";
import { deleteDataFromServer } from "../../func/func_data_communication";
import { HomeButton } from "../HomeButton";
import { StatusMessage } from "./StatusMessage";
import { DateText } from "./DateText";
import { LogBox } from "react-native";

export const CustomCalendar = ({ navigation, route }) => {
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  const monthFoodData = route.params.data.data.monthFoodData;
  const today = route.params.today;

  const initialDayFood = monthFoodData
    .map((object) => {
      if (object.date == today) return object.foodName;
    })
    .filter((ele) => ele != null);

  const [day, setDay] = useState(initialDayFood);
  const [date, setDate] = useState(today);
  const [month, setMonth] = useState(monthFoodData);

  const onXPress = (index) => {
    const array = day.slice();
    const deletedFood = array.splice(index, 1)[0];
    setDay(array);
    for (let i = 0; i < month.length; i++) {
      if (month[i].date == date && month[i].foodName == deletedFood) {
        let copyMonth = month.slice();
        copyMonth.splice(i, 1);
        setMonth(copyMonth);
        break;
      }
    }

    const okFunc = (value) => {
      const name = deletedFood;

      const params = {
        headers: {
          "X-AUTH-TOKEN": value,
        },
      };

      deleteDataFromServer(`${ip}/calendar/food/${name}/${date}`, params, 0, 0);
    };

    getTokenFromStorage(okFunc, 0, 0);
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
        <View
          style={{ justifyContent: "center", flex: 0.15, marginTop: "20%" }}
        >
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
