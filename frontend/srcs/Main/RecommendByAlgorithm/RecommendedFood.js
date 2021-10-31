import React from "react";
import {
	Image,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { selectFood } from "../../func/func_data_communication";
import { ip, food_image } from "../../data/data";
import YoutubePlayer from "react-native-youtube-iframe";
import { youtubeURLtoID } from "../../func/func_change_var_type";

export const RecommendedFood = ({ data, updateIndex, navigation }) => {

	const food_name = data.list[0].name;

	let food_name_without_space = food_name.slice();
	while (food_name_without_space.includes(' ')) {
	  food_name_without_space = food_name_without_space.replace(' ', ''); 
	}
	const youtube_id = youtubeURLtoID(data.list[0].youtube_url);

	return (
		<ScrollView style={{ width: "100%" }}>
			<View style={styles.container}>
				<Text style={styles.title}>이걸로 결정?</Text>
				<Image
					source={food_image[food_name_without_space]}
					resizeMode="contain"
					style={styles.img_recommend_food}
				/>
				<Text style={styles.foodname}>{food_name}</Text>
				<View style={styles.button_align}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => selectFood(`${ip}/question`, food_name, navigation)}
					>
						<Text style={styles.buttonText}>응!</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={() => updateIndex(true)}
					>
						<Text style={styles.buttonText}>고민좀...</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.youtube}>유튜브 먹방</Text>
			</View>
			<View style={styles.youtubealign}>
				<YoutubePlayer height={270} videoId={youtube_id} />
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		marginTop: '15%'
	},
	title: {
		textAlign: 'center',
		fontFamily: "BlackHanSans_400Regular",
		height: 49,
		width: 207,
		fontSize: 40,
		marginTop: 92,
	},
	foodname: {
		fontSize: 25,
		fontFamily: "BlackHanSans_400Regular",
		height: 22,
		width: 126,
		marginTop: 30,
		justifyContent: "center",
		textAlign: "center",
	},
	button_align: {
		justifyContent: 'center',
		flexDirection: 'row',
		marginTop: '10%',
		width: '50%',
		alignItems: "center",
	},
	button: {
		margin: "10%",
		backgroundColor: "orange",
		alignItems: "center",
		height: 55,
		width: 100,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
	},
	img_recommend_food: {
		borderWidth: 3,
		borderRadius: 140,
		width: 242,
		height: 242,
		marginTop: '14%',
	},
	youtube: {
		width: 200,
		fontFamily: "BlackHanSans_400Regular",
		fontSize: 30,
		textAlign: "center",
		marginTop: "12%",
	},
	youtubealign: {
		marginTop: "6%",
	},
	buttonText: {
		fontSize: 20,
		color: "white",
		fontFamily: "BlackHanSans_400Regular",
	}
});
