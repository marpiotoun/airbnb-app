import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import BackBtn from "../components/Auth/BackBtn";

const Auth = createStackNavigator();

const Navigator = () => {
  return (
    <Auth.Navigator
      mode="modal"
      headerMode="float"
      screenOptions={{
        headerTitleStyle: {
          color: "white",
        },
        headerBackTitleVisible: false,
        headerTransparent: true,
        headerBackImage: () => <BackBtn />,
      }}
    >
      <Auth.Screen
        name="Welcome"
        component={Welcome}
        options={{
          title: "",
        }}
      />
      <Auth.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerTitleStyle: {
            color: "black",
          },
          title: "Sign In",
        }}
      />
      <Auth.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerTitleStyle: {
            color: "black",
          },
          title: "Sign Up",
        }}
      />
    </Auth.Navigator>
  );
};
export default Navigator;
