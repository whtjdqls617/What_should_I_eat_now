import React from "react";
import { Text, Button } from "react-native";

const SignIn = ({ navigation }) => {
  //스택
  /*
	1. SignIn: 로그인화면, 회원가입 버튼 있는 페이지 -> 간단하게 회원가입 버튼만 만들어놓고 클릭하면 회원가입 페이지로 넘어가게 하기
	2. SignUp: 회원가입 페이지
	3. 질문 페이지
	4. Main 페이지

	*/

  return (
    <>
      <Text>SignIn.page</Text>
	  <Button title="SignUp" onPress={() => navigation.navigate("SignUp")}/>
    </>
  );
};

export default SignIn;

//SignUp으로 음식 이름 데이터 넘기고