import axios from "axios";
import React, { useState } from "react";
import { Text, TouchableOpacity, Button, StyleSheet, View } from "react-native";
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
    <View style={styles.container}>
      <View style={styles.titlealign}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => setSignal(0)}>
          <Text
            style={{
              fontSize: 70,
              textAlign: "center",
              fontFamily: "BlackHanSans_400Regular",
              color: signal == 0 ? "black" : "gray",
              opacity: signal == 0 ? 1 : 0.3,
            }}
          >
            좋아
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => setSignal(1)}>
          <Text
            style={{
              fontSize: 70,
              textAlign: "center",
              fontFamily: "BlackHanSans_400Regular",
              color: signal != 0 ? "black" : "gray",
              opacity: signal != 0 ? 1 : 0.3,
            }}
          >
            싫어
          </Text>
        </TouchableOpacity>
      </View>
      {signal == 0 ? (
        <>
          <SearchBar foodList={likeFoodList} setFoodList={setLikeFoodList} />
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
      <View style={styles.buttonalign}>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => {
            /*
      axios.put(url, data)
        .then
          navigation.navigate("Setting");
        .error
          Alert.alert("전송 실패");
      */
            navigation.navigate("Setting");
          }}
        >
          <Text style={styles.textstyle}>적용</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },
  titlealign: {
    flex: 0.2,
    flexDirection: "row",
    marginTop: "13%",
    alignItems: "center",
  },
  textstyle: {
    fontSize: 20,
    color: "white",
    fontFamily: "BlackHanSans_400Regular",
    textAlign: "center",
  },
  buttonstyle: {
    height: 55,
    width: 110,
    backgroundColor: "orange",
    borderRadius: 40,
    justifyContent: "center",
  },
  buttonalign: {
    flex: 0.3,
  },
});
