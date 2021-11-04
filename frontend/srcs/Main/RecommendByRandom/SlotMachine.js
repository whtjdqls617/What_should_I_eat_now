import React, { useState } from 'react';
import { Image, Text } from 'react-native';
import { food_name, food_image } from '../../data/data';
import { loading } from '../../data/icons';

export const SlotMachine = ({ setFoodName }) => {

	const randomFood = () => {
		const index = Math.floor(Math.random() * food_name.length);
		return food_name[index];
	};

	const [index, setIndex] = useState(0);

	let second = 100;
	if (index >= 2 && index < 4)
		second = 150;
	else if (index >= 4 && index < 6)
		second = 300;
	else if (index >= 6)
		second = 500;

	setTimeout(() => {
		if (index == 7) {
			setFoodName(randomFood());
			return (0);
		}
		setIndex(index + 1);
	}, second);

	return (
		<Image style={{ height: 50, width: 50 }} source={loading[index]} />
	);
};
