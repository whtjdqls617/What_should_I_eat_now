import axios from "axios";
import React, { useState } from "react";
import { Text, TouchableOpacity, Button, StyleSheet, View } from "react-native";
import { SearchBar } from "../../SignUp/SearchBar";
import { SelectedFoodList } from "../../SignUp/SelectedFoodList";
import { HomeButton } from "../HomeButton";
import {
	ObjectsInArrayToArray,
	arrayToObjectsInArray,
} from "../../func/func_change_var_type";
import {
	onPressInLikeSearchPreview,
	onPressInDisLikeSearchPreview,
} from "../../func/func_on_press";
import { getTokenFromStorage, putDataToServer } from "../../func/func_data_communication";
import { ip } from "../../data/data";

export const FoodList = ({ navigation, route }) => {
	//props로 음식 리스트 받아온 상태

	const [signal, setSignal] = useState(0);
	const [likeFoodList, setLikeFoodList] = useState(route.params.data.likeFoodList);
	const [disLikeFoodList, setDisLikeFoodList] = useState(route.params.data.dislikeFoodList);

	const onPressInLSP = (item) => {
		onPressInLikeSearchPreview(
			item,
			likeFoodList,
			disLikeFoodList,
			setLikeFoodList
		);
	};

	const onPressInDLSP = (item) => {
		onPressInDisLikeSearchPreview(
			item,
			likeFoodList,
			disLikeFoodList,
			setDisLikeFoodList
		);
	};

	const [onPress, foodList, setFoodList] =
		signal == 0
			? [onPressInLSP, likeFoodList, setLikeFoodList]
			: [onPressInDLSP, disLikeFoodList, setDisLikeFoodList];

	return (
		<>
			<HomeButton navigation={navigation} />
			<View style={styles.container}>
				<View style={styles.titlealign}>
					<TouchableOpacity style={{ flex: 1 }} onPress={() => setSignal(0)}>
						<Text
							style={{
								fontSize: 70,
								textAlign: "center",
								fontFamily: "BlackHanSans_400Regular",
								color: signal == 0 ? "black" : "gray",
								opacity: signal == 0 ? 1 : 0.3,
							}}
						>
							좋아
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ flex: 1 }} onPress={() => setSignal(1)}>
						<Text
							style={{
								fontSize: 70,
								textAlign: "center",
								fontFamily: "BlackHanSans_400Regular",
								color: signal != 0 ? "black" : "gray",
								opacity: signal != 0 ? 1 : 0.3,
							}}
						>
							싫어
						</Text>
					</TouchableOpacity>
				</View>
				<SearchBar onPress={onPress} />
				<SelectedFoodList foodList={foodList} setFoodList={setFoodList} />
				<View style={styles.buttonalign}>
					<TouchableOpacity
						style={styles.buttonstyle}
						// onPress={() => {

						// 	const okFunc = () => {
								
						// 		putDataToServer(`${ip}/user/info/food`, , );
						// 	};


						// 	getTokenFromStorage(okFunc, 0, 0);
						// 	navigation.navigate("Setting");
						// }}
					>
						<Text style={styles.textstyle}>적용</Text>
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: "5%",
	},
	titlealign: {
		flex: 0.2,
		flexDirection: "row",
		marginTop: "13%",
		alignItems: "center",
	},
	textstyle: {
		fontSize: 20,
		color: "white",
		fontFamily: "BlackHanSans_400Regular",
		textAlign: "center",
	},
	buttonstyle: {
		height: 55,
		width: 110,
		backgroundColor: "orange",
		borderRadius: 40,
		justifyContent: "center",
	},
	buttonalign: {
		flex: 0.3,
	},
});

//회원정보 클릭하면 -> Get (이메일, 닉네임)
//이메일
//닉네임, 닉네임 수정 -> 새 닉네임 Put;
//비밀번호 변경
//현재 비밀번호 입력
//새 비밀번호
//새 비밀번호 확인
//확인 -> Put;

//음식리스트 클릭하면 -> Get (좋아하는 음식, 싫어하는 음식)
//적용 -> Put { 좋아하는음식: {추가: ["", ""], 삭제: [""]}, 싫어하는음식: {}}
