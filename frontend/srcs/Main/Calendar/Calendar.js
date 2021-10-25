import React, { useState } from "react";
import { Text, View, Alert } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

export const CustomCalendar = () => {
  const now = new Date();
  const initialMonth = now.getMonth();
  const [month, setMonth] = useState(initialMonth + 1);

  const vacation = { key: "vacation", color: "red"  };
  const massage = { key: "massage", color: "blue" };
  const workout = { key: "workout", color: "green" };
  /* 해당 달에 먹은 내역을 형식에 맞게 정리해줘야 함 */
  const markedDates = {
    "2021-10-16": { selected: true, marked: true, selectedColor: "blue" },
    "2021-10-17": { marked: true },
    "2021-10-18": { marked: true, dotColor: "red", activeOpacity: 0 },
    "2021-10-19": { disabled: true, disableTouchEvent: true },
  };

  return (
    <View style={{ justifyContent: "center", marginTop: 100 }}>
      <Calendar
        onDayPress={(date) => Alert.alert(`${date.dateString} is selected!`)}
        onMonthChange={(date) => {

          /*
          axios.get
          .then
            setMonth(date.month);
          .error
            Alert.alert("Sorry");
          */
         setMonth(date.month);
        }}
        markingType={"multi-dot"}
        markedDates={{
          "2021-10-25": {
            dots: [vacation, massage, workout],
            selected: true,
            // selectedColor: "red",
          },
          "2021-10-26": { dots: [massage, workout], disabled: true },
        }}
      />
    </View>
  );
};


/*
필요한 정보

- 음식을 먹은 날짜(시간 포함)
- 먹은 음식 이름

- 달이 바뀔 때마다 서버에 해당 달의 먹은 내역 받아오기
- 맨 처음엔 캘린더 페이지 들어오기 전에 미리 그 달의 먹은 내역 서버에서 받아오기
*/

/*

하루에 먹은 내역

- 가로로 스크롤
*/