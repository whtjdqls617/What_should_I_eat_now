import { makeDateString } from "./func_calculate_date";
import { getdataFromStorage } from "./func_data_communication";
import { setDataToStorage } from "./func_data_communication";

export const onPressInLikeSearchPreview = (
  item,
  likeFoodList,
  disLikeFoodList,
  setLikeFoodList
) => {
  if (!likeFoodList.includes(item) && !disLikeFoodList.includes(item)) {
    const newFoodList = likeFoodList.slice();
    newFoodList.push(item);
    setLikeFoodList(newFoodList);
  }
};

export const onPressInDisLikeSearchPreview = (
  item,
  likeFoodList,
  disLikeFoodList,
  setDisLikeFoodList
) => {
  if (!likeFoodList.includes(item) && !disLikeFoodList.includes(item)) {
    const newFoodList = disLikeFoodList.slice();
    newFoodList.push(item);
    setDisLikeFoodList(newFoodList);
  }
};

export const onPressSelectFood = (navigation, foodName) => {
  const firstKeyName = makeDateString();
  const secondKeyName = firstKeyName.substring(0, 8);
  const goToMain = () => navigation.navigate("Main");

  const existenceFunc = (keyName, data) => {
    if (keyName.length > 8) {
      data.push(foodName);
      setDataToStorage(keyName, data, 0);
    } else {
      const key = firstKeyName.substring(1);
      if (data[key] === undefined) data[key] = [];
      data[key].push(foodName);
      setDataToStorage(keyName, data, goToMain);
    }
  };

  const absenceFunc = (ele) => {
    const key = firstKeyName.substring(1);
    let object = {};
    object[key] = [foodName];
    ele.length > 8
      ? setDataToStorage(ele, [foodName], 0)
      : setDataToStorage(ele, object, goToMain);
  };

  getdataFromStorage(firstKeyName, existenceFunc, absenceFunc, 0);
  getdataFromStorage(secondKeyName, existenceFunc, absenceFunc, 0);
};
