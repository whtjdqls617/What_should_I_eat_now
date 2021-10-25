import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";
import { postData } from "../../func/func_data_communication";
import axios from "axios";
import { ip } from "../../data/data";
import { data } from "../../data/question_data";
import { NavigationContainer } from "@react-navigation/native";

export const NextButton = ({
  updateIndex,
  answer,
  index,
  setData,
  navigation,
}) => {
  const opt = [
    ["question1", "answer1"],
    ["question2", "answer2"],
    ["question3", "answer3"],
  ];

  const changeAnswerToObject = () => {
    let object = {};
    answer.forEach((arr, i) => {
      object[opt[i][0]] = arr[0];
      object[opt[i][1]] = arr[1];
    });
    return object;
  };

  const nextPressEvent = () => {
    if (index == 2) {
      // updateIndex(true);
      const object = changeAnswerToObject();
      axios
        .get(`${ip}/recommend-food/`, {
          params: {
            answer1: "회식",
            answer2: "회식",
            answer3: "회식",
            question1: "특별한 날이야?",
            question2: "기분이 어때?",
            question3: "무슨 맛이 땡겨?",
          },
        })
        .then(function (response) {
          console.log("response.data: ");
          console.log(response.data);
          setData(response.data);
          return 0;
        })
        .catch(function (error) {
          console.log("err: ");
          console.log(error);
          Alert.alert("서버와 통신이 끊어졌습니다.");
          navigation.navigate("Main");
          //3초 이내에 서버한테서 답이 안 오면 에러로 처리하게 설정
          //유저한테 에러 메시지 창 띄우고
          //메인으로 바로 이동
          return 0;
        });
    }
    if (index != 2) updateIndex(true);
  };

  const prevPressEvent = () => {
    if (index > 0) updateIndex(false);
  };

  return (
    <>
      <View style={styles.buttonalign}>
        <TouchableOpacity style={styles.buttonstyle} onPress={prevPressEvent}>
          <Text style={styles.textstyle}>이전</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonstyle} onPress={nextPressEvent}>
          <Text style={styles.textstyle}>다음</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

// 응 클릭시 postData, 메인페이지로 화면 이동
// export const YesButton

const styles = StyleSheet.create({
  buttonalign: {
    flexDirection: "row",
    flex: 0.4,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonstyle: {
    margin: "25%",
    backgroundColor: "orange",
    alignItems: "center",
    height: 55,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  textstyle: {
    fontSize: 20,
    color: "white",
    fontFamily: "BlackHanSans_400Regular",
  },
});
