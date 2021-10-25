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

export const EditPassword = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [samePassword, setSamePassword] = useState("");
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
          setSamePassword("");
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
            setSamePassword(input);
            setsecondOpacity(0);
          } else {
            setSamePassword("");
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
      <View style={styles.buttonalign}>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => {
            navigation.navigate("Setting");
          }}
        >
          <Text style={styles.textstyle}>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => {
            if (samePassword.length > 0)
              /*
			axios.put(url, password)
			.then
				navigation.navigate("EditPassword");
			.error
				Alert.alert("잘못된 비밀번호입니다.")
			*/
              navigation.navigate("Setting");
            else Alert.alert("비밀번호를 다시 입력해주세요.");
          }}
        >
          <Text style={styles.textstyle}>확인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    height: 25,
    width: 180,
    borderRadius: 5,
    paddingHorizontal: "2%",
    fontFamily: "BlackHanSans_400Regular",
  },
});
