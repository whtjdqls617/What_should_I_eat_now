import React from "react";
import { ScrollView, Text, FlatList, StyleSheet} from "react-native";
import { HomeButton } from "../HomeButton";
import { icon_source } from "../../data/data";

export const CreditPage = ({ navigation }) => {

	return (
		<>
		<HomeButton navigation={navigation} />
		<Text style={styles.text0}>아이콘 출처</Text>
		<FlatList
					data={icon_source}
					initialNumToRender={5}
					style={styles.flatlist}
					keyExtractor={( item, index ) => index.toString() }
					renderItem={({ item, index }) => {
						if (index % 2 == 0)
							return (							
								<Text style={styles.text1}>{item}</Text>
							);
						else
							return (
								<Text style={styles.text2}>{item}</Text>
							);
					}}
				/>
		</>
	);

};

const styles = StyleSheet.create({
	flatlist: {
		marginStart: "5%",
		marginTop: "10%"
	},
	text0: {
		marginStart: "5%",
		marginTop: "3%",
		fontSize: 30,
		fontFamily: "BlackHanSans_400Regular",
	},
	text1: {
		marginTop: "3%",
		fontSize: 15,
		fontFamily: "BlackHanSans_400Regular",
	},
	text2: {
		fontSize: 13
	}
});