import React, { useState } from "react";
import { Text, TextInput, StyleSheet } from "react-native";

export const SignUp_PassWord = ({ userinfo, setUserinfo }) => {
  const [password, setPassword] = useState("");
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
        style={styles.textinput}
        placeholder="비밀번호"
        onChangeText={(input) => {
          let copy = userinfo.slice();
          copy.splice(2, 1, 0);
          setUserinfo(copy);
          if (checkFormPassword(input)) {
            setPassword(input);
            setfirstOpacity(0);
          } else {
            setPassword("");
            setfirstOpacity(100);
          }
        }}
      />
      <Text
        style={{
          opacity: firstopacity,
          marginLeft: "3%",
          color: "red",
          fontFamily: "BlackHanSans_400Regular",
        }}
      >
        잘못된 비밀번호 형식입니다.
      </Text>
      <TextInput
        style={styles.textinput}
        placeholder="비밀번호 확인"
        onChangeText={(input) => {
          if (checkSamePassword(input)) {
            let copy = userinfo.slice();
            copy.splice(2, 1, input);
            setUserinfo(copy);
            setsecondOpacity(0);
          } else {
            let copy = userinfo.slice();
            copy.splice(2, 1, 0);
            setUserinfo(copy);
            setsecondOpacity(100);
          }
        }}
      />
      <Text
        style={{
          opacity: secondopacity,
          marginLeft: "3%",
          color: "red",
          fontFamily: "BlackHanSans_400Regular",
        }}
      >
        비밀번호를 다시 확인해주세요.
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  textinput: {
    margin: 8,
    width: 200,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: "2%",
    fontFamily: "BlackHanSans_400Regular",
  },
});