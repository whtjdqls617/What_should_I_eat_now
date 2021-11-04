import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const CancelButton = ({ navigation }) => {

	return (
		<TouchableOpacity
            style={styles.buttonstyle}
            onPress={() => {
              navigation.navigate("Setting");
            }}
          >
            <Text style={styles.textstyle}>취소</Text>
          </TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	
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
	textstyle: {
	  fontSize: 20,
	  color: "white",
	  fontFamily: "BlackHanSans_400Regular",
	},
  });