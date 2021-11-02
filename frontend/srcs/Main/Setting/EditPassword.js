import React, { useState } from "react";
import {
  Alert,
  Button,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

export const EditPassword = ({ navigation, passwords, setPasswords }) => {
  const [password, setPassword] = useState("");
  const [firstopacity, setfirstOpacity] = useState(0);
  const [secondopacity, setsecondOpacity] = useState(0);

  const checkFormPassword = (input) => {
    if ((input.length > 7 && input.length < 21) || input.length == 0)
      return true;
    else return false;
  };

  const checkSamePassword = (input) => {
    if (input == password) return true;
    else return false;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titlestyle}>새 비밀번호</Text>
      <TextInput
        style={styles.textinputstyle}
        placeholder="8자에서 20자 사이로 입력"
        onChangeText={(input) => {
          if (checkFormPassword(input)) {
            setPassword(input);
            setfirstOpacity(0);
          } else {
            setPassword("");
            setfirstOpacity(100);
          }
          const copy = passwords.slice();
          copy.pop();
          setPasswords(copy);
        }}
      />
      <Text
        style={{
          opacity: firstopacity,
          fontSize: 15,
          color: "red",
          fontFamily: "BlackHanSans_400Regular",
        }}
      >
        잘못된 비밀번호 형식입니다.
      </Text>
      <Text style={styles.titlestyle}>새 비밀번호 확인</Text>
      <TextInput
        style={styles.textinputstyle}
        placeholder="비밀번호 확인"
        onChangeText={(input) => {
          if (checkSamePassword(input)) {
            const copy = passwords.slice();
            copy.push(input);
            setPasswords(copy);
            setsecondOpacity(0);
          } else {
            const copy = passwords.slice();
            copy.pop();
            setPasswords(copy);
            setsecondOpacity(100);
          }
        }}
      />
      <Text
        style={{
          opacity: secondopacity,
          fontSize: 15,
          color: "red",
          fontFamily: "BlackHanSans_400Regular",
        }}
      >
        비밀번호를 다시 확인해주세요.
      </Text>
    </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },
  buttonalign: {
    flex: 0.1,
    flexDirection: "row",
    marginTop: "13%",
  },
  buttonstyle: {
    margin: "3%",
    backgroundColor: "orange",
    alignItems: "center",
    height: 45,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  titlestyle: {
    textAlign: "center",
    fontSize: 25,
    color: "black",
    fontFamily: "BlackHanSans_400Regular",
    marginTop: "7%",
    marginBottom: "2%",
  },
  textstyle: {
    fontSize: 20,
    color: "white",
    fontFamily: "BlackHanSans_400Regular",
  },
  textinputstyle: {
    borderWidth: 1,
    height: 35,
    width: 200,
    borderRadius: 5,
    paddingHorizontal: "2%",
    fontFamily: "BlackHanSans_400Regular",
  },
});
