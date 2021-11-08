import React from "react";
import { Alert } from "react-native";
import { Calendar } from "react-native-calendars";
import { getTokenFromStorage } from "../../func/func_data_communication";
import { getDataFromServer } from "../../func/func_data_communication";
import { ip } from "../../data/data";

export const ThisMonthCalendar = ({ setDay, setMonth, month, setDate }) => {

	let foodNumber = {};
  	month.map(day => {
		foodNumber[day.date] = foodNumber[day.date] == undefined ? 1 : foodNumber[day.date] + 1;
	  });

	let markedDates = {};
	const dates = Object.keys(foodNumber);
	dates.map(day => {

		switch (foodNumber[day]) {
			case 1:
				markedDates[day] = { selected: true, marked: true, selectedColor: "red" };
				break;
			case 2:
				markedDates[day] = { selected: true, marked: true, selectedColor: "orange" };
				break;
			case 3:
				markedDates[day] = { selected: true, marked: true, selectedColor: "green" };
				break;
			default:
				break;
		}
	})


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
            const dayFood = month
              .map((object) => {
                if (object.date.substring(8) == "01") return object.foodName;
              })
              .filter((ele) => ele != null);
            setDay(dayFood);
          };

          getDataFromServer(`${ip}/calendar/food`, params, resFunc, 0, 0);
        };

        getTokenFromStorage(okFunc, 0, 0);
      }}
      markingType={"multi-dot"}
      markedDates={markedDates}
      style={{ borderWidth: 1, borderColor: "gray" }}
      theme={{
        textMonthFontFamily: "BlackHanSans_400Regular",
        textDayFontSize: 100,
        backgroundColor: "red",
        calendarBackground: "red",
      }}
    />
  );
};
