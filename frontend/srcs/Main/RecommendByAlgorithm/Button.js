import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";
import { ip } from "../../data/data";
import { getTokenFromStorage, getDataFromServer } from "../../func/func_data_communication";

export const NextButton = ({ SignInExpired, updateIndex, answer, index, setData, navigation }) => {

	const answers = {
		answer1: answer[0][1] == undefined ? "" : answer[0][1],
		answer2: answer[1][1] == undefined ? "" : answer[1][1],
		answer3: answer[2][1] == undefined ? "" : answer[2][1],
		question1: answer[0][0],
		question2: answer[1][0],
		question3: answer[2][0],
	};

	const okFunc = (value) => {

		const params = {
			params: answers,
			headers: {
				"X-AUTH-TOKEN": value,
			}
		};

		const okFunc2 = (food_list) => {
			setData(food_list);
		};


		getDataFromServer(`${ip}/recommend-food/`, params, okFunc2, 0, SignInExpired);
	};

	const errFunc = () => {
		Alert.alert("서버와 통신이 끊어졌습니다.");
		navigation.navigate("Main");
	};

	const nextPressEvent = () => {
		if (index == 2)
			getTokenFromStorage(okFunc, 0, errFunc);
		else updateIndex(true);
	};

	const prevPressEvent = () => {
		if (index > 0) updateIndex(false);
	};

	return (
		<>
			<View style={styles.buttonalign}>
				<TouchableOpacity style={styles.buttonstyle} onPress={prevPressEvent}>
					<Text style={styles.textstyle}>이전</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonstyle} onPress={nextPressEvent}>
					<Text style={styles.textstyle}>다음</Text>
				</TouchableOpacity>
			</View>
		</>
	);
};

// 응 클릭시 postData, 메인페이지로 화면 이동
// export const YesButton

const styles = StyleSheet.create({
	buttonalign: {
		flexDirection: "row",
		flex: 0.4,
		margin: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonstyle: {
		margin: "25%",
		backgroundColor: "orange",
		alignItems: "center",
		height: 55,
		width: 100,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
	},
	textstyle: {
		fontSize: 20,
		color: "white",
		fontFamily: "BlackHanSans_400Regular",
	},
});
