import React, { useState } from "react";
import { Alert, Button, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const EditPassword = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [samePassword, setSamePassword] = useState("");
  const [firstopacity, setfirstOpacity] = useState(0);
  const [secondopacity, setsecondOpacity] = useState(0);

  const checkFormPassword = (input) => {
    if (input.length > 7 && input.length < 21) return true;
    else return false;
  };

  const checkSamePassword = (input) => {
    if (input == password) return true;
    else return false;
  };

  return (
    <>
      <TextInput
        placeholder="비밀번호"
        onChangeText={(input) => {
          if (checkFormPassword(input)) {
            setPassword(input);
            setfirstOpacity(0);
          } else {
            setPassword("");
            setfirstOpacity(100);
          }
          setSamePassword("");
        }}
      />
      <Text style={{ opacity: firstopacity }}>잘못된 비밀번호 형식입니다.</Text>
      <TextInput
        placeholder="비밀번호 확인"
        onChangeText={(input) => {
          if (checkSamePassword(input)) {
            setSamePassword(input);
            setsecondOpacity(0);
          } else {
            setSamePassword("");
            setsecondOpacity(100);
          }
        }}
      />
      <Text style={{ opacity: secondopacity }}>
        비밀번호를 다시 확인해주세요.
      </Text>
      <Button
        title="취소"
        onPress={() => {
          navigation.navigate("Setting");
        }}
      />
      <Button
        title="다음"
        onPress={() => {
		   if(samePassword.length > 0)
			/*
			axios.put(url, password)
			.then
				navigation.navigate("EditPassword");
			.error
				Alert.alert("잘못된 비밀번호입니다.")
			*/
				navigation.navigate("Setting");
			else
				Alert.alert("비밀번호를 다시 입력해주세요.");
        }}
      />
    </>
  );
};

export default EditPassword;
