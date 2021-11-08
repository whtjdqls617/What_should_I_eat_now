import React, { useState } from "react";
import { TouchableOpacity, Image, View, Text, StyleSheet, Alert, KeyboardAvoidingView } from "react-native";
import { plus } from "../../data/icons"
import Modal from "react-native-modal";
import { SearchBar } from "../../SignUp/SearchBar"
import { AddEatenFoodSign } from "./AddEatenFoodSign";
import { BlankSpace } from "./BlankSpace";
import { getTokenFromStorage } from "../../func/func_data_communication";
import { ip } from "../../data/data";
import { putDataToServer } from "../../func/func_data_communication";

export const AddEatenFood = ({ day, setDay, month, setMonth, date }) => {
	const [ismodalVisible, setModalVisible] = useState(false);
	const toggleModal = () => {
		setModalVisible(!ismodalVisible);
	};

	const onPress = (newFood) => {

		const copyDay = day.slice();
		copyDay.push(newFood);
		toggleModal();
		setDay(copyDay);

		let copyMonth = month.slice();
		copyMonth.push({ date: date, foodName: newFood });
		setMonth(copyMonth);

		const okFunc = (token) => {

			const name = newFood;

			putDataToServer(`${ip}/calendar/food/${name}/${date}`, "", token, 0, 0, 0);
		};

		getTokenFromStorage(okFunc, 0, 0);
	}

	return (
		<>
			<View
				style={{ flexDirection: "column", alignItems: "center", margin: 10 }}
			>
				<AddEatenFoodSign toggleModal={toggleModal} />
				<BlankSpace />
				{
					ismodalVisible ?
						<Modal
							style={{ position: "absolute", width: "90%", height: 700 }}
							isVisible={true}
							animationOutTiming={400}
							onBackdropPress={() => toggleModal()}
						>
							<View style={styles.centeredView}>
								<View style={styles.modalView}>
									<Text
										style={{
											marginTop: "15%",
											textAlign: "center",
											fontFamily: "BlackHanSans_400Regular",
											fontSize: 35,
										}}
									>
										음식 검색!
									</Text>
									<SearchBar onPress={onPress} />
								</View>
							</View>
						</Modal>
						: null
				}
			</View>
		</>
	);
};
const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modalView: {
		height: "50%",
		width: "90%",
		backgroundColor: "white",
		borderRadius: 20,
		alignItems: "center",
	},
	imagestyle: {
		borderRadius: 130,
		// borderWidth: 3,
		// borderColor: "black",
		height: 90,
		width: 90,
	},
	textstyle: {
		textAlign: "center",
		fontFamily: "BlackHanSans_400Regular",
		color: "white",
		marginTop: 8,
	},
});