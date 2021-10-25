import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SignUp_Email } from "./SignUp_Email";
import { SignUp_NickName } from "./SignUp_NickName";
import { SignUp_PassWord } from "./SignUp_PassWord";

export const SignUp = ({ navigation }) => {
  const [userinfo, setUserinfo] = useState([0, 0, 0]);

  const arrayToObject = (array) => {
    let object = {};
    object.nickName = array[0];
    object.email = array[1];
    object.password = array[2];
    return object;
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 45,
          flex: 0.2,
          fontFamily: "BlackHanSans_400Regular",
          marginLeft: "20%",
        }}
      >
        회원가입
      </Text>
      <View style={{ flex: 0.3, marginLeft: "13%" }}>
        <SignUp_NickName userinfo={userinfo} setUserinfo={setUserinfo} />
        <SignUp_Email userinfo={userinfo} setUserinfo={setUserinfo} />
        <SignUp_PassWord userinfo={userinfo} setUserinfo={setUserinfo} />
      </View>
      <View style={styles.buttonalign}>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => {
            let array = [
              "닉네임을 다시 입력해주세요",
              "이메일을 다시 입력해주세요",
              "비밀번호를 다시 입력해주세요",
            ];
            for (let i = 0; i < 3; i++) {
              if (userinfo[i] == 0) {
                Alert.alert(array[i]);
                return;
              }
            }
            const data = arrayToObject(userinfo);
            navigation.navigate("AskLike", data);
          }}
        >
          <Text
            style={{ color: "white", fontFamily: "BlackHanSans_400Regular" }}
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
    justifyContent: "center",
    marginTop: "20%",
  },
  buttonstyle: {
    height: 40,
    width: 110,
    backgroundColor: "orange",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "BlackHanSans_400Regular",
  },
  buttonalign: {
    flex: 0.1,
    alignItems: "center",
    marginTop: "50%",
  },
});
