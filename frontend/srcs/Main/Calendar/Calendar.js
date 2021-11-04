import React, { useState } from "react";
import {
	Text,
	View,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform
} from "react-native";
import { AddEatenFood } from "./AddEatenFood";
import { ApplyButton } from "./ApplyButton";
import { CancelButton } from "./CancelButton";
import { EatenFoods } from "./EatenFoods";
import { ThisMonthCalendar } from "./ThisMonthCalendar";

export const CustomCalendar = ({ navigation }) => {
	const now = new Date();
	const initialMonth = now.getMonth();
	// const [month, setMonth] = useState([서버에서 전송받은 이번달 먹은 내역 초기값]);
	const [day, setDay] = useState(["소막창구이", "소막창구이", "소막창구이"]);
	const [eatingHistory, setEatingHistory] = useState([
		{
			날짜: "20211021",
			추가된음식: ["소막창구이", "소막창구이", "엽기떡볶이"],
			삭제된음식: ["라면"],
		},
		{},
	]);

	//state임 적용 버튼을 누르면 서버에 이게 날라감 = [{날짜: 2021-10-21, 먹은 음식: [소막창구이, 소막창구이, 엽기떡볶이]}, {날짜: 2022-10-21, 먹은 음식: [소막창구이]}]

	//{ {날짜: '10/21', 삭제된 음식: ['라면', '김밥'], 추가된 음식: [치킨]}}
	const onXPress = (index) => {
		//day에서 해당 음식이 지워져야 함
		const array = day.slice();
		array.splice(index, 1);
		setDay(array);
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "heigth"}
		>
			<View style={styles.top}>
				<ThisMonthCalendar setDay={setDay} />
			</View>
			<View style={styles.bottom}>
				<ScrollView horizontal={true}>
					<EatenFoods
						number={day.length}
						day={day}
						onXPress={onXPress} />
					<AddEatenFood
						day={day}
						setDay={setDay}
						eatingHistory={eatingHistory}
						setEatingHistory={setEatingHistory}
					/>
				</ScrollView>
			</View>
			<View style={styles.button}>
				<ApplyButton />
				<CancelButton navigation={navigation} />
			</View>
		</KeyboardAvoidingView>
	);
};

//취소 버튼 누르면 메인으로 감
const styles = StyleSheet.create({
	top: {
		// flex: 2,
		marginTop: "35%",
	},
	bottom: {
		// flex: 1,
		marginTop: "10%",
	},
	button: {
		// flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: '5%'
	},
	button_1: {
		margin: "8%",
		backgroundColor: "orange",
		alignItems: "center",
		height: 55,
		width: 100,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
	},
	button_2: {
		margin: "8%",
		backgroundColor: "gray",
		alignItems: "center",
		height: 55,
		width: 100,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
	},
	imagerow: {
		flexDirection: "row",
	},
	imagestyle: {
		borderRadius: 130,
		borderWidth: 3,
		height: 100,
		width: 100,
	},
	textrow: {
		flexDirection: "row",
		// justifyContent : 'space-around',
		// alignItems : 'center'
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
	buttontextstyle: {
		fontSize: 20,
		color: "white",
		fontFamily: "BlackHanSans_400Regular",
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
