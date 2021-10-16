import React, { useState } from "react";
import {
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { ShowSearchBar } from "./ShowSearchBar";
import { ShowSelectedFoodList } from "./ShowSelectedFoodList";
// import data 테이블 전체

export const AskLike = ({ navigation, route }) => {
  const userinfo = route.params;
  const [likeFoodList, setLikeFoodList] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginLeft : '5%' }}>좋아하는 음식이 뭐야?</Text>
      <View style={styles.seachbar}>
        <ShowSearchBar foodList={likeFoodList} setFoodList={setLikeFoodList} />
      </View>
      <ShowSelectedFoodList
        foodList={likeFoodList}
        setFoodList={setLikeFoodList}
      />
      <View style={styles.buttonalign}>
        <TouchableOpacity
          style={{
            backgroundColor: "orange",
            alignItems: "center",
            height: 55,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
          }}
          onPress={() =>
            navigation.navigate("AskDisLike", {
              userinfo: userinfo,
              likeFoodList: likeFoodList,
            })
          }
        >
          <Text style={{ fontSize: 20, color: "white" }}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
	marginTop : '10%'
  },
  inputalign: {
    flexDirection: "row",
  },
  buttonalign: {
    flex: 0.4,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  seachbar: {
	position :'relative',
	alignItems : 'center'
  }
});
