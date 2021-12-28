import React from "react";

export const checkNickname = (nickname) => {
  if ((nickname.length < 9 && nickname.length > 1) || nickname.length == 0)
    return true;
  else return false;
};
