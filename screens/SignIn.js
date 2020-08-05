import React, { useState } from "react";
import { TouchableOpacity, Text, StatusBar, ScrollView } from "react-native";
import { login } from "../redux/usersSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { color, buttonCreater } from "../uiToolkit";

const [
  buttonWidth,
  buttonHeight,
  buttonBorderRadius,
  buttonFontSize,
] = buttonCreater();

const TextInput = styled.TextInput`
  width: ${buttonWidth}px;
  height: ${buttonHeight}px;
  border: 1px solid gray;
  border-radius: ${buttonBorderRadius}px;
  margin-top: 20px;
  padding: 20px;
`;

const Logo = styled.Image`
  width: 100px;
  height: 100px;
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

const SignIn = ({ navigation }) => {
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleInput = (type, text) => {
    setUserInput({
      ...userInput,
      [type]: text,
    });
  };
  const handleSubmit = () => {
    dispatch(login(userInput.username));
  };

  return (
    <ScrollView
      contentContainerStyle={{
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Logo source={require("../assets/airbnb_logo.png")} />

      <TextInput
        placeholder="ID"
        autoCapitalize={"none"}
        value={userInput.username}
        onChangeText={text => handleInput("username", text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        value={userInput.password}
        onChangeText={text => handleInput("password", text)}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Button>
          <Text>Sign In</Text>
        </Button>
      </TouchableOpacity>
      <StatusBar barStyle="dark-content" />
    </ScrollView>
  );
};

export default SignIn;
