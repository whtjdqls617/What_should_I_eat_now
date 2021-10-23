import React from "react";
import { Options } from "./Options";
import { data } from "../../data/question_data";
import { StyleSheet, Text, View } from "react-native";
import * as Font from 'expo-font';

export const AskQuestion = ({ setData, index, updateIndex, navigation }) => {

  return (
    <View style={styles.container}>
      	<Text style={styles.question}>
		  	{data[index][0]}
		</Text>
      	<Options
			index={index}
			data={data[index]}
			updateIndex={updateIndex}
			setData={setData}
			navigation={navigation}
      	/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  question: {
    fontFamily: "BlackHanSans_400Regular",
    fontSize: 56,
    marginTop: "18%",
    marginLeft: "5%",
  },
});
