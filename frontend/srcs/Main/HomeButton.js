import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { home } from '../data/icons';

export const HomeButton = ({ navigation }) => {

    return (
        <>
			<TouchableOpacity onPress={() => navigation.navigate("Main")}>
				<Image style={{height : 30, width : 30}} source={home}/>
      	 	</TouchableOpacity>
		</>
    );
};