import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export const CheckPassword = ({ navigation }) => {
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.2 }}>
        <Text style={styles.titlestyle}>현재 비밀번호 입력</Text>
        <TextInput
          style={{
            borderWidth: 1,
            width: 200,
            height: 35,
            marginTop: "10%",
            borderRadius: 8,
            paddingHorizontal: "4%",
          }}
          onChangeText={(input) => setPassword(input)}
        />
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
    fontSize: 20,
    color: "black",
    fontFamily: "BlackHanSans_400Regular",
  },
  textstyle: {
    fontSize: 20,
    color: "white",
    fontFamily: "BlackHanSans_400Regular",
  },
});
