import React from "react";
import { Dimensions } from "react-native";
import { Calendar } from "react-native-calendars";
import { getTokenFromStorage } from "../../func/func_data_communication";
import { getDataFromServer } from "../../func/func_data_communication";
import { ip } from "../../data/data";
import { screenWidth } from "react-native-calendars/src/expandableCalendar/commons";


export const ThisMonthCalendar = ({
  setDay,
  setMonth,
  month,
  setDate,
  SignInExpired,
}) => {
  let foodNumber = {};
  month.map((day) => {
    foodNumber[day.date] =
      foodNumber[day.date] == undefined ? 1 : foodNumber[day.date] + 1;
  });

  let markedDates = {};
  const dates = Object.keys(foodNumber);
  dates.map((day) => {
    if (foodNumber[day] == 1)
      markedDates[day] = {
        selected: true,
        marked: true,
        selectedColor: "#FF684C",
      };
    else if (foodNumber[day] == 2)
      markedDates[day] = {
        selected: true,
        marked: true,
        selectedColor: "#FFBB00",
      };
    else if (foodNumber[day] > 2 && foodNumber[day] < 7)
      markedDates[day] = {
        selected: true,
        marked: true,
        selectedColor: "#7DBD38",
      };
    else if (foodNumber[day] >= 7)
      markedDates[day] = {
        selected: true,
        marked: true,
        selectedColor: "#FF684C",
      };
  });

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get("window").height;


  return (
    <Calendar
      onDayPress={(date) => {
        const day = date.dateString;
        const dayFood = month
          .map((object) => {
            if (object.date == day) return object.foodName;
          })
          .filter((ele) => ele != null);
        setDay(dayFood);
        setDate(day);
      }}
      onMonthChange={(date) => {
        const okFunc = (value) => {
          const firstDay = date.dateString.substring(0, 8) + "01";

          const params = {
            params: { month: firstDay },
            headers: {
              "X-AUTH-TOKEN": value,
            },
          };

          const resFunc = (data) => {
            setMonth(data.data.monthFoodData);
            const dayFood = data.data.monthFoodData
              .map((object) => {
                if (object.date.substring(8) == "01") return object.foodName;
              })
              .filter((ele) => ele != null);
            setDay(dayFood);
            setDate(firstDay);
          };

          getDataFromServer(`${ip}/calendar/food`, params, resFunc, 0, SignInExpired);
        };

        getTokenFromStorage(okFunc, 0, 0);
      }}
      markingType={"multi-dot"}
      markedDates={markedDates}
      style={{ width : screenWidth, height : screenHeight, borderWidth: 0, borderColor: "gray" }}
      theme={{
        textMonthFontFamily: "BlackHanSans_400Regular",
        textDayFontFamily: "BlackHanSans_400Regular",
        textDayHeaderFontFamily: "BlackHanSans_400Regular",
        textDayFontSize: 18,
        textMonthFontSize: 20,
        textDayHeaderFontSize: 12,
      }}
    />
  );
};
