import React, { useState } from "react";
import { Text, Button, TextInput, StyleSheet, View } from "react-native";
import { postData } from "./func_data_communication";
import { ip } from "./data";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";



export const SignIn = ({ navigation, setSignIn }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");


  const makePostData = (email, password) => {
    let postData = {};
    postData.email = email;
    postData.password = password;
    return postData;
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 45, fontFamily: 'Base' }}>
        로그인
      </Text>
      <View style={styles.textinputcolumn}>
        <TextInput
          style={styles.textinput}
          placeholder="이메일"
          onChangeText={(input) => setEmail(input)}
        />
        <TextInput
          style={styles.textinput}
          placeholder="비밀번호"
          onChangeText={(input) => setPassword(input)}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonstyle}
        onPress={() => {
          const data = makePostData(email, password);
          // axios
          // 	.get(`${ip}/signin`, data)
          // 	.then(function (response) {
          // 		if (ok면)
          // 			asyncstorage.setItem에 토큰 저장,
          // 			setToken();
          // 		else
          // 			Alert.alert("이메일 또는 비밀번호가 바르지 않습니다.")
          // 		})
          // 		.catch(function (error) {
          // 			console.log("err: ");
          // 			console.log(error);
          // 			return 0;
          // 		});
          // navigation.navigate("MainStackNav");
          setSignIn(true);
        }}
      >
        <Text style={{ fontSize: 15, textAlign: "center", color: "white", fontFamily: 'Base' }}>
          로그인
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonstyle}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={{ fontSize: 15, textAlign: "center", color: "white", fontFamily : 'Base' }}>
          회원가입
        </Text>
      </TouchableOpacity>
    </View>
  );
};

//SignUp으로 음식 이름 데이터 넘기고
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  textinput: {
    margin: 8,
    width: 200,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
	paddingHorizontal: '4%',
	fontFamily : 'Base'
  },
  textinputcolumn: {
    flex: 0.3,
    justifyContent: "center",
  },
  buttonstyle: {
	height : 40,
	width : 110,
	backgroundColor : 'orange',
	borderRadius : 40,
	margin : 8,
	justifyContent : 'center'
  }
});
