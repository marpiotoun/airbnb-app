import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { color } from "../uiToolkit";
import { Ionicons } from "@expo/vector-icons";
import Explore from "../screens/Main/Explore";
import MapScreen from "../screens/Main/MapScreen";
import Profile from "../screens/Main/Profile";
import Saved from "../screens/Main/Saved";
import Room from "../screens/Main/Room";
import BackBtn from "../components/Auth/BackBtn";
const Tab = createBottomTabNavigator();
const Main = createStackNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: color.defaultButton,
        labelStyle: {
          textTransform: "uppercase",
          fontWeight: "600",
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          const isIOS = Platform.OS === "ios";
          let iconName = isIOS ? "ios-" : "md-";
          if (route.name === "Explore") {
            iconName += "search";
          } else if (route.name === "MapScreen") {
            iconName += "map";
          } else if (route.name === "Profile") {
            iconName += "person";
          } else if (route.name === "Saved") {
            iconName += "bookmark";
          }
          return <Ionicons name={iconName} size={22} />;
        },
      })}
    >
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Saved" component={Saved} />
      <Tab.Screen name="MapScreen" component={MapScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default () => {
  return (
    <Main.Navigator mode="modal">
      <Main.Screen
        name="List"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
      <Main.Screen
        name="RoomDetail"
        component={Room}
        options={{
          title: "Room detail",
          headerBackTitleVisible: false,
          headerBackImage: () => <BackBtn />,
        }}
      />
    </Main.Navigator>
  );
};
