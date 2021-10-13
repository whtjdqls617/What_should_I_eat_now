import React, { useState } from "react";
import { Text, Button, TextInput } from "react-native";
import { postData } from "./func_data_communication";
import { ip } from "./data";
import axios from "axios";

const SignIn = ({ navigation }) => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const makePostData = (email, password) => {
		let postData = {};
		postData.email = email;
		postData.password = password;
		return postData;
	}

	return (
		<>
			<Text>로그인</Text>
			<TextInput placeholder="이메일" onChangeText={(input) => setEmail(input)} />
			<TextInput placeholder="비밀번호" onChangeText={(input) => setPassword(input)} />
			<Button title="LOG IN" onPress={() => {
				const data = makePostData(email, password);
				// axios
				// 	.get(`${ip}/signin`)
				// 	.then(function (response) {
				// 		if (ok면)
				//			navigation.navigate("MainStack");
				//		else
				//			Alert.alert("이메일 또는 비밀번호가 바르지 않습니다.")
				// 		})
				// 		.catch(function (error) {
				// 			console.log("err: ");
				// 			console.log(error);
				// 			return 0;
				// 		});
				navigation.navigate("MainStackNav");
			}} />
			<Button title="회원가입" onPress={() => navigation.navigate("SignUp")} />
		</>
	);
};

export default SignIn;

//SignUp으로 음식 이름 데이터 넘기고