import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { OtherOptions } from "./OtherOptions";
import YoutubePlayer from "react-native-youtube-iframe";
import { youtubeURLtoID } from "../../func/func_change_var_type";
import { food_image } from "../../data/data";


export const OtherFood = ({ data, navigation }) => {

	const youtube_url = [data.list[1].youtube_url, data.list[2].youtube_url, data.list[3].youtube_url];
	const youtube_id = youtube_url.map(ele => youtubeURLtoID(ele));

	const other_food_name = [data.list[1].name, data.list[2].name, data.list[3].name];
	const other_food_name_without_space = other_food_name.map(ele => ele.replaceAll(' ', ''));
	const other_food_image = other_food_name_without_space.map(ele => food_image[ele]);

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.select}>골라볼래?</Text>
				<View style={styles.img_food_align}>
					<OtherOptions food_image={other_food_image} navigation={navigation} />
				</View>
				<View style={styles.foodnameRow}>
					<Text style={styles.foodname1}>{other_food_name[0]}</Text>
					<Text style={styles.foodname2}>{other_food_name[1]}</Text>
					<Text style={styles.foodname3}>{other_food_name[2]}</Text>
				</View>
				<Text style={styles.youtube}>유튜브 먹방</Text>
				<View style={styles.youtubealign}>
					<Text style={styles.youtubetext}>{other_food_name[0]}</Text>
					<YoutubePlayer height={200} videoId={youtube_id[0]} />
				</View>
				<View style={styles.youtubealign}>
					<Text style={styles.youtubetext}>{other_food_name[1]}</Text>
					<YoutubePlayer height={200} videoId={youtube_id[1]} />
				</View>
				<View style={styles.youtubealign}>
					<Text style={styles.youtubetext}>{other_food_name[2]}</Text>
					<YoutubePlayer height={200} videoId={youtube_id[2]} />
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: '25%'
	},
	foodname1: {
		flex: 1,
		fontFamily: "BlackHanSans_400Regular",
		height: 24,
		width: 88,
		textAlign: "center",
	},
	foodname2: {
		flex: 1,
		fontFamily: "BlackHanSans_400Regular",
		height: 24,
		width: 88,
		textAlign: "center",
	},
	foodname3: {
		flex: 1,
		fontFamily: "BlackHanSans_400Regular",
		height: 24,
		width: 88,
		textAlign: "center",
	},
	foodnameRow: {
		height: 24,
		flexDirection: "row",
		marginTop: "5%",
	},
	select: {
		fontFamily: "BlackHanSans_400Regular",
		fontSize: 56,
		marginLeft: '5%',
	},
	youtube: {
		fontFamily: "BlackHanSans_400Regular",
		fontSize: 30,
		marginTop: "9%",
		marginLeft: '5%',
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
		marginStart: '3%',
		marginBottom: '1.5%'
	},
});
