import React from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const isIOS = Platform.OS === "ios";

const Container = styled.View`
  padding-left: 20px;
  color: black;
`;

export default () => {
  return (
    <Container>
      <Ionicons name={isIOS ? "ios-arrow-down" : "md-arrow-down"} size={28} />
    </Container>
  );
};
