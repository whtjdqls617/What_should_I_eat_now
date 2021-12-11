import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { OtherOptions } from "./OtherOptions";
import { youtubeURLtoID } from "../../func/func_change_var_type";
import { food_image } from "../../data/data";
import { HomeButton } from "../HomeButton";
import { YoutubeVideos } from "./YoutubeVideos";

export const OtherFood = ({ data, navigation, SignInExpired }) => {

	const youtube_url = [
		data.list[1].youtube_url,
		data.list[2].youtube_url,
		data.list[3].youtube_url,
	];
	const youtube_id = youtube_url.map((ele) => youtubeURLtoID(ele));
	const other_food_name = [
		data.list[1].name,
		data.list[2].name,
		data.list[3].name,
	];
	const other_food_name_without_space = other_food_name.map((foodName) => {
		let foodName_without_space = foodName.slice();
		while (foodName_without_space.includes(" ")) {
			foodName_without_space = foodName_without_space.replace(" ", "");
		}
		return foodName_without_space;
	});
	const other_food_image = other_food_name_without_space.map(
		(ele) => food_image[ele]
	);
	const arrayForMap = Array(3).fill(0);

	return (
		<ScrollView>
			<HomeButton navigation={navigation} />
			<View style={styles.container}>
				<Text style={styles.select}>골라볼래?</Text>
				<View style={styles.img_food_align}>
					<OtherOptions
						SignInExpired={SignInExpired}
						food_name={other_food_name}
						food_image={other_food_image}
						navigation={navigation}
					/>
				</View>
				<View style={styles.foodnameRow}>
					{
						arrayForMap.map((ele, i) => {
							return (
								<Text style={styles.foodname} key={i}>{other_food_name[i]}</Text>
							);
						})
					}
				</View>
				<Text style={styles.youtube}>유튜브 먹방</Text>
				<YoutubeVideos
					other_food_name={other_food_name}
					youtube_id={youtube_id}
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	foodname: {
		flex: 1,
		fontFamily: "BlackHanSans_400Regular",
		textAlign: "center",
	},
	foodnameRow: {
		flexDirection: "row",
		marginTop: "5%",
	},
	select: {
		fontFamily: "BlackHanSans_400Regular",
		fontSize: 56,
		marginLeft: "5%",
	},
	youtube: {
		fontFamily: "BlackHanSans_400Regular",
		fontSize: 30,
		marginTop: "9%",
		marginLeft: "5%",
	},
	img_food_align: {
		height: 96,
		flexDirection: "row",
		marginTop: "8%",
		justifyContent: "space-around",
		alignItems: "center",
	},
	youtubealign: {
		marginTop: "6%",
	},
	youtubetext: {
		fontFamily: "BlackHanSans_400Regular",
		fontSize: 18,
		marginStart: "3%",
	},
});
