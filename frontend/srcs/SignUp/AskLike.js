import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { SearchBar } from "./SearchBar";
import { SelectedFoodList } from "./SelectedFoodList";
import { ObjectsInArrayToArray, arrayToObjectsInArray } from "../func/func_change_var_type";

// import data 테이블 전체

export const AskLike = ({ navigation, route }) => {
	const userinfo = route.params.userinfo;
	const disLikeFoodList = route.params.disLikeFoodList;
	console.log("userinfo: ", userinfo);
	const [likeFoodList, setLikeFoodList] = useState([]);

	const onPress = (item) => {
		const array = ObjectsInArrayToArray(likeFoodList);
		if (!array.includes(item.food)) {
			array.push(item.food);
			const newFoodList = arrayToObjectsInArray(array);
			setLikeFoodList(newFoodList);
		}
	};

	return (
		<View style={styles.container}>
			<Text
				style={{
					fontSize: 35,
					marginRight: "10%",
					fontFamily: "BlackHanSans_400Regular",
				}}
			>
				좋아하는 음식이 뭐야?
			</Text>
			<SearchBar onPress={onPress} />
			<SelectedFoodList foodList={likeFoodList} setFoodList={setLikeFoodList} />
			<View style={styles.buttonalign}>
				<TouchableOpacity
					style={{
						backgroundColor: "orange",
						alignItems: "center",
						height: 55,
						width: 100,
						alignItems: "center",
						justifyContent: "center",
						borderRadius: 30,
					}}
					onPress={() =>
						navigation.navigate("AskDisLike", {
							userinfo: userinfo,
							likeFoodList: likeFoodList,
							disLikeFoodList: disLikeFoodList
						})
					}
				>
					<Text
						style={{
							fontSize: 20,
							color: "white",
							fontFamily: "BlackHanSans_400Regular",
						}}
					>
						다음
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
// navigation.navigate("AskLike", {객체: 음식 데이터, 페이지의 이름, true})

/*
1. 좋아하는 음식이 뭐야?
	- <Text>페이지 이름
	- 자동완성칸
		- 자동완성에 뜨는 음식들의 데이터를 어플 처음 시작할 때(App.js) 받아옴
	- 선택한 목록
		- x 버튼: 클릭하면 해당 음식 목록에서 삭제됨
	- <Button>: 다음 페이지로 넘어감
*/

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: "25%",
		alignItems: 'center'
	},
	buttonalign: {
		marginBottom: '20%',
		margin: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	seachbar: {
		position: "relative",
		alignItems: "center",
		marginTop: "4%",
	},
});
