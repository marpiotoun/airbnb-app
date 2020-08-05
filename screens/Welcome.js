import React from "react";
import { StatusBar, Text, Button, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { BlurView } from "expo-blur";
import Btn from "../components/Auth/Btn";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: -1;
`;

const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

const BtnContainer = styled.View``;

const Welcome = ({ navigation }) => {
  const goToSignUp = () => navigation.navigate("SignUp");
  const goToSignIn = () => navigation.navigate("SignIn");
  return (
    <Container>
      <BlurView
        intensity={65}
        tint="light"
        style={{
          width: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Logo source={require("../assets/airbnb_logo.png")} />
        <BtnContainer>
          <Btn onPress={goToSignUp} text={"Sign Up"} accent={true} />
          <Btn onPress={goToSignIn} text={"Sign In"} accent={true} />
        </BtnContainer>
      </BlurView>
      <Image source={require("../assets/night_of_hongkong.jpg")} />
      <StatusBar barStyle="dark-content" />
    </Container>
  );
};

export default Welcome;
