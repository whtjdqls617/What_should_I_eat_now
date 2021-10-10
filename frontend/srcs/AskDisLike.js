import React from "react";
import { Text, Button } from "react-native";
// import data 테이블 전체

const AskDisLike = ({ navigation }) => {
  // const [answer]

  return (
    <>
      <Text>AskDisLike</Text>
    </>
  );
};

// navigation.navigate("AskDisLike", {객체: 음식 데이터, 페이지의 이름, true})

export default AskDisLike;

/*
1. 싫어하는 음식이 뭐야?
	- <Text>페이지 이름
	- 자동완성칸
		- 자동완성에 뜨는 음식들의 데이터를 어플 처음 시작할 때(App.js) 받아옴
	- 선택한 목록
		- x 버튼: 클릭하면 해당 음식 목록에서 삭제됨
	- <Button>: 메인 페이지로 넘어감, 서버에 POST데이터 전송(선택한 음식 데이터)
const like = [카레, 짜장];
let array = [];
array.push(like);  => array = [[카레, 짜장]];
*/
