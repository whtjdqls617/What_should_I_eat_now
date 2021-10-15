import React, { useState } from "react";
import { Button, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export const CheckPassword = ({ navigation }) => {
  const [password, setPassword] = useState("");
  return (
    <>
      <Text>현재 비밀번호 입력</Text>
      <TextInput onChangeText={(input) => setPassword(input)} />
      <Button
        title="취소"
        onPress={() => {
          navigation.navigate("Setting");
        }}
      />
      <Button
        title="다음"
        onPress={() => {
          /*
		  axios.get(url, password)
		  .then
		  	if (ok)
			  navigation.navigate("EditPassword");
			else
			  Alert.alert("잘못된 비밀번호입니다.")
		  */
          navigation.navigate("EditPassword");
        }}
      />
    </>
  );
};
