import React, { useState } from "react";
import { Text, TextInput, StyleSheet, View, KeyboardAvoidingView } from "react-native";
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
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View
        style={{ flex: 1, alignItems: "center", justifyContent : 'flex-end'}}
      >
        <Text style={styles.headerText}>로그인</Text>
      </View>
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
      <View
        style={{ flex: 0.3, alignItems: "center", justifyContent: 'flex-end' }}
      >
        <SigninButton
          json={makePostData(email, password)}
          setSignIn={setSignIn}
        />
      </View>
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: 'flex-start'}}
      >
        <TouchableOpacity
          style={styles.buttonstyle_signup}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 45,
    fontFamily: "BlackHanSans_400Regular",
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
    flex: 0.9,
    justifyContent: "center",
	alignItems : 'center'
  },
  buttonstyle_signup: {
    height: 55,
    width: 100,
    backgroundColor: "gray",
    borderRadius: 40,
    margin: 8,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 17,
    textAlign: "center",
    color: "white",
    fontFamily: "BlackHanSans_400Regular",
  },
});
