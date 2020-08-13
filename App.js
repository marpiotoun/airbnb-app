import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistor } from "./redux/store";
import Gate from "./components/Gate";

const cacheImages = images => {
  return images.map(image => {
    if (typeof image === String) {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

const cacheFonts = fonts => {
  return fonts.map(font => {
    Font.loadAsync(font);
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    const images = [
      require("./assets/loginBackground.jpg"),
      require("./assets/loginBg.jpg"),
      require("./assets/night_of_hongkong.jpg"),
      require("./assets/airbnb_logo.png"),
      require("./assets/blank.png"),
    ];
    const fonts = [Ionicons.font];
    return Promise.all(...cacheImages(images), ...cacheFonts(fonts));
  };
  return isReady ? (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={styles.container}>
          <Gate />
        </View>
      </PersistGate>
    </Provider>
  ) : (
    <AppLoading
      onError={console.error}
      onFinish={() => setIsReady(true)}
      startAsync={loadAssets}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
