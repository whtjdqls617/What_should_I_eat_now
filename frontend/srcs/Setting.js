import React from "react";
import { SectionList, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ShowFoodList from "./ShowFoodList";
import CheckPassword from "./CheckPassword";

const Setting = ({ navigation }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate("CheckPassword")}>
        <Text>회원정보 수정</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ShowFoodList")}>
        <Text>음식리스트 관리</Text>
      </TouchableOpacity>
    </>
  );
};

export default Setting;
