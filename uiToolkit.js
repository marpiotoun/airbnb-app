import { Dimensions } from "react-native";

export const buttonCreater = () => {
  const { width, height } = Dimensions.get("screen");
  const buttonWidth = (width / 1.41).toFixed(1);
  const buttonHeight = (buttonWidth / 5).toFixed(1);
  const buttonBorderRadius = (buttonHeight / 3).toFixed(1);
  const buttonFontSize = (buttonHeight / 3.5).toFixed(1);
  return [buttonWidth, buttonHeight, buttonBorderRadius, buttonFontSize];
};

export const color = {
  defaultButton: "#FF5A5F",
  black: "rgb(35,35,35)",
};
