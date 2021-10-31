import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { postData } from "../func/func_data_communication";
import { ip } from "../data/data";

export const NextButtoninAskDisLike = ({ userinfo, likeFoodList, disLikeFoodList }) => {

	const makePostData = (userinfo, likeFoodList, disLikeFoodList) => {

		let likeArr = likeFoodList.map((ele) => ele.food);
		let dislikeArr = disLikeFoodList.length == 0 ? [] : disLikeFoodList.map((ele) => ele.food);
		let postData = {
			email: userinfo.email,
			nickName: userinfo.nickName,
			password: userinfo.password,
			likeFoodList: likeArr.join(),
			disLikeFoodList: dislikeArr.join(),
		}

		return postData;
	};

	const onPress = () => {

		const data = makePostData(userinfo, likeFoodList, disLikeFoodList);
		
		postData(`${ip}/user/signup`, data);
		navigation.navigate("SignIn");
	};

	return (
		<TouchableOpacity
			style={styles.buttonstyle}
			onPress={onPress}
		>
			<Text style={styles.buttonText}>다음</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	buttonstyle: {
		margin: "10%",
		backgroundColor: "orange",
		alignItems: "center",
		height: 55,
		width: 100,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
	},
	buttonText: {
		fontSize: 20,
		color: "white",
		fontFamily: "BlackHanSans_400Regular",
	}
});