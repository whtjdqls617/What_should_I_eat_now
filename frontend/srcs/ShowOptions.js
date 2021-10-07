import React, { useState } from "react";
import { Text, Button, style, View, StyleSheet } from "react-native";
import { NextButton } from "./Button";
import { opts } from "./icons";
import ShowOneOption from "./ShowOneOption";

export default function ShowOptions({ index, data, updateIndex }) {
  const [answer, setAnswer] = useState([0, 0, 0]);

  const selectOption = (array) => {
    const new_answer = answer.slice();
    if (index < new_answer.length) new_answer.splice(index, 1, array);
    else new_answer.push(array);
    setAnswer(new_answer);
  };

  const findSelectedOne = (answer) => {
    if (answer[index] != 0) {
      let arr = [];
      for (let i = 1; i < 4; i++) {
        if (answer[index][1] == data[i]) arr.push(true);
        else arr.push(false);
      }
      return arr;
    } else return [false, false, false];
  };

  const selectStatus = findSelectedOne(answer);

  return (
    <>
      <View style={styles.image1Row}>
        <ShowOneOption
          image={opts[index][0]}
          array={[data[0], data[1]]}
          selectOption={selectOption}
          lightEffect={selectStatus[0]}
          imgStyle={styles.image1}
        />
        <ShowOneOption
          image={opts[index][1]}
          array={[data[0], data[2]]}
          selectOption={selectOption}
          lightEffect={selectStatus[1]}
          imgStyle={styles.image2}
        />
        <ShowOneOption
          image={opts[index][2]}
          array={[data[0], data[3]]}
          selectOption={selectOption}
          lightEffect={selectStatus[2]}
          imgStyle={styles.image3}
        />
      </View>
      <View style={styles.a23Row}>
			  <Text style={styles.a23}>{data[1]}</Text>
			  <Text style={styles.b}>{data[2]}</Text>
			  <Text style={styles.c2}>{data[3]}</Text>
			</View>
      <View style={styles.materialButtonDanger22Row}>
        <NextButton updateIndex={updateIndex} answer={answer} index={index} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image1: {
    width: 87,
    height: 87,
  },
  image2: {
    width: 87,
    height: 87,
    marginLeft: 29,
  },
  image3: {
    width: 87,
    height: 87,
    marginLeft: 32,
  },
  image1Row: {
    height: 87,
    flexDirection: "row",
	justifyContent: 'center',
    marginTop: 131,
  },
  a23Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 63,
    marginRight: 62
  },
  a23: {
   color: "#121212",
   height: 22,
   width: 40
 },
 b: {
   color: "#121212",
   height: 22,
   width: 40,
   marginLeft: 79
 },
 c2: {
   height: 22,
   width: 40,
   marginLeft: 80
 },
 materialButtonDanger22Row: {
  height: 50,
  flexDirection: "row",
  justifyContent : 'space-around',
  marginTop: 200,
}
});
