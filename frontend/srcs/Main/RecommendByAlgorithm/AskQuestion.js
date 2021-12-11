import React from "react";
import { Options } from "./Options";
import { question_and_answers } from "../../data/question_data";
import { StyleSheet, Text, View } from "react-native";

export const AskQuestion = ({ SignInExpired, setData, index, updateIndex, navigation }) => {

  return (
    <View style={styles.container}>
      	<Text style={styles.question}>
		  	{question_and_answers[index][0]}
		</Text>
      	<Options
		  SignInExpired={SignInExpired}
			index={index}
			qna={question_and_answers[index]}
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
    marginTop: "15%",
    marginLeft: "5%",
  },
});
