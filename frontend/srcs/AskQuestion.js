import React from "react";
import { ShowOptions } from "./ShowOptions";
import { data } from "./question_data";
import { StyleSheet, Text, View } from "react-native";
import * as Font from 'expo-font';


export const AskQuestion = ({ setData, index, updateIndex }) => {

  return (
    <View style={styles.container}>
      	<Text style={styles.question}>
		  	{data[index][0]}
		</Text>
      	<ShowOptions
			index={index}
			data={data[index]}
			updateIndex={updateIndex}
			setData={setData}
      	/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  question: {
    fontFamily: "Base",
    color: "#121212",
    fontSize: 56,
    marginTop: 81,
    marginLeft: 9,
    fontWeight: "bold",
  },
});
