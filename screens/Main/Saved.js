import React, { useEffect, useState } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";
import { loadFavs } from "../../redux/roomsSlice";
import RoomCard from "../../components/Rooms/RoomCard";

const Container = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const NoneText = styled.Text`
  margin: auto auto;
  font-size: 20px;
  color: gray;
`;
const Saved = ({ favs, loadFavs }) => {
  useEffect(() => {
    loadFavs();
  }, []);

  return (
    <Container>
      {favs.length === 0 ? (
        <NoneText>Room does not exists.</NoneText>
      ) : (
        <ScrollView
          style={{ width: "100%", marginTop: 100 }}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        >
          {favs.map(room => (
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
        </ScrollView>
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  favs: state.room.favs,
});
const mapDispatchToProps = { loadFavs };

export default connect(mapStateToProps, mapDispatchToProps)(Saved);
