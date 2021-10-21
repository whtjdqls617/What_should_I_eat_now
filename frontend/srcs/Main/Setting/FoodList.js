import axios from "axios";
import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import { SearchBar } from "../../SignUp/SearchBar";
import { SelectedFoodList } from "../../SignUp/SelectedFoodList";

export const FoodList = ({ navigation }) => {
  //props로 음식 리스트 받아온 상태

  const [signal, setSignal] = useState(0);
  const likefoodlist = [
    { food: "돈까스", id: "1" },
    { food: "라면", id: "2" },
    { food: "떡볶이", id: "3" },
  ];
  const dislikefoodlist = [
    { food: "회", id: "4" },
    { food: "햄버거", id: "5" },
    { food: "치킨", id: "6" },
  ];

  const [likeFoodList, setLikeFoodList] = useState(likefoodlist);
  const [disLikeFoodList, setDisLikeFoodList] = useState(dislikefoodlist); /*
	if 토글 on
		return ( 푸드리스트 보여주는 컴포넌트 렌더링 <- 좋아하는 음식 리스트 넣어줌)
	else
		return ( "" <- 싫어하는 음식 리스트 넣어줌)
	*/

  return (
    <>
      <TouchableOpacity onPress={() => setSignal(0)}>
        <Text>좋아하는 것</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSignal(1)}>
        <Text>싫어하는 것</Text>
      </TouchableOpacity>
      {signal == 0 ? (
        <>
          <SearchBar
            foodList={likeFoodList}
            setFoodList={setLikeFoodList}
          />
          <SelectedFoodList
            foodList={likeFoodList}
            setFoodList={setLikeFoodList}
          />
        </>
      ) : (
        <>
          <SearchBar
            foodList={disLikeFoodList}
            setFoodList={setDisLikeFoodList}
          />
          <SelectedFoodList
            foodList={disLikeFoodList}
            setFoodList={setDisLikeFoodList}
          />
        </>
      )}
	  <Button title="적용" onPress={() => {
      /*
      axios.put(url, data)
        .then
          navigation.navigate("Setting");
        .error
          Alert.alert("전송 실패");
      */
          navigation.navigate("Setting");
      }}/>
    </>
  );
};
