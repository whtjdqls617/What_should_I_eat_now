import React from "react";
import { Alert } from "react-native";
import { Calendar } from "react-native-calendars";

// prop으로 month, setDay를 받아야한다

export const ThisMonthCalendar = ({ setDay }) => {


	const vacation = { key: "vacation", color: "red" };
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
		<Calendar
		onDayPress={(date) => {
			setDay(["도넛", "삼겹살", "크로넛"]);
			/*
			그날 먹은 내역 = 함수(그달의 먹은 내역, 그날);
			setDay(그날 먹은 내역);
			*/
		}
	}
		onMonthChange={(date) => {

			/*
			axios.get -> 그달의 먹은 내역
			.then
				setMonth(서버에서 받아온 그달의 먹은 내역);
			.error
				Alert.alert("Sorry");
			*/
			// setMonth(date.month);
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
		style={{ borderWidth: 1, borderColor: 'gray' }}
	/>
	);
};