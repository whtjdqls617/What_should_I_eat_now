import React, { useState } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import { food_name, food_image } from '../../data/data';
import { random } from '../../data/icons';
import { HomeButton } from "../HomeButton";


export const RecommendByRandom = ({ navigation }) => {

  const [foodName, setFoodName] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  const headerText = foodName.length > 0 ? "이건 어때?" : "랜덤 추천";
  const foodName_without_space = foodName.replaceAll(' ', '');

  const randomFood = () => {
    const index = Math.floor(Math.random() * food_name.length);
    return food_name[index];
  };


  return (
	  <>
    <HomeButton navigation={navigation} />
    <View style={styles.container}>
      <Text>{headerText}</Text>
      <Image style={{height : 200, width : 200}} source={food_image[foodName_without_space]}/>
      <Text>{foodName}</Text>
      <TouchableOpacity onPress={() => {
        setFoodName(randomFood());
      }}>
        <Image source={random} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        /*
        axios.post()
        .then
        */
        navigation.navigate("Main");
      }}>
		  <Text>결정</Text>
	  </TouchableOpacity>
    </View>
	</>
  );
};

const styles=StyleSheet.create ({
	container : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center'
	}

});