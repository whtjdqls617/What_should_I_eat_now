import React from 'react';
import { Text, Button, TextInput } from "react-native";
import ShowSearchBar from './ShowSearchBar';
// import data 테이블 전체

const AskLike = ({ navigation, route }) => {

	const userinfo = route.params;


	return (
    <>
      <Text>좋아하는 음식이 뭐야?</Text>
	  <ShowSearchBar />
	  {/* <ShowLikeFoodList /> */}
	  <Button title="다음"/>
    </>
  );
}

// navigation.navigate("AskLike", {객체: 음식 데이터, 페이지의 이름, true})

export default AskLike;

/*
1. 좋아하는 음식이 뭐야?
	- <Text>페이지 이름
	- 자동완성칸
		- 자동완성에 뜨는 음식들의 데이터를 어플 처음 시작할 때(App.js) 받아옴
	- 선택한 목록
		- x 버튼: 클릭하면 해당 음식 목록에서 삭제됨
	- <Button>: 다음 페이지로 넘어감

*/