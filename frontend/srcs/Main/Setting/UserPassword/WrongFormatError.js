import React from "react";
import { Text } from "react-native";

export const WrongFormatError = ({ firstopacity }) => {

	return (
		<Text
        style={{
          marginTop: "3%",
          opacity: firstopacity,
          fontSize: 15,
          color: "red",
          fontFamily: "BlackHanSans_400Regular",
        }}
      >
        잘못된 비밀번호 형식입니다.
      </Text>
	);
};

