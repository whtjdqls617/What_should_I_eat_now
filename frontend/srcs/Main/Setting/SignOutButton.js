import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SignOutButton = ({ navigation, setSignIn }) => {

	return (
		<View style={styles.buttonalign}>
          <TouchableOpacity
            style={styles.buttonstyle}
            onPress={() => {
              AsyncStorage.clear();
              setSignIn(false);
            }}
          >
            <Text style={styles.textstyle}>로그아웃</Text>
          </TouchableOpacity>
        </View>
	);
};



const styles = StyleSheet.create({

	buttonalign: {
		justifyContent: "center",
		margin: "8%",
	  },
	buttonstyle: {
		height: 55,
		width: 110,
		backgroundColor: "orange",
		borderRadius: 40,
		justifyContent: "center",
	},
	textstyle: {
		fontSize: 20,
		fontFamily: "BlackHanSans_400Regular",
		color: "white",
		textAlign: "center",
	},
});