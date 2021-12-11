import React, { useState } from "react";
import { Text, TextInput, StyleSheet, View, ScrollView } from "react-native";
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
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={{ alignItems: "center", flex: 0.2, marginTop : '10%' }}>
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
          secureTextEntry={true}
          placeholder="비밀번호"
          onChangeText={(input) => setPassword(input)}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: "15%" }}>
        <SigninButton
          json={makePostData(email, password)}
          setSignIn={setSignIn}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: "2%" }}>
        <TouchableOpacity
          style={styles.buttonstyle_signup}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
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
	  alignItems : 'center',
    marginTop : '15%'
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
