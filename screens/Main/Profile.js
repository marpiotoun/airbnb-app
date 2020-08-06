import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const Profile = () => {
  return (
    <Container>
      <Text>Profile</Text>
    </Container>
  );
};

export default Profile;
