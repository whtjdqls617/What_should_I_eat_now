import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { NextButton } from "./NextButton";
import { opts } from "../../data/icons";
import { OptionImageRow } from "./OptionImageRow";
import { OptionTextRow } from "./OptionTextRow";
import { question_and_answers } from "../../data/question_data";

export const Options = ({ index, qna, updateIndex, setData, navigation }) => {
  const [answer, setAnswer] = useState([]);

  const selectOption = (tag) => {
    const new_answer = answer.slice();
    if (new_answer.includes(tag)) new_answer.splice(new_answer.indexOf(tag), 1);
    else new_answer.push(tag);
    setAnswer(new_answer);
  };

  const findSelectedOne = (answer) => {
    let array = [];
    for (let i = 1; i < 7; i++) {
      const element = answer.includes(qna[i]) ? true : false;
      array.push(element);
    }
    return array.length > 0 ? array : Array(6).fill(false);
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
