import React, { useState } from "react";
import { Text, Button, style, View, StyleSheet } from "react-native";
import { NextButton } from "./Button";
import { opts } from "./icons";
import { ShowOneOption } from "./ShowOneOption";

export const ShowOptions = ({ index, data, updateIndex, setData }) => {
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
        <View style={styles.image1Row}>
          <ShowOneOption
            image={opts[index][3]}
            array={[data[0], data[4]]}
            selectOption={selectOption}
            lightEffect={selectStatus[3]}
            imgStyle={styles.image1}
          />
          <ShowOneOption
            image={opts[index][4]}
            array={[data[0], data[5]]}
            selectOption={selectOption}
            lightEffect={selectStatus[4]}
            imgStyle={styles.image2}
          />
          <ShowOneOption
            image={opts[index][5]}
            array={[data[0], data[6]]}
            selectOption={selectOption}
            lightEffect={selectStatus[5]}
            imgStyle={styles.image3}
          />
        </View>
        <View style={styles.a23Row}>
          <Text style={styles.a23}>{data[4]}</Text>
          <Text style={styles.b}>{data[5]}</Text>
          <Text style={styles.c2}>{data[6]}</Text>
        </View>
      </View>
      <View style={styles.materialButtonDanger22Row}>
        <NextButton updateIndex={updateIndex} answer={answer} index={index} setData={setData}/>
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
    marginTop: "3%",
    height: 87,
    flexDirection: "row",
    justifyContent: "center",
  },
  a23Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 63,
    marginRight: 62,
  },
  a23: {
    fontFamily: "Base",
    color: "#121212",
    height: 22,
    width: 40,
  },
  b: {
    fontFamily: "Base",
    color: "#121212",
    height: 22,
    width: 40,
    marginLeft: 79,
  },
  c2: {
    fontFamily: "Base",
    height: 22,
    width: 40,
    marginLeft: 80,
  },
  materialButtonDanger22Row: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "27%",
  },
});
