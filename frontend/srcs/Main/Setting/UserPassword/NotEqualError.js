import React from "react";
import { Text } from "react-native";

export const NotEqualError = ({ secondopacity }) => {

	return (
		<Text
			style={{
				marginTop: "3%",
				opacity: secondopacity,
				fontSize: 15,
				color: "red",
				fontFamily: "BlackHanSans_400Regular",
			}}
		>
			비밀번호를 다시 확인해주세요.
		</Text>
	);
};