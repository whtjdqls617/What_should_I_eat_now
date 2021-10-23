import React from "react";
import { Options } from "./Options";
import { data } from "../../data/question_data";
import { StyleSheet, Text, View } from "react-native";
import * as Font from 'expo-font';

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      navigation={navigation}
=======
			navigation={navigation}
>>>>>>> Stashed changes
      	/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	justifyContent : 'center'
  },
  question: {
<<<<<<< Updated upstream
    fontFamily: "BlackHanSans_400Regular",
    color: "#121212",
=======
    fontFamily: "Base",
>>>>>>> Stashed changes
    fontSize: 56,
	marginTop : '18%',
	marginLeft : '5%'
  },
});
