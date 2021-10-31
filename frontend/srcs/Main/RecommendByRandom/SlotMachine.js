import React, { useState } from 'react';
import { Image, Text } from 'react-native';
import { food_name, food_image } from '../../data/data';
import { loading } from '../../data/icons';

export const SlotMachine = ({ setFoodName, randomFood }) => {

	const [index, setIndex] = useState(0);

	let second = 100;
	if (index >= 4 && index < 8)
		second = 150;
	else if (index >= 8 && index < 12)
		second = 300;
	else if (index >= 12)
		second = 500;

	setTimeout(() => {
		if (index == 14) {
			setFoodName(randomFood());
			return (0);
		}
		setIndex(index + 1);
	}, second);

	return (
		<Image style={{ height: 50, width: 50 }} source={loading[index]} />
	);
};
