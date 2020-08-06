import React, { useEffect } from "react";
import { View } from "react-native";
import styled from "styled-components";
import { getRooms } from "../../redux/roomsSlice";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const Explore = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);
  const explore = useSelector(state => state.room.explore);
  useEffect(() => {
    async function a() {
      await dispatch(getRooms(explore.page, token));
    }
    a();
  }, []);
  return (
    <Container>
      <Text>Explore</Text>
    </Container>
  );
};

export default Explore;
