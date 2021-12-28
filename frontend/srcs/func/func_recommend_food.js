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
  let i = 0;
  for (let food in foodInfos) {
    answer.map((tag) => {
      if (foodInfos[food].includes(tag)) {
        if (object[foodNames[i]] === undefined) object[foodNames[i]] = 1;
        else object[foodNames[i]] += 1;
      }
    });
    ++i;
  }

  return object;
};

export const chooseFood = (nominee) => {
  let entries = Object.entries(nominee);
  entries.sort((a, b) => b[1] - a[1]);

  let winners = [];
  const range = entries.length < 5 ? entries.length : 5;
  for (let i = 0; i < range; i++) winners.push(entries[i][0]);

  return winners;
};

export const recommendFood = (answer, setData) => {
  let foodInfos = food;

  if (answer.length == 0) {
    const foodWinners = Array(5)
      .fill(0)
      .map((ele) => randomFood(foodInfos));
    setData(foodWinners);
  } else {
    const keyName = "@food_list";
    const existenceFunc = (keyName, data) => {
      const newFoods = excludeFood(data.disLikeFood, foodInfos);
      const foodNomis = scoreFood(answer, newFoods);
      const foodWinners = chooseFood(foodNomis);
      setData(foodWinners);
    };

    const absenceFunc = (keyName) => {
      const foodNomis = scoreFood(answer, foodInfos);
      const foodWinners = chooseFood(foodNomis);
      setData(foodWinners);
    };

    getDataFromStorage(keyName, existenceFunc, absenceFunc);
  }
};
