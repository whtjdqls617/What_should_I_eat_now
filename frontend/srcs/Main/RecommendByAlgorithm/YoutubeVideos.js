import React from "react";
import { View, Text, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export const YoutubeVideos = ({ other_food_name, youtube_id }) => {

	const arrayForMap = Array(3).fill(0);

	return (
		<>
			{arrayForMap.map((ele, i) => {
          return (
            <View key={i} style={styles.youtubealign}>
              <Text key={i + 3} style={styles.youtubetext}>
                {other_food_name[i]}
              </Text>
              <YoutubePlayer key={i + 6} height={230} videoId={youtube_id[i]} webViewStyle={{opacity: 0.99}}/>
            </View>
          );
        })}
		</>
	);

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: "5%",
	},
	foodname: {
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
		marginBottom: "1.5%",
	},
});
