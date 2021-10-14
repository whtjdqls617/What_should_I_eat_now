import React, { useState } from 'react';
import { TextInput, Button, View } from 'react-native';
import { food_name } from './data';
import ShowSearchPreview from './ShowSearchPreview';
import { arrayToObjectsInArray } from './func_change_var_type';

const ShowSearchBar = ({ foodList, setFoodList }) => {

	const [previewFood, setPreviewFood] = useState([]);
	const [value, setValue] = useState("");
	const [buttonOpacity, setButtonOpacity] = useState(0);

	const matchFoodName = (input) => {
		let foodObject = [];
		if (input.length > 0) {
			const food = food_name.filter(food => food.includes(input));
			foodObject = arrayToObjectsInArray(food);
		}
		setPreviewFood(foodObject);
	};

	return (
		<>
			<TextInput placeholder="음식 검색!" value={value} onChangeText={(input) => {
				setValue(input);
				if (input.length > 0)
					setButtonOpacity(100);
				else
					setButtonOpacity(0);
				matchFoodName(input);
			}} />
			<View style={{ opacity: buttonOpacity }}>
				<Button title="x" onPress={() => {
					setButtonOpacity(0);
					setValue("");
				}} />
			</View>
			<ShowSearchPreview input={value} previewFood={previewFood} foodList={foodList} setFoodList={setFoodList} />
		</>
	);
}

export default ShowSearchBar;