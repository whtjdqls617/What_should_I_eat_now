import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";

export const UserNicknameModal = ({ setModalVisible, alertMessage }) => {

	return (
		<Modal
			isVisible={true}
			hasBackdrop={true}
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text
						style={{
							margin: 25,
							fontSize: 16,
							fontFamily: "BlackHanSans_400Regular",
						}}
					>
						{alertMessage}
					</Text>
					<TouchableOpacity
						onPress={() => {
							setModalVisible(false);
						}}
						style={styles.button}
					>
						<Text
							style={{
								color: "white",
								fontFamily: "BlackHanSans_400Regular",
							}}
						>
							확인
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
};


const styles = StyleSheet.create({
	container: {
		flex: 0.8,
		marginLeft: '25%',
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
		marginLeft: '15%',
		height: 30,
		width: 60,
		backgroundColor: "orange",
		borderRadius: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonstyle: {
		height: 40,
		width: 110,
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
		opacity: 0.4
	},
});
