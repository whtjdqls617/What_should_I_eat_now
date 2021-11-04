import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const DeleteFoodButton = ({ toggleModal }) => {

	return (
		<TouchableOpacity style={{ marginTop: 5 }} onPress={toggleModal}>
          <Text style={styles.crossSign}>x</Text>
        </TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	
	crossSign: {
		fontSize: 30,
		fontFamily: "BlackHanSans_400Regular",
		color: "red",
	  }
  });
  