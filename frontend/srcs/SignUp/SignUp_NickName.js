import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

export const SignUp_NickName = ({ userinfo, setUserinfo }) => {
  const [opacity, setOpacity] = useState(0);

  const checkNickname = (nickname) => {
    if (nickname.length > 1 || nickname.length == 0) return true;
    else return false;
  };

  return (
    <>
      <View style={styles.nicknamerow}>
        <TextInput
          style={styles.textinput}
          placeholder="닉네임"
          onChangeText={(input) => {
            if (checkNickname(input)) {
              let copy = userinfo.slice();
              copy.splice(0, 1, input);
              setUserinfo(copy);
              setOpacity(0);
            } else {
              let copy = userinfo.slice();
              copy.splice(0, 1, 0);
              setUserinfo(copy);
              setOpacity(100);
            }
          }}
        />
      </View>
      <Text
        style={{
          opacity: opacity,
          marginLeft: "3%",
          color: "red",
          fontFamily: "BlackHanSans_400Regular",
        }}
      >
        닉네임은 두 글자 이상 적어주세요.
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nicknamerow: {
    flexDirection: "row",
  },
  textinput: {
    margin: 8,
    width: 200,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: "2%",
    fontFamily: "BlackHanSans_400Regular",
  },
});
