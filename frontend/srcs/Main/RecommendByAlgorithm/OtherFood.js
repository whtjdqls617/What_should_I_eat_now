import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { OtherOptions } from "./OtherOptions";
import YoutubePlayer from "react-native-youtube-iframe";
import { youtubeURLtoID } from "../../func/func_change_var_type";

export const OtherFood = ({ data, navigation }) => {
  const tmp = [
    ["카레", "https://reactjs.org/logo-og.png"],
    ["덮밥", "https://reactjs.org/logo-og.png"],
    ["라면", "https://reactjs.org/logo-og.png"],
  ];

  const youtube_id1 = youtubeURLtoID(data.list[1].youtube_url);
  const youtube_id2 = youtubeURLtoID(data.list[2].youtube_url);
  const youtube_id3 = youtubeURLtoID(data.list[3].youtube_url);

//  console.log("youtube_id: ", youtube_id3);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.select}>골라볼래?</Text>
        <View style={styles.img_food_align}>
          <OtherOptions data={tmp} navigation={navigation} />
        </View>
        <View style={styles.foodnameRow}>
          <Text style={styles.foodname1}>{data.list[1].name}</Text>
          <Text style={styles.foodname2}>{data.list[2].name}</Text>
          <Text style={styles.foodname3}>{data.list[3].name}</Text>
          {/* <Text style={styles.foodname1}>곱창</Text>
          <Text style={styles.foodname2}>막창</Text>
          <Text style={styles.foodname3}>대창</Text> */}
        </View>
        <Text style={styles.youtube}>유튜브 먹방</Text>
        <View style={styles.youtubealign}>
          <Text style={styles.youtubetext}>{data.list[1].name}</Text>
          <YoutubePlayer height={200} videoId={youtube_id1} />
        </View>
        <View style={styles.youtubealign}>
          <Text style={styles.youtubetext}>{data.list[2].name}</Text>
          <YoutubePlayer height={200} videoId={youtube_id2} />
        </View>
        <View style={styles.youtubealign}>
          <Text style={styles.youtubetext}>{data.list[3].name}</Text>
          <YoutubePlayer height={200} videoId={youtube_id3} />
        </View>
        {/* <View style={styles.youtubealign}>
          <Text style={styles.youtubetext}>곱창</Text>
          <YoutubePlayer height={200} videoId="S6AWVf0vLgM" />
        </View>
        <View style={styles.youtubealign}>
          <Text style={styles.youtubetext}>막창</Text>
          <YoutubePlayer height={200} videoId="S6AWVf0vLgM" />
        </View>
        <View style={styles.youtubealign}>
          <Text style={styles.youtubetext}>대창</Text>
          <YoutubePlayer height={200} videoId="S6AWVf0vLgM" />
        </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
	marginTop : '25%'
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
	fontSize : 18,
	marginStart : '3%',
	marginBottom : '1.5%'
  },
});
