import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import Pt from "prop-types";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Photos from "./RoomPhotos";
import { toggleFavApi } from "../../redux/roomsSlice";

const Container = styled.View`
  width: 100%;
  margin-bottom: 50px;
  align-items: flex-start;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  width: 100%;
`;

const Name = styled.Text`
  font-size: 13px;
  margin-bottom: 7px;
`;

const PriceView = styled.View`
  flex-direction: row;
`;

const PriceNumber = styled.Text`
  font-size: 16px;
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

const MarkContainer = styled.View`
  position: absolute;
  z-index: 5;
  padding: 0;
  margin: 0;
  top: -3px;
  right: 0;
`;

const Mark = ({ id, is_fav }) => {
  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(toggleFavApi(id, is_fav));
  };
  return (
    <MarkContainer>
      <TouchableOpacity onPress={handlePress}>
        <Ionicons
          name="ios-bookmark"
          size={30}
          style={{
            borderColor: "black",
            color: is_fav ? "#f71656" : "#614c4d",
          }}
        />
      </TouchableOpacity>
    </MarkContainer>
  );
};
const NavigationContainer = ({ id, children }) => {
  const navigation = useNavigation();
  return (
    <StyledTouchableOpacity
      onPress={() => navigation.navigate("RoomDetail", { id })}
    >
      {children}
    </StyledTouchableOpacity>
  );
};
const RoomCard = ({ id, is_fav, isSuperHost, photos, name, price }) => {
  return (
    <Container>
      <Mark id={id} is_fav={is_fav} />
      <Photos photos={photos} />
      {isSuperHost ? (
        <Superhost>
          <SuperhostText>Superhost</SuperhostText>
        </Superhost>
      ) : null}
      <NavigationContainer id={id}>
        <Name>{name}</Name>
        <PriceView>
          <PriceNumber>${price}</PriceNumber>
          <PriceText> / Day</PriceText>
        </PriceView>
      </NavigationContainer>
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

export default React.memo(RoomCard);
