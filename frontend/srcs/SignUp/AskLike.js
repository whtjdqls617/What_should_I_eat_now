import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { SearchBar } from "./SearchBar";
import { SelectedFoodList } from "./SelectedFoodList";
import { NextButtoninAskLike } from "./NextButtoninAskLike";
import { onPressInLikeSearchPreview } from "../func/func_on_press";

// import data 테이블 전체

export const AskLike = ({ navigation, route }) => {

	const [likeFoodList, setLikeFoodList] = useState(route.params.likeFoodList);
	const disLikeFoodList = route.params.disLikeFoodList;

	const onPressInLSP = (item) => {
		onPressInLikeSearchPreview(item, likeFoodList, disLikeFoodList, setLikeFoodList);
	}

	const navigationParams = {
		userinfo: route.params.userinfo,
		likeFoodList: likeFoodList,
		disLikeFoodList: disLikeFoodList,
	};

	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>좋아하는 음식이 뭐야?</Text>
			<SearchBar onPress={onPressInLSP} />
			<SelectedFoodList foodList={likeFoodList} setFoodList={setLikeFoodList} />
			<View style={styles.buttonalign}>
				<NextButtoninAskLike navigation={navigation} params={navigationParams} />
			</View>
		</View>
	);
};


const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: "25%",
		alignItems: 'center'
	},
	headerText: {
		fontSize: 35,
		marginRight: "10%",
		fontFamily: "BlackHanSans_400Regular",
	},
	buttonalign: {
		marginBottom: '20%',
		margin: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonstyle: {
		backgroundColor: "orange",
		alignItems: "center",
		height: 55,
		width: 100,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
	},
	seachbar: {
		position: "relative",
		alignItems: "center",
		marginTop: "4%",
	},
});
