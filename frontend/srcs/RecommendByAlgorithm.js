import React, { useState } from "react";
import { AskQuestion } from "./AskQuestion";
import { ShowRecommendedFood } from "./ShowRecommendedFood";
import { Button, Text } from "react-native";
import { Setting } from "./Setting";
import { ShowOtherFood } from "./ShowOtherFood";
import { Loading } from "./Loading";

export const RecommendByAlgorithm = ({ navigation }) => {
  const [index, setIndex] = useState(0); //index: 페이지의 인덱스
  const [data, setData] = useState([]);

  function updateIndex(flag) {
    if (flag === true) setIndex(index + 1);
    else setIndex(index - 1);
  }

  if (index < 3) {
    return (
      <>
        <AskQuestion index={index} updateIndex={updateIndex} />
      </>
    );
  } else if (index == 3 && data.length == 0) {
    return (
      <>
        <Loading setData={setData} />
      </>
    );
  } else if (index == 3 && data.length != 0) {
    return (
      <>
        <ShowRecommendedFood
          data={data}
          updateIndex={updateIndex}
          navigation={navigation}
        />
      </>
    );
  } else {
    return (
      <>
        <ShowOtherFood data={data} navigation={navigation} />
      </>
    );
  }
};
