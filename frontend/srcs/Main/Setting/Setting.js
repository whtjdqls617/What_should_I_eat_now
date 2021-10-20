import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Setting = ({ navigation }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate("CheckPassword")}>
        <Text>회원정보 수정</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("FoodList")}>
        <Text>음식리스트 관리</Text>
      </TouchableOpacity>
    </>
  );
};
