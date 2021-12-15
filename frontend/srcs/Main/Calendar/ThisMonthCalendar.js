import React from "react";
import { Dimensions } from "react-native";
import { Calendar } from "react-native-calendars";
import { getdataFromStorage } from "../../func/func_data_communication";

export const ThisMonthCalendar = ({ setDay, setMonth, month, setDate }) => {
  let foodNumber = {};
  for (let key in month) {
    foodNumber[key] = month[key].length;
  }

  let markedDates = {};
  const dates = Object.keys(foodNumber);
  dates.map((day) => {
    const newDay = day.replace(/_/g, "-");
    if (foodNumber[day] == 1) {
      markedDates[newDay] = {
        selected: true,
        marked: true,
        selectedColor: "#FF684C",
      };
    } else if (foodNumber[day] == 2)
      markedDates[newDay] = {
        selected: true,
        marked: true,
        selectedColor: "#FFBB00",
      };
    else if (foodNumber[day] > 2 && foodNumber[day] < 7)
      markedDates[newDay] = {
        selected: true,
        marked: true,
        selectedColor: "#7DBD38",
      };
    else if (foodNumber[day] >= 7)
      markedDates[newDay] = {
        selected: true,
        marked: true,
        selectedColor: "#FF684C",
      };
  });

  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  return (
    <Calendar
      onDayPress={(date) => {
        const day = date.dateString.replace(/-/g, "_");
        let newMonth = JSON.parse(JSON.stringify(month));
        if (newMonth[day] === undefined) newMonth[day] = [];
        setMonth(month);
        const dayFood = newMonth[day];
        setDay(dayFood);
        setDate(day);
      }}
      onMonthChange={(date) => {
        const keyName = "@" + date.dateString.substring(0, 7).replace("-", "_");
        const firstDay =
          date.dateString.substring(0, 8).replace(/-/g, "_") + "01";
        const existenceFunc = (keyName, data) => {
          console.log("month: ", data);
          setMonth(data);
          if (month[firstDay] === undefined) month[firstDay] = [];
          setDate(firstDay);
          setDay(month[firstDay]);
        };

        const absenceFunc = (keyName) => {
          setMonth({});
          setDate(firstDay);
          setDay([]);
        };

        getdataFromStorage(keyName, existenceFunc, absenceFunc, 0);
      }}
      markingType={"multi-dot"}
      markedDates={markedDates}
      style={{
        width: screenWidth,
        height: screenHeight,
        borderWidth: 0,
        borderColor: "gray",
      }}
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
