import React, { useEffect } from "react";
import styled from "styled-components";
import { getRooms } from "../../redux/roomsSlice";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, ActivityIndicator, Dimensions } from "react-native";
import RoomCard from "../../components/Rooms/RoomCard";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
const SearchBar = styled.View`
  top: 10%;
  width: 95%;
  height: 7%;
  padding-left: 20px;
  background-color: whitesmoke;
  border-radius: ${Math.round(height / 50)}px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
  z-index: 10;
  justify-content: center;
`;

const SearchBarText = styled.Text`
  font-size: 16px;
  font-weight: 300;
`;

const Explore = () => {
  const dispatch = useDispatch();

  const token = useSelector(state => state.user.token);
  const rooms = useSelector(state => state.room.explore.rooms);
  const explore = useSelector(state => state.room.explore);

  useEffect(() => {
    async function a() {
      await dispatch(getRooms(explore.page, token));
    }
    a();
  }, []);
  return (
    <Container>
      <SearchBar>
        <SearchBarText>Lets Search</SearchBarText>
      </SearchBar>
      {rooms.length === 0 ? (
        <ActivityIndicator color="black" />
      ) : (
        <ScrollView
          style={{ width: "100%", marginTop: 100 }}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        >
          {rooms.map(room => (
            <RoomCard
              key={room.id}
              id={room.id}
              is_fav={room.is_fav}
              isSuperHost={room.user.superhost}
              photos={room.photos}
              name={room.name}
              price={room.price}
            />
          ))}
          <TouchableOpacity>
            <Text>Load more rooms</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </Container>
  );
};

export default Explore;
