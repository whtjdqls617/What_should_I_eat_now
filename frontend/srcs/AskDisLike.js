import React, { useState } from "react";
import { Text, Button } from "react-native";
import ShowSearchBar from "./ShowSearchBar";
import ShowSelectedFoodList from "./ShowSelectedFoodList";
import { postData } from "./func_data_communication";
import { ip } from "./data";
import { arrayToObjectsInArray } from "./func_change_var_type";
// import data 테이블 전체

const AskDisLike = (props) => {

	const navigation = props.navigation;
	const userinfo = props.route.params.userinfo;
	const likeFoodList = props.route.params.likeFoodList;
	const [disLikeFoodList, setDisLikeFoodList] = useState([]);

	const makePostData = (userinfo, likeFoodList, disLikeFoodList) => {
		let postData = {};
		postData.userinfo = userinfo;
		postData.likeFoodList = likeFoodList;
		postData.disLikeFoodList = disLikeFoodList;
		return postData; // {userinfo: {nickname: "dfd", email: "djfkd"}, likeFoodList: ["dnehd", "dfdf"]}
		// let str = "";
		// array.forEach((ele) => {
		// 	str += ele;
		// 	str += ", ";
		// })
		// let post = str.slice(0, str.length - 2);
		//{nickname: "fddf", likeFoodList: }
	};

	return (
		<>
			<Text>싫어하는 음식이 뭐야?</Text>
			<ShowSearchBar foodList={disLikeFoodList} setFoodList={setDisLikeFoodList} />
			<ShowSelectedFoodList foodList={disLikeFoodList} setFoodList={setDisLikeFoodList} />
			<Button title="다음" onPress={() => {
				const data = makePostData(userinfo, likeFoodList, disLikeFoodList);
				postData(`${ip}/user/signup`, data, 0, 0);
				navigation.navigate("SignIn");
			}} />
		</>
	);
};

export default AskDisLike;