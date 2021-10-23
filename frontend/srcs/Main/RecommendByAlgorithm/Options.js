import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { NextButton } from "./Button";
import { opts } from "../../data/icons";
import { OneOption } from "./OneOption";

export const Options = ({ index, data, updateIndex, setData, navigation }) => {
    const [answer, setAnswer] = useState([["특별한 날이야?"], ["기분이 어때?"], ["무슨 맛이 땡겨?"]]);

  const selectOption = (array) => {
    const new_answer = answer.slice();
	if (new_answer[index].includes(array[1]))
		new_answer[index].splice(new_answer[index].indexOf(array[1]), 1); //배열.splice(인덱스, 몇 개를 삭제할지 , 뭘 추가할지)
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
            imgStyle={styles.image1}
          />
          <OneOption
            image={opts[index][1]}
            array={[data[0], data[2]]}
            selectOption={selectOption}
            lightEffect={selectStatus[1]}
            imgStyle={styles.image2}
          />
          <OneOption
            image={opts[index][2]}
            array={[data[0], data[3]]}
            selectOption={selectOption}
            lightEffect={selectStatus[2]}
            imgStyle={styles.image3}
          />
        </View>
        <View style={styles.textRow}>
          <Text style={styles.text1}>{data[1]}</Text>
          <Text style={styles.text2}>{data[2]}</Text>
          <Text style={styles.text3}>{data[3]}</Text>
        </View>
        <View style={styles.imageRow}>
          <OneOption
            image={opts[index][3]}
            array={[data[0], data[4]]}
            selectOption={selectOption}
            lightEffect={selectStatus[3]}
            imgStyle={styles.image1}
          />
          <OneOption
            image={opts[index][4]}
            array={[data[0], data[5]]}
            selectOption={selectOption}
            lightEffect={selectStatus[4]}
            imgStyle={styles.image2}
          />
          <OneOption
            image={opts[index][5]}
            array={[data[0], data[6]]}
            selectOption={selectOption}
            lightEffect={selectStatus[5]}
            imgStyle={styles.image3}
          />
        </View>
        <View style={styles.textRow}>
          <Text style={styles.text1}>{data[4]}</Text>
          <Text style={styles.text2}>{data[5]}</Text>
          <Text style={styles.text3}>{data[6]}</Text>
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
  image1: {
    alignItems: "center",
    justifyContent: "center",
  },
  image2: {
    alignItems: "center",
    justifyContent: "center",
  },
  image3: {
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
