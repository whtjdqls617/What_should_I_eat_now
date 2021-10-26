import React, { useState } from "react";
import { TouchableOpacity, Image, View, Text, StyleSheet } from "react-native";
import { food_image } from "../../data/data";
import Modal from "react-native-modal";
import { SearchBar } from "../../SignUp/SearchBar"

export const AddEatenFood = ({ day, setDay, eatingHistory, setEatingHistory }) => {

	const [ismodalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!ismodalVisible);
	};
	return (
		<>
			<TouchableOpacity onPress={toggleModal}>
				<Image style={{
					borderRadius: 130,
					borderWidth: 3,
					height: 100,
					width: 100,
				}} source={food_image["도넛"]} />
			</TouchableOpacity>
			<Modal isVisible={ismodalVisible} hasBackdrop={true}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={{ textAlign: 'center', fontFamily: "BlackHanSans_400Regular", fontSize: 20 }}>음식 검색!</Text>
						<SearchBar />
						<View style={{ flexDirection: 'row' }}>
							<TouchableOpacity onPress={toggleModal} style={styles.button2}>
								<Text
									style={{
										color: "white",
										fontFamily: "BlackHanSans_400Regular",
									}}
								>
									적용
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
									취소
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		</>
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
		paddingVertical: '70%',
		// paddingHorizontal: '40%',
		
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