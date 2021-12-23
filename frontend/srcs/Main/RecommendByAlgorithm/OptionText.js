import React from "react";
import { StyledText } from "../../style";

export const OptionText = ({ lightEffect, text }) => {
  return <StyledText lightEffect={lightEffect}>{text}</StyledText>;
};
