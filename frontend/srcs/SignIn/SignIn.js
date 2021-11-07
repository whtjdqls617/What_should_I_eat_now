import React, { useState } from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SigninButton } from "./SignInButton";



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
      <Text style={{ fontSize: 45, fontFamily: "BlackHanSans_400Regular" }}>
        로그인
      </Text>
      <View style={styles.textinputstyle}>
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
      <SigninButton json={makePostData(email, password)} setSignIn={setSignIn}/>
      <TouchableOpacity
        style={styles.buttonstyle}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            color: "white",
            fontFamily: "BlackHanSans_400Regular",
          }}
        >
          회원가입
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textinput: {
    margin: 8,
    width: 200,
    height: 40,
    borderBottomWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: "4%",
    fontFamily: "BlackHanSans_400Regular",
  },
  textinputstyle: {
    flex: 0.3,
    justifyContent: "center",
  },
  buttonstyle: {
    height: 40,
    width: 110,
    backgroundColor: "orange",
    borderRadius: 40,
    margin: 8,
    justifyContent: "center",
  },
});
