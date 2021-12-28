import React from "react";

export const arrayToObjectsInArray = (array) => {
  const objectsInArray = array.map((ele, i) => {
    let object = {};
    object.food = ele;
    object.id = `${i}`;
    return object;
  });
  return objectsInArray;
};

export const ObjectsInArrayToArray = (objectsInArray) => {
  const array = objectsInArray.map((object) => object.food);
  return array;
};

export const arrayToObject = (array) => {
  let object = {};
  object.nickName = array[0];
  object.email = array[1];
  object.password = array[2];
  return object;
};
