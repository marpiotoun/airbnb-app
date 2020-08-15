import React, { useEffect } from "react";
import styled from "styled-components";
import { setPage, getRooms } from "../../redux/roomsSlice";
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

  const loadMore = () => {
    dispatch(setPage(explore.page + 1));
    return 0;
  };

  useEffect(() => {
    dispatch(setPage(1));
  }, []);

  useEffect(() => {
    async function a() {
      await dispatch(getRooms(explore.page, token));
    }
    a();
  }, [explore.page]);

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
              key={`room${room.id}${Math.round(Math.random() * 10e10)}`}
              id={room.id}
              is_fav={room.is_fav}
              isSuperHost={room.user.superhost}
              photos={room.photos}
              name={room.name}
              price={room.price}
            />
          ))}
          <TouchableOpacity
            onPress={loadMore}
            style={{
              width: "100%",
              alignItems: "center",
              paddingBottom: 10,
              backgroundColor: "#006a70",
            }}
          >
            <Text
              style={{
                paddingTop: 10,
                color: "white",
                alignItems: "center",
              }}
            >
              Load More
            </Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </Container>
  );
};

export default React.memo(Explore);
