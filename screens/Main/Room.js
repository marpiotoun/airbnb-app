import React, { useEffect } from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Photos from "../../components/Rooms/RoomPhotos";

const Container = styled.ScrollView`
  flex: 1;
`;

const Title = styled.Text``;
export default ({ route: { params }, navigation }) => {
  const room = useSelector(state =>
    state.room.explore.rooms.find(room => room.id === params?.id)
  );
  useEffect(() => {
    navigation.setOptions({
      title: room.name,
    });
  }, []);
  return (
    <Container
      contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <Photos photos={room.photos} />
      <Title>name: {room.name}</Title>
      <Text>address: {room.address}</Text>
      <Text>price: {room.price}</Text>
      <Text>{room.bathrooms}</Text>
      <Text>{room.bedrooms}</Text>
      <Text>{room.beds}</Text>
      <Text>{room.check_in}</Text>
      <Text>{room.check_out}</Text>
      <Text>{room.instant_book}</Text>
      <Text>{room.user.username}</Text>
    </Container>
  );
};
