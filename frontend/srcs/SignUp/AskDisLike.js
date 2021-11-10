import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { SearchBar } from "./SearchBar";
import { SelectedFoodList } from "./SelectedFoodList";
import { NextButtoninAskDisLike } from "./NextButtoninAskDisLike";
import { PrevButtoninAskDisLike } from "./PrevButtoninAskDisLike";
import { onPressInDisLikeSearchPreview } from "../func/func_on_press";

export const AskDisLike = ({ navigation, route }) => {
	const userinfo = route.params.userinfo;
	const likeFoodList = route.params.likeFoodList;
	const [disLikeFoodList, setDisLikeFoodList] = useState(route.params.disLikeFoodList);

	const onPressInDLSP = (item) => {
		onPressInDisLikeSearchPreview(item, likeFoodList, disLikeFoodList, setDisLikeFoodList);
	}

	const navigationParams = {
		userinfo: userinfo,
		disLikeFoodList: disLikeFoodList,
		likeFoodList: likeFoodList,
	};

	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>싫어하는 음식이 뭐야?</Text>
			<SearchBar onPress={onPressInDLSP} />
			<SelectedFoodList
				foodList={disLikeFoodList}
				setFoodList={setDisLikeFoodList}
			/>
			<View style={styles.buttonalign}>
				<PrevButtoninAskDisLike
					navigation={navigation}
					params={navigationParams}
				/>
				<NextButtoninAskDisLike
					userinfo={userinfo}
					likeFoodList={likeFoodList}
					disLikeFoodList={disLikeFoodList}
					navigation={navigation}
				/>
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
		marginRight: "10%",
		fontSize: 35,
		fontFamily: "BlackHanSans_400Regular",
	},
	buttonalign: {
		marginBottom: '10%',
		flexDirection: "row",
		margin: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	seachbar: {
		// position: "relative",
		alignItems: "center",
		marginTop: "4%",
	},
});
