import React, { useState } from 'react';
import { Text, Button, TextInput } from "react-native";
import { ShowSearchBar } from './ShowSearchBar';
import { ShowSelectedFoodList } from './ShowSelectedFoodList';
// import data 테이블 전체

export const AskLike = ({ navigation, route }) => {
  const userinfo = route.params;
  const [likeFoodList, setLikeFoodList] = useState([]);

  return (
    <>
      <Text>좋아하는 음식이 뭐야?</Text>
      <ShowSearchBar foodList={likeFoodList} setFoodList={setLikeFoodList} />
      <ShowSelectedFoodList
        foodList={likeFoodList}
        setFoodList={setLikeFoodList}
      />
      <Button
        title="다음"
        onPress={() =>
          navigation.navigate("AskDisLike", {
            userinfo: userinfo,
            likeFoodList: likeFoodList,
          })
        }
      />
    </>
  );
};
// navigation.navigate("AskLike", {객체: 음식 데이터, 페이지의 이름, true})



/*
1. 좋아하는 음식이 뭐야?
	- <Text>페이지 이름
	- 자동완성칸
		- 자동완성에 뜨는 음식들의 데이터를 어플 처음 시작할 때(App.js) 받아옴
	- 선택한 목록
		- x 버튼: 클릭하면 해당 음식 목록에서 삭제됨
	- <Button>: 다음 페이지로 넘어감

*/