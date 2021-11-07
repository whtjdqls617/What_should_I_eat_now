
export const onPressInLikeSearchPreview = (item, likeFoodList, disLikeFoodList, setLikeFoodList) => {

	if (!likeFoodList.includes(item) && !disLikeFoodList.includes(item)) {
		const newFoodList = likeFoodList.slice();
		newFoodList.push(item);
		setLikeFoodList(newFoodList);
	}
};

export const onPressInDisLikeSearchPreview = (item, likeFoodList, disLikeFoodList, setDisLikeFoodList) => {

	if (!likeFoodList.includes(item) && !disLikeFoodList.includes(item)) {
		const newFoodList = disLikeFoodList.slice();
		newFoodList.push(item);
		setDisLikeFoodList(newFoodList);
	}
};