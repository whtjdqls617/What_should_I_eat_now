import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { SearchBar } from "./SearchBar";
import { SelectedFoodList } from "./SelectedFoodList";
import { postData } from "../func/func_data_communication";
import { ip } from "../data/data";

export const AskDisLike = (props) => {
  const navigation = props.navigation;
  const userinfo = props.route.params.userinfo;
  const likeFoodList = props.route.params.likeFoodList;
  const [disLikeFoodList, setDisLikeFoodList] = useState([]);

  const makePostData = (userinfo, likeFoodList, disLikeFoodList) => {
    let postData = {};
    let likeArr = likeFoodList.map((ele) => {
      return ele.food;
    });
    let dislikeArr = disLikeFoodList.map((ele) => {
      return ele.food;
    });
    postData.email = userinfo.email;
    postData.nickName = userinfo.nickName;
    postData.password = userinfo.password;
    postData.likeFoodList = likeArr.join();
    postData.dislikeFoodList = dislikeArr.join();
    return postData;
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginRight: "10%",
          fontSize: 35,
          fontFamily: "BlackHanSans_400Regular",
        }}
      >
        싫어하는 음식이 뭐야?
      </Text>
        <SearchBar
          foodList={disLikeFoodList}
          setFoodList={setDisLikeFoodList}
        />
      <SelectedFoodList
        foodList={disLikeFoodList}
        setFoodList={setDisLikeFoodList}
      />
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
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontFamily: "BlackHanSans_400Regular",
            }}
          >
            이전
          </Text>
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
            postData(`${ip}/user/signup`, data);
            console.log("data: ", data);
            navigation.navigate("SignIn");
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontFamily: "BlackHanSans_400Regular",
            }}
          >
            다음
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "25%",
	alignItems : 'center'
  },
  buttonalign: {
    flexDirection: "row",
    flex: 0.4,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  seachbar: {
    // position: "relative",
    alignItems: "center",
    marginTop: "4%",
  },
});
