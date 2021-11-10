import React, { useState } from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { food_name, food_image } from "../../data/data";
import { HomeButton } from "../HomeButton";
import { DecisionButton } from "./DecisionButton";
import { PushButton } from "./PushButton";
import { SlotMachine } from "./SlotMachine";

export const RecommendByRandom = ({ navigation, route}) => {

	const SignInExpired = route.params;
	const [foodName, setFoodName] = useState("");
	const headerText = foodName.length > 0 ? "이건 어때?" : "랜덤 추천";

	let foodName_without_space = foodName.slice();
	while (foodName_without_space.includes(" ")) {
		foodName_without_space = foodName_without_space.replace(" ", "");
	}

	return (
		<>
			<HomeButton navigation={navigation} />
			<View style={styles.container}>
				<Text style={styles.title}>{headerText}</Text>
				{
					foodName.length > 0 ?
						<>
							<View style={{flex : 0.9}}>
								<Image
									style={styles.img_recommend_food}
									source={food_image[foodName_without_space]}
								/>
							</View>
							<Text style={styles.foodname}>{foodName}</Text>
							<PushButton setFoodName={setFoodName} />
							<View style={{ flex: 0.6, marginTop: '5%' }}>
								<DecisionButton navigation={navigation} SignInExpired={SignInExpired} foodName={foodName} />
							</View>
						</>
						:
				<>
				<View style={{flex : 0.2, marginBottom : '30%'}}>
					<SlotMachine
						setFoodName={setFoodName}
					/>
					</View>
					<Text
						style={{
							textAlign: "center",
							fontFamily: "BlackHanSans_400Regular",
							height: 49,
							width: 207,
							fontSize: 25,
							marginTop: '5%',
							color: 'white'
						}}>
						{foodName}
					</Text>
					<TouchableOpacity
						style={{ marginTop: '7%', borderRadius: 130, backgroundColor: 'white' }}>
					</TouchableOpacity>
				</>
				}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: '18%'
	},
	img_recommend_food: {
		borderWidth: 3,
		borderRadius: 140,
		borderColor: 'black',
		width: 242,
		height: 242,
	},
	title: {
		flex: 0.3,
		textAlign: "center",
		fontFamily: "BlackHanSans_400Regular",
		fontSize: 45,
	},
	foodname: {
		textAlign: "center",
		fontFamily: "BlackHanSans_400Regular",
		height: 49,
		width: 207,
		fontSize: 25,
		marginTop: '5%',
		color : 'black'
	},
	button: {
		margin: "10%",
		backgroundColor: "orange",
		alignItems: "center",
		height: 55,
		width: 100,
		justifyContent: "center",
		borderRadius: 30,
	},
	buttonText: {
		fontSize: 20,
		color: "white",
		fontFamily: "BlackHanSans_400Regular",
	},
});
