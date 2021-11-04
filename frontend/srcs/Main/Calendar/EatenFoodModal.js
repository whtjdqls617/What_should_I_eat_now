import React from "react";
import { Modal, View, TouchableOpacity, Text, StyleSheet } from "react-native";

export const EatenFoodModal = ({ onXPress, toggleModal, index}) => {

	return (
		<Modal isVisible={true} animationOutTiming={400}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text style={styles.questionText}>진짜 지울꺼야?</Text>
					<View style={styles.buttonAlign}>
						<TouchableOpacity
							onPress={() => {
								toggleModal();
								onXPress(index);
							}}
							style={styles.button2}
						>
							<Text style={styles.answerText}>응</Text>
						</TouchableOpacity>
						<TouchableOpacity
							title="선택"
							onPress={toggleModal}
							style={styles.button}
						>
							<Text style={styles.answerText}>아니</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	centeredView: {
	  flex: 1,
	  justifyContent: "center",
	  alignItems: "center",
	},
	modalView: {
	  backgroundColor: "white",
	  borderRadius: 20,
	  padding: 30,
	},
	questionText: {
		marginTop: "4%",
		textAlign: "center",
		fontFamily: "BlackHanSans_400Regular",
		fontSize: 20,
	},
	answerText: {
		color: "white",
		fontFamily: "BlackHanSans_400Regular",
	},
	buttonAlign: { 
		flexDirection: "row", 
		marginTop: "5%" 
	},
	button: {
	  margin: 10,
	  width: 60,
	  height: 40,
	  borderRadius: 20,
	  backgroundColor: "gray",
	  justifyContent: "center",
	  alignItems: "center",
	},
	button2: {
	  margin: 10,
	  width: 60,
	  height: 40,
	  borderRadius: 20,
	  backgroundColor: "orange",
	  justifyContent: "center",
	  alignItems: "center",
	},
  });
  