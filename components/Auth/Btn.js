import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { color, buttonCreater } from "../../uiToolkit";

const [
  buttonWidth,
  buttonHeight,
  buttonBorderRadius,
  buttonFontSize,
] = buttonCreater();

const Text = styled.Text`
  font-weight: bold;
  font-size: ${buttonFontSize}px;
  color: ${props => (props.accent ? "white" : "black")};
`;

const Button = styled.View`
  width: ${buttonWidth}px;
  background-color: ${props =>
    props.accent ? color.defaultButton : "transparent"};
  height: ${buttonHeight}px;
  margin-top: 20px;
  border: ${props => (props.accent ? "transparent" : color.black)};
  border-radius: ${buttonBorderRadius}px;
  justify-content: center;
  align-items: center;
`;

const Btn = ({ onPress, text, accent = false }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Button accent={accent}>
        <Text accent={accent}>{text}</Text>
      </Button>
    </TouchableOpacity>
  );
};

Btn.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  accent: PropTypes.bool,
};

export default Btn;
