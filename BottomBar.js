import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Svg, Path } from "react-native-svg";
import { Feather, FontAwesome } from "react-native-vector-icons";
import { Inter_400Regular } from "@expo-google-fonts/inter";

export default function BottomBar({ screen, setScreen, userName }) {
  return (
    <View style={styles.container}>
      <View style={styles.element}>
        <Feather name="bookmark" size={25} color="#413e4d" />
        <Text style={styles.elementText}>Watchlist</Text>
      </View>
      <TouchableOpacity
        style={styles.element}
        onPress={() => setScreen("Orders")}
      >
        <Feather
          name="book"
          size={25}
          color={screen === "Orders" ? "#4b88cd" : "#413e4d"}
        />
        <Text
          style={[
            styles.elementText,
            {
              color: screen === "Orders" ? "#4b88cd" : "#413e4d",
            },
          ]}
        >
          Orders
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.element}
        onPress={() => setScreen("Portfolio")}
      >
        <Feather
          name="briefcase"
          size={25}
          color={screen === "Portfolio" ? "#4b88cd" : "#413e4d"}
        />
        <Text
          style={[
            styles.elementText,
            {
              color: screen === "Portfolio" ? "#4b88cd" : "#413e4d",
            },
          ]}
        >
          Portfolio
        </Text>
      </TouchableOpacity>
      <View style={styles.element}>
        <Svg width="25" height="25" viewBox="0 0 23 22" fill="none">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.5577 3.02772C15.0747 2.97314 14.5836 2.98896 14.1 3.07708C13.1 3.25927 12.1794 3.74187 11.4607 4.46056C10.742 5.17926 10.2594 6.09992 10.0772 7.09984C9.89501 8.09977 10.0219 9.13147 10.4409 10.0575C10.6125 10.4367 10.5313 10.8825 10.237 11.1768L3.32696 18.0868C3.11667 18.2971 2.99854 18.5823 2.99854 18.8797C2.99854 19.1771 3.11667 19.4623 3.32696 19.6726C3.53725 19.8829 3.82246 20.0011 4.11986 20.0011C4.41725 20.0011 4.70246 19.8829 4.91275 19.6726L11.8227 12.7626C12.1171 12.4683 12.5629 12.3871 12.9421 12.5587C13.8681 12.9777 14.8998 13.1046 15.8997 12.9224C16.8997 12.7402 17.8203 12.2576 18.539 11.5389C19.2577 10.8202 19.7403 9.89956 19.9225 8.89963C20.0106 8.41598 20.0264 7.9249 19.9719 7.44193L17.3999 10.0139C17.026 10.3804 16.5234 10.5856 15.9999 10.5856C15.4763 10.5856 14.9737 10.3803 14.5999 10.0139L14.5927 10.0069L12.9857 8.39977C12.6192 8.02592 12.414 7.52324 12.414 6.99974C12.414 6.47623 12.6193 5.97359 12.9857 5.59974L12.9927 5.59259L15.5577 3.02772ZM13.7415 1.10948C15.1414 0.854411 16.5857 1.03203 17.8821 1.61868C18.1812 1.75402 18.3948 2.02753 18.4537 2.35048C18.5125 2.67344 18.4091 3.00472 18.177 3.23684L14.4141 6.99974L15.9999 8.58552L19.7627 4.82263C19.9949 4.5905 20.3261 4.48709 20.6491 4.54593C20.9721 4.60478 21.2456 4.81838 21.3809 5.11746C21.9676 6.41385 22.1452 7.85824 21.8901 9.25813C21.6351 10.658 20.9594 11.9469 19.9532 12.9531C18.9471 13.9593 17.6581 14.6349 16.2583 14.89C15.0908 15.1027 13.8924 15.0145 12.7747 14.6391L6.32696 21.0868C5.7416 21.6722 4.94768 22.0011 4.11986 22.0011C3.29203 22.0011 2.49811 21.6722 1.91275 21.0868C1.32739 20.5015 0.998535 19.7076 0.998535 18.8797C0.998535 18.0519 1.32739 17.258 1.91275 16.6726L8.36051 10.2249C7.9851 9.10718 7.89688 7.90879 8.10959 6.74134C8.36466 5.34144 9.0403 4.05252 10.0465 3.04635C11.0526 2.04018 12.3416 1.36454 13.7415 1.10948Z"
            fill="#000000cc"
          />
        </Svg>

        <Text style={styles.elementText}>Tools</Text>
      </View>
      <TouchableOpacity
        style={styles.element}
        onPress={() => setScreen("Profile")}
      >
        <Feather
          name="user"
          size={25}
          color={screen === "Profile" ? "#4b88cd" : "#413e4d"}
        />
        <Text
          style={[
            styles.elementText,
            {
              color: screen === "Profile" ? "#4b88cd" : "#413e4d",
            },
          ]}
        >
          {userName}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: "#ffffff",
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: "#000000",
    elevation: 20,
  },
  element: {
    alignItems: "center",
  },
  elementText: {
    fontSize: 11,
    marginTop: 4,
    opacity: 0.75,
    fontFamily: "Inter_400Regular",
  },
});
