import { ObjectsInArrayToArray, arrayToObjectsInArray } from "./func_change_var_type";

export const onPressInLikeSearchPreview = (item, likeFoodList, disLikeFoodList, setLikeFoodList) => {

	const likeFoodArray = ObjectsInArrayToArray(likeFoodList);
	const disLikeFoodArray = ObjectsInArrayToArray(disLikeFoodList);

	if (!likeFoodArray.includes(item.food) && !disLikeFoodArray.includes(item.food)) {
		likeFoodArray.push(item.food);
		const newFoodList = arrayToObjectsInArray(likeFoodArray);
		setLikeFoodList(newFoodList);
	}
};

export const onPressInDisLikeSearchPreview = (item, likeFoodList, disLikeFoodList, setDisLikeFoodList) => {

	const likeFoodArray = ObjectsInArrayToArray(likeFoodList);
	const disLikeFoodArray = ObjectsInArrayToArray(disLikeFoodList);

	if (!likeFoodArray.includes(item.food) && !disLikeFoodArray.includes(item.food)) {
		disLikeFoodArray.push(item.food);
		const newFoodList = arrayToObjectsInArray(disLikeFoodArray);
		setDisLikeFoodList(newFoodList);
	}
};