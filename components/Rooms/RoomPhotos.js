import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import Swiper from "react-native-web-swiper";
import Pt from "prop-types";

const { height } = Dimensions.get("screen");

const PhotosContainer = styled.View`
  height: ${height / 4}px;
  margin-bottom: 10px;
  width: 100%;
`;

const Photo = styled.Image`
  width: 100%;
  height: 100%;
`;

const Photos = ({ photos }) => {
  return (
    <PhotosContainer>
      {photos?.length === 0 ? (
        <Photo source={require("../../assets/blank.png")} resizeMode="cover" />
      ) : (
        <Swiper
          paginationStyle={{ marginBottom: -10 }}
          dotColor={"grey"}
          activeDotColor={"white"}
        >
          {photos.map(photo => (
            <Photo
              key={`roomCardPhoto${photo.id}`}
              source={{ uri: photo.file }}
            />
          ))}
        </Swiper>
      )}
    </PhotosContainer>
  );
};

Photos.propTypes = {
  photos: Pt.arrayOf(
    Pt.objectOf({
      id: Pt.number.isRequired,
      file: Pt.string.isRequired,
    })
  ).isRequired,
};

export default Photos;
