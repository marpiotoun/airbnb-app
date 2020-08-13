import React from "react";
import { Text, Dimensions } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import Pt from "prop-types";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  width: 100%;
  margin-bottom: 50px;
  align-items: flex-start;
`;

const Name = styled.Text`
  font-size: 13px;
  margin-bottom: 7px;
`;

const PriceView = styled.View`
  flex-direction: row;
`;

const PriceNumber = styled.Text`
  font-weight: 600;
`;

const PriceText = styled.Text`
  font-size: 16px;
`;

const Superhost = styled.View`
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 5px;
`;

const SuperhostText = styled.Text`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 10px;
`;

const PhotosContainer = styled.View`
  height: ${height / 4}px;
  margin-bottom: 10px;
  width: 100%;
`;

const Photo = styled.Image`
  width: 100%;
  height: 100%;
`;

const RoomCard = ({ id, is_fav, isSuperHost, photos, name, price }) => {
  return (
    <Container>
      <PhotosContainer>
        {photos?.length === 0 ? (
          <Photo
            source={require("../../assets/blank.png")}
            resizeMode="cover"
          />
        ) : (
          <Swiper
            paginationStyle={{ marginBottom: -10 }}
            dotColor={"grey"}
            activeDotColor={"white"}
          >
            {photos.map(photo => (
              <Photo key={photo.id} source={{ uri: photo.file }} />
            ))}
          </Swiper>
        )}
      </PhotosContainer>
      {isSuperHost ? (
        <Superhost>
          <SuperhostText>Superhost</SuperhostText>
        </Superhost>
      ) : null}
      <Name>{name}</Name>
      <PriceView>
        <PriceNumber> {price}</PriceNumber>
        <PriceText> per Night</PriceText>
      </PriceView>
    </Container>
  );
};

RoomCard.propTypes = {
  id: Pt.number.isRequired,
  is_fav: Pt.bool.isRequired,
  isSuperHost: Pt.bool.isRequired,
  photos: Pt.arrayOf(
    Pt.shape({
      file: Pt.string,
    })
  ),
  name: Pt.string.isRequired,
  price: Pt.number.isRequired,
};

export default RoomCard;
