import React, { useState } from "react";
import { Text, TextInput, Button, View } from "react-native";

const SignUp_PassWord = ({ userinfo, setUserinfo }) => {
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
      <Text style={{ opacity: firstopacity }}>잘못된 비밀번호 형식입니다.</Text>
      <TextInput
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
      <Text style={{ opacity: secondopacity }}>
        비밀번호를 다시 확인해주세요.
      </Text>
    </>
  );
};

export default SignUp_PassWord;
