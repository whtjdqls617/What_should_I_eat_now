import React, { useState } from "react";
import { Text, View, Alert, ScrollView, Image, StyleSheet, TouchableOpacity, Button, Fl } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { EatenFood } from "./EatenFood";
import { food_image } from "../../data/data";
import { AddEatenFood } from "./AddEatenFood";
import { EatenFoods } from "./EatenFoods";
import { ThisMonthCalendar } from "./ThisMonthCalendar";


export const CustomCalendar = () => {
	const now = new Date();
	const initialMonth = now.getMonth();
	// const [month, setMonth] = useState([서버에서 전송받은 이번달 먹은 내역 초기값]);
	const [day, setDay] = useState(["소막창구이", "소막창구이", "소막창구이"]);
	const [eatingHistory, setEatingHistory] = useState([{날짜: "20211021", 먹은음식: ["소막창구이", "소막창구이", "엽기떡볶이"]}]);
	//state임 적용 버튼을 누르면 서버에 이게 날라감 = [{날짜: 2021-10-21, 먹은 음식: [소막창구이, 소막창구이, 엽기떡볶이]}, {날짜: 2022-10-21, 먹은 음식: [소막창구이]}]

	
	
	return (
		<>
			<View style={styles.top}>
				<ThisMonthCalendar />
			</View>
			<View style={styles.bottom}>
				<ScrollView horizontal={true}>
					<EatenFoods number={day.length} foods={day}/>
					<AddEatenFood day={day} setDay={setDay} eatingHistory={eatingHistory} setEatingHistory={setEatingHistory}/>
				</ScrollView>
			</View>
			<View style={styles.button}>
				<TouchableOpacity>
					<Text>적용</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text>취소</Text>
				</TouchableOpacity>
			</View>
		</>
	);
};

//취소 버튼 누르면 메인으로 감
const styles = StyleSheet.create({
	top: {
		flex: 2,
		marginTop: '25%',
	},
	bottom: {
		flex: 1,
		// alignItems: 'center',
	},
	button: {
		flex: 1,
		flexDirection: 'row',
		// justifyContent : 'space-around',
		//   alignItems : 'center'
	},
	imagerow: {
		flexDirection: 'row',
		// 	justifyContent : 'space-around',
		//   alignItems : 'center'
	},
	imagestyle: {
		// margin : '10%',
    borderRadius : 130,
    borderWidth : 3,
		height: 100,
		width: 100,
	},
	textrow: {
		flexDirection: 'row',
		// justifyContent : 'space-around',
		// alignItems : 'center'
	},
	textstyle: {
		textAlign: 'center'
	},
	xbuttonrow: {
		flexDirection: 'row',
	},
	xbuttonstyles: {
		flex: 1
	},
})




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