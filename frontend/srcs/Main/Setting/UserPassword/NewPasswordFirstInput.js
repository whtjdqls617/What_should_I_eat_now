import React from "react";
import { TextInput, StyleSheet } from "react-native";

export const NewPasswordFirstInput = ({ setPassword, setfirstOpacity, setPasswords, passwords}) => {

	const checkFormPassword = (input) => {
		if ((input.length > 7 && input.length < 21) || input.length == 0)
		  return true;
		else return false;
	  };

	return (
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
        }}
      />
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
	  borderBottomWidth: 0.5,
	  height: 35,
	  width: 200,
	  borderRadius: 5,
	  paddingHorizontal: "2%",
	  fontFamily: "BlackHanSans_400Regular",
	},
  });
