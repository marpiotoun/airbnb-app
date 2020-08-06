import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { login, logout } from "../redux/usersSlice";
import Auth from "../navigation/Auth";
import Main from "../navigation/Main";
import { NavigationContainer } from "@react-navigation/native";

const Gate = ({ isLoggedIn, login, logout }) => {
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <View
          style={{
            width: "100%",
            flex: 1,
          }}
        >
          <Main />
          <TouchableOpacity onPress={() => logout()}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Auth />
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};
const mapDispatchToProps = {
  login,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gate);
