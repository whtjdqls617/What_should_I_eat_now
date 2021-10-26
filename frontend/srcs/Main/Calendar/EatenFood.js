import React, { useState } from "react";
import { food_image } from "../../data/data";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

export const EatenFood = ({ food_name }) => {
	const [ismodalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!ismodalVisible);
	};

	return (
		<View style={{ flexDirection: 'column', alignItems: 'center', margin: 5 }}>
			<Image style={styles.imagestyle} source={food_image[food_name]} />
			<Text style={styles.textstyle}>{food_name}</Text>
			<TouchableOpacity onPress={toggleModal}>
				<Text>x</Text>
			</TouchableOpacity>
			<Modal isVisible={ismodalVisible} hasBackdrop={true}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={{textAlign : 'center', fontFamily : "BlackHanSans_400Regular", fontSize : 20}}>진짜 지울꺼야?</Text>
						<View style={{flexDirection : 'row'}}>
							<TouchableOpacity onPress={toggleModal} style={styles.button2}>
								<Text
									style={{
										color: "white",
										fontFamily: "BlackHanSans_400Regular",
									}}
								>
									응
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								title="선택"
								onPress={toggleModal}
								style={styles.button}
							>
								<Text
									style={{
										color: "white",
										fontFamily: "BlackHanSans_400Regular",
									}}
								>
									아니
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		backgroundColor: "white",
		borderRadius: 20,
		padding: 25,
	},
	imagestyle: {
		// margin : '10%',
		borderRadius: 130,
		borderWidth: 3,
		height: 100,
		width: 100,
	},
	textstyle: {
		textAlign: 'center'
	},
	xbuttonstyles: {
		flex: 1
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
	}
})