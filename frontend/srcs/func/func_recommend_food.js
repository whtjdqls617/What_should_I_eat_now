import { food } from "../data/food";
import { getDataFromStorage } from "./func_data_communication";

export const randomFood = (foodInfos) => {
	const foodNames = Object.keys(foodInfos);
	const index = Math.floor(Math.random() * foodNames.length);
	return foodNames[index];
};

export const excludeFood = (disLikeFood, foodInfos) => {
	for (let i = 0; i < disLikeFood.length; i++) {
		delete foodInfos[disLikeFood[i]];
	}
	return foodInfos;
};

export const scoreFood = (answer, foodInfos) => {

	let object = {};
	const foodNames = Object.keys(foodInfos);

	foodInfos.map((foodInfo, i) => {
		answer.map(tag => {
			if (foodInfo.includes(tag))
				object[foodNames[i]] = object[foodNames[i]] === undefined ? 1 : object[foodNames[i]] + 1;
		})
	});

	return object;
}

export const chooseFood = (nominee) => {

	let entries = Object.entries(nominee);
	entries.sort((a, b) => b[1] - a[1]);

	let winners = [];
	const range = entries.length < 5 ? entries.length : 5;
	for (let i = 0; i < range; i++)
		winners.push(entries[i][0])

	return winners;

};

export const recommendFood = ({ answer }) => {

let array = [];
let foodInfos = food;

if (answer.length == 0) {
	return Array(5).fill(0).map(ele => randomFood());
}

const keyName = "@food_list";
const existenceFunc = (keyName, data) => {
	foodInfos = excludeFood(data.disLikeFood, foodInfos);
	foodNomis = scoreFood(answer, foodInfos);
	return chooseFood(foodNomis);
};

const absenceFunc = (keyName) => {
	foodNomis = scoreFood(answer, foodInfos);
	return chooseFood(foodNomis);
};

getDataFromStorage(keyName, existenceFunc, absenceFunc);

}