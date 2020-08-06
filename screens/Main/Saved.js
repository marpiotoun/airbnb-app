import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const Saved = () => {
  return (
    <Container>
      <Text>Saved</Text>
    </Container>
  );
};

export default Saved;
