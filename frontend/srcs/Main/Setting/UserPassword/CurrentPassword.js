import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export const CurrentPassword = ({ navigation, setPasswords, passwords }) => {

  return (
    <>
        <Text style={styles.titlestyle}>현재 비밀번호 입력</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.textinputstyle}
          onChangeText={(input) => {
            const copy = passwords.slice();
            copy.splice(0, 1, input);
            setPasswords(copy);
          }}
        />
    </>
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
  },
  textstyle: {
    fontSize: 20,
    color: "white",
    fontFamily: "BlackHanSans_400Regular",
  },
  textinputstyle: {
    borderBottomWidth: 0.5,
    height: 35,
    width: 200,
    borderRadius: 5,
    paddingHorizontal: "2%",
    fontFamily: "BlackHanSans_400Regular",
    marginTop: "2%",
  },
});
