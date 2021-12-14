import React from "react";
import { OneOtherOption } from "./OneOtherOption";

export const OtherOptions = ({ food_name, food_image, navigation }) => {
  const arrayForMap = Array(3).fill(0);

  return (
    <>
      {arrayForMap.map((ele, i) => (
        <OneOtherOption
          key={i}
          name={food_name[i]}
          image={food_image[i]}
          navigation={navigation}
        />
      ))}
    </>
  );
};
