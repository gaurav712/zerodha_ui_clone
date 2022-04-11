import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  TextInput,
} from "react-native";
import { Svg, Path } from "react-native-svg";
import { Feather } from "react-native-vector-icons";
import DialogInput from "react-native-dialog-input";

import OrderEntry from "./OrderEntry";

export default function Orders() {
  const [currentTab, setCurrentTab] = React.useState("Executed");
  const [refreshing, setRefreshing] = React.useState(false);
  const [positionsNum, setPositionsNum] = React.useState(1);
  const [positionsPrompt, setPositionsPrompt] = React.useState(false);
  const [entries, setEntries] = React.useState([""]);

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleContainer}>
          <Text
            onPress={() => {
              setEntries([...entries, ""]);
            }}
            style={styles.header}
          >
            Orders
          </Text>
          <Feather name="chevron-down" size={40} color={"#4c4d58"} />
        </View>
        <View style={styles.navigation}>
          <TouchableOpacity onPress={() => setCurrentTab("Open")}>
            <Text
              style={[
                styles.navigationText,
                {
                  borderBottomWidth: currentTab === "Open" ? 2 : 0,
                  marginLeft: -5,
                  color: currentTab === "Open" ? "#4b88cd" : "#4c4d58",
                },
              ]}
            >
              Open
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCurrentTab("Executed")}
            onLongPress={() => setPositionsPrompt(true)}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DialogInput
                isDialogVisible={positionsPrompt}
                hintInput={"Enter new value"}
                submitInput={(inputText) => {
                  setPositionsNum(inputText);
                  setPositionsPrompt(false);
                }}
                closeDialog={() => {
                  setPositionsPrompt(false);
                }}
              />
              <Text
                style={[
                  styles.navigationText,
                  {
                    borderBottomWidth: currentTab === "Executed" ? 2 : 0,
                    width: 110,
                    color: currentTab === "Executed" ? "#4b88cd" : "#4c4d58",
                  },
                ]}
              >
                Executed
              </Text>
              <Text style={styles.positionsNum}>{positionsNum}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCurrentTab("GTT")}
            onLongPress={() => setPositionsPrompt(true)}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DialogInput
                isDialogVisible={positionsPrompt}
                hintInput={"Enter new value"}
                submitInput={(inputText) => {
                  setPositionsNum(inputText);
                  setPositionsPrompt(false);
                }}
                closeDialog={() => {
                  setPositionsPrompt(false);
                }}
              />
              <Text
                style={[
                  styles.navigationText,
                  {
                    borderBottomWidth: currentTab === "GTT" ? 2 : 0,
                    color: currentTab === "GTT" ? "#4b88cd" : "#4c4d58",
                  },
                ]}
              >
                GTT
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={styles.profitLoss}
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          paddingLeft: 45,
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setTimeout(() => {
                setRefreshing(false);
              }, 800);
            }}
            colors={["#4b88cd"]}
          />
        }
      >
        <Svg
          style={{ position: "absolute", left: 10, top: 15 }}
          width={25}
          height={25}
          viewBox="0 0 1150 1024"
          fill="#9b9aaf"
        >
          <Path d="M969 770 C969 770 969 770 969 770 C976.333 778 980 786.667 980 796 C980 805.333 976.333 813.667 969 821 C961.667 828.333 953.333 832 944 832 C934.667 832 926.333 828.333 919 821 C919 821 713 616 713 616 C713 616 713 616 713 616 C679.667 643.333 642.167 664.833 600.5 680.5 C558.833 696.167 514.667 704 468 704 C468 704 468 704 468 704 C359.333 701.333 268.833 663.833 196.5 591.5 C124.167 519.167 86.667 428.667 84 320 C84 320 84 320 84 320 C86.667 211.333 124.167 120.833 196.5 48.5 C268.833 -23.833 359.333 -61.333 468 -64 C468 -64 468 -64 468 -64 C576.667 -61.333 667.167 -23.833 739.5 48.5 C811.833 120.833 849.333 211.333 852 320 C852 320 852 320 852 320 C852 366.667 844.167 410.833 828.5 452.5 C812.833 494.167 791.333 531.667 764 565 C764 565 970 770 970 770 C970 770 969 770 969 770Z M589 607 C626.333 591.667 659.5 569.5 688.5 540.5 C717.5 511.5 740 478.167 756 440.5 C772 402.833 780 362.667 780 320 C780 277.333 772 237.167 756 199.5 C740 161.833 717.5 128.5 688.5 99.5 C659.5 70.5 626.167 48 588.5 32 C550.833 16 510.667 8 468 8 C425.333 8 385.167 16 347.5 32 C309.833 48 276.5 70.5 247.5 99.5 C218.5 128.5 196 161.833 180 199.5 C164 237.167 156 277.333 156 320 C156 362.667 164 402.833 180 440.5 C196 478.167 218.5 511.5 247.5 540.5 C276.5 569.5 309.833 592 347.5 608 C385.167 624 425.333 632 468 632 C510.667 632 551 623.667 589 607 C589 607 589 607 589 607Z" />
        </Svg>
        <TextInput placeholder="Search eg: infy, reliance" />
      </ScrollView>
      <View style={styles.toolbar}>
        <View style={styles.toolbarItem}>
          <Feather name="sliders" size={16} color="#4b88cd" />
          <Text style={[styles.toolbarItemText, { marginLeft: 8 }]}>
            Filter
          </Text>
        </View>
        <View style={styles.toolbarItem}>
          <Text style={styles.toolbarItemText}> </Text>
        </View>
        <View style={styles.toolbarItem}>
          <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 11.9719C2 17.4631 6.49339 21.9439 12 21.9439C17.5066 21.9439 21.9559 17.4631 22 11.9719C22 6.48079 17.5066 2 12 2C6.49339 2 2 6.48079 2 11.9719ZM6.75772 12.0151C6.75772 9.11572 9.09252 6.74354 12 6.74354C14.8634 6.74354 17.2423 9.07179 17.2423 12.0151C17.2423 14.8705 14.8634 17.2426 12 17.2426C9.13657 17.2426 6.75772 14.9144 6.75772 12.0151Z"
              fill="#2CB9FF"
            />
            <Path
              d="M19.8855 18.0781C18.0793 20.4503 15.2159 21.9439 12 21.9439C6.49339 21.9439 2 17.4631 2 11.9719C2 6.48079 6.49339 2 12 2C15.2159 2 18.0793 3.53753 19.8855 5.86578L16.141 8.72118C15.1718 7.49116 13.674 6.70043 12 6.70043C9.09251 6.70043 6.75771 9.07262 6.75771 11.9719C6.75771 14.8713 9.13656 17.1995 12 17.1995C13.674 17.1995 15.1718 16.4088 16.141 15.1788L19.8855 18.0781Z"
              fill="#0054C6"
            />
          </Svg>

          <Text style={styles.toolbarItemText}>Tradebook</Text>
        </View>
      </View>
      <ScrollView style={{ flex: 1 }}>
        {entries.map((index) => (
          <OrderEntry key={index} />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4c4d58",
    fontFamily: "Inter_400Regular",
  },
  headerContainer: {
    backgroundColor: "#ececee",
    paddingBottom: 64,
  },
  headerTitleContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  positionsNum: {
    backgroundColor: "#7ab0f5",
    color: "white",
    height: 22,
    width: 22,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 10,
    borderRadius: 11,
    marginTop: -9,
    marginLeft: -34,
    fontFamily: "Inter_400Regular",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 22,
    marginBottom: -20,
  },
  navigationText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4c4d58",
    borderColor: "#4b88cd",
    paddingBottom: 10,
    paddingHorizontal: 10,
    fontFamily: "Inter_400Regular",
  },
  profitLoss: {
    zIndex: 1,
    minHeight: 50,
    maxHeight: 50,
    width: "90%",
    marginHorizontal: "5%",
    marginTop: -25,
    //alignItems: "center",
    //justifyContent: "center",
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "black",
    borderRadius: 3,
  },
  profitLossText: {
    fontSize: 14,
    fontWeight: "200",
    opacity: 0.4,
    textAlign: "center",
    fontFamily: "Inter_400Regular",
  },
  profitLossAmount: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Inter_400Regular",
  },
  toolbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 20,
    paddingBottom: 15,
  },
  toolbarItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  toolbarItemText: {
    color: "#4b88cd",
    fontSize: 11,
    marginLeft: 5,
    fontFamily: "Inter_400Regular",
  },
});
