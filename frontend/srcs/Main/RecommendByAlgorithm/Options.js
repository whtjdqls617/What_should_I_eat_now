import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { NextButton } from "./Button";
import { opts } from "../../data/icons";
import { OptionImageRow } from "./OptionImageRow";
import { OptionTextRow } from "./OptionTextRow";

export const Options = ({ index, qna, updateIndex, setData, navigation }) => {
  const [answer, setAnswer] = useState([
    ["특별한 날이야?"],
    ["기분이 어때?"],
    ["무슨 맛이 땡겨?"],
  ]);

  const selectOption = ([, option]) => {
    const new_answer = answer.slice();
    if (new_answer[index].includes(option))
      new_answer[index].splice(new_answer[index].indexOf(option), 1);
    else new_answer[index].push(option);
    setAnswer(new_answer);
  };

  const findSelectedOne = (answer) => {
    if (answer[index].length > 1) {
      let array = [];
      for (let i = 1; i < 7; i++) {
        const element = answer[index].includes(qna[i]) ? true : false;
        array.push(element);
      }
      return array;
    } else return Array(6).fill(false);
  };

  const selectStatus = findSelectedOne(answer);

  return (
    <>
      <View style={{ marginTop: "20%" }}>
        <OptionImageRow
          add={0}
          image={opts[index]}
          qna={qna}
          selectOption={selectOption}
          lightEffect={selectStatus}
        />
        <OptionTextRow add={0} lightEffect={selectStatus} qna={qna} />
        <OptionImageRow
          add={3}
          image={opts[index]}
          qna={qna}
          selectOption={selectOption}
          lightEffect={selectStatus}
        />
        <OptionTextRow add={3} lightEffect={selectStatus} qna={qna} />
      </View>
      <View style={styles.nextbutton}>
        <NextButton
          updateIndex={updateIndex}
          answer={answer}
          index={index}
          setData={setData}
          navigation={navigation}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nextbutton: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "20%",
  },
});
