import React from "react";
import { View, StyleSheet } from "react-native";
import Orders from "./Orders";
import Portfolio from "./Portfolio";
import Profile from "./Profile";
import BottomBar from "./BottomBar";
import Constants from "expo-constants";
import AppLoading from "expo-app-loading";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";

export default function App() {
  const [currentScreen, setCurrentScreen] = React.useState("Orders");
  const [userName, setUserName] = React.useState("QT8151");

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      {currentScreen === "Orders" && <Orders />}
      {currentScreen === "Portfolio" && <Portfolio />}
      {currentScreen === "Profile" && (
        <Profile
          userAlias={userName}
          setUserAlias={(name) => setUserName(name)}
        />
      )}
      <BottomBar
        screen={currentScreen}
        setScreen={(screen) => setCurrentScreen(screen)}
        userName={userName}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
