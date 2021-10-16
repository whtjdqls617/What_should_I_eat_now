import React, { useState } from "react";
import { Text, Button, StyleSheet, TouchableOpacity, View } from "react-native";
import { ShowSearchBar } from "./ShowSearchBar";
import { ShowSelectedFoodList } from "./ShowSelectedFoodList";
import { postData } from "./func_data_communication";
import { ip } from "./data";
import { arrayToObjectsInArray } from "./func_change_var_type";
// import data 테이블 전체

export const AskDisLike = (props) => {
  const navigation = props.navigation;
  const userinfo = props.route.params.userinfo;
  const likeFoodList = props.route.params.likeFoodList;
  const [disLikeFoodList, setDisLikeFoodList] = useState([]);

  const makePostData = (userinfo, likeFoodList, disLikeFoodList) => {
    let postData = {};
    postData.userinfo = userinfo;
    postData.likeFoodList = likeFoodList;
    postData.disLikeFoodList = disLikeFoodList;
    return postData; // {userinfo: {nickname: "dfd", email: "djfkd"}, likeFoodList: ["dnehd", "dfdf"]}
    // let str = "";
    // array.forEach((ele) => {
    // 	str += ele;
    // 	str += ", ";
    // })
    // let post = str.slice(0, str.length - 2);
    //{nickname: "fddf", likeFoodList: }
  };

  return (
    <>
      <Text style={{ fontSize: 30 }}>싫어하는 음식이 뭐야?</Text>
      <ShowSearchBar
        foodList={disLikeFoodList}
        setFoodList={setDisLikeFoodList}
      />
      <ShowSelectedFoodList
        foodList={disLikeFoodList}
        setFoodList={setDisLikeFoodList}
      />
      {/* <Button
        title="다음"
        onPress={() => {
          const data = makePostData(userinfo, likeFoodList, disLikeFoodList);
          postData(`${ip}/user/signup`, data, 0, 0);
          navigation.navigate("SignIn");
        }}
      /> */}
      <View style={styles.buttonalign}>
        <TouchableOpacity
          style={{
            margin: "10%",
            backgroundColor: "orange",
            alignItems: "center",
            height: 55,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
          }}
          onPress={() => {
            navigation.navigate("AskLike");
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>이전</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: "10%",
            backgroundColor: "orange",
            alignItems: "center",
            height: 55,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
          }}
          onPress={() => {
            const data = makePostData(userinfo, likeFoodList, disLikeFoodList);
            postData(`${ip}/user/signup`, data, 0, 0);
            navigation.navigate("SignIn");
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>다음</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputalign: {
    flexDirection: "row",
  },
  buttonalign: {
	flexDirection : 'row',
    flex: 0.4,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
