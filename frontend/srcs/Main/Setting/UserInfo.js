import React from "react";
import { Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export const UserInfo = ({ navigation }) => {

	return (
		<>
			<Text>회원정보</Text>
			<Text>이메일</Text>
			<Text>111@gmail.com</Text>
			<Text>닉네임</Text>
			<TextInput placeholder="111"></TextInput>
			<TouchableOpacity onPress={() => navigation.navigate("UserPassword")}>
				<Text>비밀번호 변경</Text>
			</TouchableOpacity>
		</>
	);
}