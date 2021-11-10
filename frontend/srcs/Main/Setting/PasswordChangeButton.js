import React from "react";
import { Text, View, StyleSheet, TouchableOpacity  } from "react-native";

export const PasswordChangeButton = ({ navigation }) => {

	return (
		<View style={{ marginBottom: "45%", alignItems: "center" }}>
            <TouchableOpacity
              style={styles.buttonstyle}
              onPress={() => navigation.navigate("UserPassword")}
            >
              <Text style={styles.buttonText}>비밀번호 변경</Text>
            </TouchableOpacity>
          </View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 0.8,
		marginLeft : '25%',
	  marginTop: "20%",
	  justifyContent: "center",
	  // alignItems: "center",
	},
	head: {
	  fontSize: 50,
	  fontFamily: "BlackHanSans_400Regular",
	},
	title: {
	  fontSize: 20,
	  fontFamily: "BlackHanSans_400Regular",
	},
	detail: {
	  marginTop: "3%",
	  fontSize: 15,
	  fontFamily: "BlackHanSans_400Regular",
	  opacity: 0.4,
	},
	nicknamealign: {
	  marginTop: "3%",
	  flexDirection: "row",
	},
	changebutton: {
	  marginLeft : '15%',
	  height: 30,
	  width: 60,
	  backgroundColor: "orange",
	  borderRadius: 40,
	  justifyContent: "center",
	  alignItems: "center",
	},
	buttonstyle: {
	  height: 55,
	  width: 100,
	  backgroundColor: "orange",
	  borderRadius: 40,
	  justifyContent: "center",
	  alignItems: "center",
	},
	buttonText: {
	  color: "white",
	  fontFamily: "BlackHanSans_400Regular",
	},
	button: {
	  height: 30,
	  width: 60,
	  borderRadius: 20,
	  backgroundColor: "orange",
	  justifyContent: "center",
	  alignItems: "center",
	},
	centeredView: {
	  flex: 1,
	  justifyContent: "center",
	  alignItems: "center",
	  marginTop: 22,
	},
	modalView: {
	  backgroundColor: "white",
	  borderRadius: 20,
	  padding: 20,
	  alignItems: "center",
	},
	textinputstyle: {
	  borderBottomWidth: 0.5,
	  height: 35,
	  width: 120,
	  borderRadius: 5,
	  paddingHorizontal: "2%",
	  fontFamily: "BlackHanSans_400Regular",
	  opacity : 0.4
	},
  });
