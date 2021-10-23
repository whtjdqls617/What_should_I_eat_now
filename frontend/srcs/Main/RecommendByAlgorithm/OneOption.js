import { TouchableOpacity } from "react-native";
import React from "react";
import { StyledImage } from "../../style";

export const OneOption = ({ array, image, selectOption, lightEffect, imgStyle }) => {

  const onPress = () => {
    selectOption(array);

  };

  return (
		<>
			<TouchableOpacity onPress={onPress}>
				<StyledImage source={image} lightEffect={lightEffect} style={imgStyle}/>
			</TouchableOpacity>
		</>
  );
}
