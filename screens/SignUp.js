import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { color, buttonCreater } from "../uiToolkit";
import { createAccount } from "../api";
import { isEmail } from "../utils";
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
    email: "",
    first_name: "",
    last_name: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInput = (type, text) => {
    setUserInput({
      ...userInput,
      [type]: text,
    });
  };

  const handleSubmit = async () => {
    const { username, password, email, first_name, last_name } = userInput;
    if (
      username === "" ||
      password === "" ||
      email === "" ||
      first_name === "" ||
      last_name === ""
    ) {
      alert("All fields are required");
      return false;
    }
    if (!isEmail(email)) {
      alert("Invalid Email");
      return false;
    }
    try {
      setLoading(true);
      await createAccount(userInput);
      Alert.alert("성공", "회원가입이 완료되었습니다", [
        {
          text: "OK",
          onPress: () => navigation.navigate("SignIn", { username, password }),
        },
      ]);
    } catch (e) {
      console.warn(e);
    } finally {
      setLoading(false);

      return;
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
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
        <TextInput
          placeholder="Email"
          autoCapitalize={"none"}
          onChangeText={text => handleInput("email", text)}
        />
        <TextInput
          placeholder="First Name"
          value={userInput.first_name}
          onChangeText={text => handleInput("first_name", text)}
        />
        <TextInput
          placeholder="Last Name"
          value={userInput.last_name}
          onChangeText={text => handleInput("last_name", text)}
        />
        <TouchableOpacity onPress={loading ? null : handleSubmit}>
          <Button>
            {loading ? <ActivityIndicator /> : <Text>Sign Up</Text>}
          </Button>
        </TouchableOpacity>
        <StatusBar barStyle="dark-content" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
