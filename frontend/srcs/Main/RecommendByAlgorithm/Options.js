import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { NextButton } from "./Button";
import { opts } from "../../data/icons";
import { OneOption } from "./OneOption";
import { OptionText } from "./OptionText";

export const Options = ({ index, data, updateIndex, setData, navigation }) => {
    const [answer, setAnswer] = useState([["특별한 날이야?"], ["기분이 어때?"], ["무슨 맛이 땡겨?"]]);

  const selectOption = (array) => {
    const new_answer = answer.slice();
	if (new_answer[index].includes(array[1]))
		new_answer[index].splice(new_answer[index].indexOf(array[1]), 1);
	else
		new_answer[index].push(array[1]);
    setAnswer(new_answer);
  };

  const findSelectedOne = (answer) => {
    if (answer[index].length > 1) {
      let arr = [];
      for (let i = 1; i < 7; i++) {
        if (answer[index].includes(data[i])) arr.push(true);
        else arr.push(false);
      }
      return arr;
    } else return [false, false, false, false, false, false];
  };

  const selectStatus = findSelectedOne(answer);

  return (
    <>
      <View style={{marginTop : '20%'}}>
        <View style={styles.imageRow}>
          <OneOption
            image={opts[index][0]}
            array={[data[0], data[1]]}
            selectOption={selectOption}
            lightEffect={selectStatus[0]}
            imgStyle={styles.image}
          />
          <OneOption
            image={opts[index][1]}
            array={[data[0], data[2]]}
            selectOption={selectOption}
            lightEffect={selectStatus[1]}
            imgStyle={styles.image}
          />
          <OneOption
            image={opts[index][2]}
            array={[data[0], data[3]]}
            selectOption={selectOption}
            lightEffect={selectStatus[2]}
            imgStyle={styles.image}
          />
        </View>
        <View style={styles.textRow}>
          <OptionText lightEffect={selectStatus[0]} text={data[1]} />
          <OptionText lightEffect={selectStatus[1]} text={data[2]} />
          <OptionText lightEffect={selectStatus[2]} text={data[3]} />
        </View>
        <View style={styles.imageRow}>
          <OneOption
            image={opts[index][3]}
            array={[data[0], data[4]]}
            selectOption={selectOption}
            lightEffect={selectStatus[3]}
            imgStyle={styles.image}
          />
          <OneOption
            image={opts[index][4]}
            array={[data[0], data[5]]}
            selectOption={selectOption}
            lightEffect={selectStatus[4]}
            imgStyle={styles.image}
          />
          <OneOption
            image={opts[index][5]}
            array={[data[0], data[6]]}
            selectOption={selectOption}
            lightEffect={selectStatus[5]}
            imgStyle={styles.image}
          />
        </View>
        <View style={styles.textRow}>
			<OptionText lightEffect={selectStatus[3]} text={data[4]} />
			<OptionText lightEffect={selectStatus[4]} text={data[5]} />
			<OptionText lightEffect={selectStatus[5]} text={data[6]} />
        </View>
      </View>
      <View style={styles.nextbutton}>
        <NextButton updateIndex={updateIndex} answer={answer} index={index} setData={setData} navigation={navigation}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
	},
  imageRow: {
    marginTop: "3%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textRow: {
    flexDirection: "row",
    marginTop: "2%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text1: {
    flex: 1,
    fontSize: 16,
    fontFamily: "BlackHanSans_400Regular",
    textAlign: "center",
  },
  text2: {
    flex: 1,
    fontSize: 16,

    fontFamily: "BlackHanSans_400Regular",
    textAlign: "center",
  },
  text3: {
    flex: 1,
    fontSize: 16,

    fontFamily: "BlackHanSans_400Regular",
    textAlign: "center",
  },
  nextbutton: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "30%",
  },
});
