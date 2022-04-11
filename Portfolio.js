import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Svg, Path } from "react-native-svg";
import { Feather } from "react-native-vector-icons";
import DialogInput from "react-native-dialog-input";

import StockEntry from "./StockEntry";

export default function Portfolio() {
  const [currentTab, setCurrentTab] = React.useState("Positions");
  const [profitLoss, setProfitLoss] = React.useState(0.0);
  const [refreshing, setRefreshing] = React.useState(false);
  const [positionsNum, setPositionsNum] = React.useState(1);
  const [holdingsNum, setHoldingsNum] = React.useState(1);
  const [holdingsPrompt, setHoldingsPrompt] = React.useState(false);
  const [positionsPrompt, setPositionsPrompt] = React.useState(false);
  const [profitLossPrompt, setProfitLossPrompt] = React.useState(false);
  const [entries, setEntries] = React.useState([""]);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    let keys = Object.keys(data);
    let sum = 0;
    for (let key in keys) {
      sum = sum + Number(data[keys[key]]);
    }
    setProfitLoss(sum);
  }, [data]);

  function indianNumeric(x) {
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != "") lastThree = "," + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
  }

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
            Portfolio
          </Text>
          <Feather name="chevron-down" size={40} color={"#4c4d58"} />
        </View>
        <View style={styles.navigation}>
          <TouchableOpacity
            onPress={() => setCurrentTab("Holdings")}
            onLongPress={() => setHoldingsPrompt(true)}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DialogInput
                isDialogVisible={holdingsPrompt}
                hintInput={"Enter new value"}
                submitInput={(inputText) => {
                  setHoldingsNum(inputText);
                  setHoldingsPrompt(false);
                }}
                closeDialog={() => {
                  setHoldingsPrompt(false);
                }}
              />
              <Text
                style={[
                  styles.navigationText,
                  {
                    borderBottomWidth: currentTab === "Holdings" ? 2 : 0,
                    width: 110,
                    color: currentTab === "Holdings" ? "#4b88cd" : "#4c4d58",
                  },
                ]}
              >
                Holdings
              </Text>
              <Text
                style={[
                  styles.positionsNum,
                  {
                    backgroundColor:
                      currentTab === "Holdings" ? "#7ab0f5" : "grey",
                  },
                ]}
              >
                {holdingsNum}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCurrentTab("Positions")}
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
                    borderBottomWidth: currentTab === "Positions" ? 2 : 0,
                    width: 110,
                    color: currentTab === "Positions" ? "#4b88cd" : "#4c4d58",
                  },
                ]}
              >
                Positions
              </Text>
              <Text
                style={[
                  styles.positionsNum,
                  {
                    backgroundColor:
                      currentTab === "Positions" ? "#7ab0f5" : "grey",
                  },
                ]}
              >
                {positionsNum}
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
          alignItems: "center",
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
        <Text style={styles.profitLossText}>Total P&L</Text>
        <DialogInput
          isDialogVisible={profitLossPrompt}
          hintInput={"Enter new value"}
          submitInput={(inputText) => {
            setProfitLoss(inputText);
            setProfitLossPrompt(false);
          }}
          closeDialog={() => {
            setProfitLossPrompt(false);
          }}
        />
        <Text
          onPress={() => {
            setProfitLossPrompt(true);
          }}
          style={[
            styles.profitLossAmount,
            { color: profitLoss >= 0 ? "#4caf50" : "#ff5722" },
          ]}
        >
          {profitLoss !== 0 && profitLoss > 0 ? "+" : ""}
          {`${indianNumeric(parseInt(profitLoss))}.${
            Number(profitLoss).toFixed(2).toString().split(".")[1]
          }`}
        </Text>
      </ScrollView>
      <View style={styles.toolbar}>
        <View style={styles.toolbarItem}>
          <Svg
            style={{ marginBottom: -5 }}
            width={16}
            height={16}
            viewBox="0 0 1150 1024"
            fill="#4882db"
          >
            <Path d="M969 770 C969 770 969 770 969 770 C976.333 778 980 786.667 980 796 C980 805.333 976.333 813.667 969 821 C961.667 828.333 953.333 832 944 832 C934.667 832 926.333 828.333 919 821 C919 821 713 616 713 616 C713 616 713 616 713 616 C679.667 643.333 642.167 664.833 600.5 680.5 C558.833 696.167 514.667 704 468 704 C468 704 468 704 468 704 C359.333 701.333 268.833 663.833 196.5 591.5 C124.167 519.167 86.667 428.667 84 320 C84 320 84 320 84 320 C86.667 211.333 124.167 120.833 196.5 48.5 C268.833 -23.833 359.333 -61.333 468 -64 C468 -64 468 -64 468 -64 C576.667 -61.333 667.167 -23.833 739.5 48.5 C811.833 120.833 849.333 211.333 852 320 C852 320 852 320 852 320 C852 366.667 844.167 410.833 828.5 452.5 C812.833 494.167 791.333 531.667 764 565 C764 565 970 770 970 770 C970 770 969 770 969 770Z M589 607 C626.333 591.667 659.5 569.5 688.5 540.5 C717.5 511.5 740 478.167 756 440.5 C772 402.833 780 362.667 780 320 C780 277.333 772 237.167 756 199.5 C740 161.833 717.5 128.5 688.5 99.5 C659.5 70.5 626.167 48 588.5 32 C550.833 16 510.667 8 468 8 C425.333 8 385.167 16 347.5 32 C309.833 48 276.5 70.5 247.5 99.5 C218.5 128.5 196 161.833 180 199.5 C164 237.167 156 277.333 156 320 C156 362.667 164 402.833 180 440.5 C196 478.167 218.5 511.5 247.5 540.5 C276.5 569.5 309.833 592 347.5 608 C385.167 624 425.333 632 468 632 C510.667 632 551 623.667 589 607 C589 607 589 607 589 607Z" />
          </Svg>

          <Text style={[styles.toolbarItemText, { marginRight: 3 }]}>
            Search
          </Text>
        </View>
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
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={14}
            height={14}
            viewBox="0 0 236 162"
            style={{ marginRight: 3 }}
          >
            <Path
              d="M13 0l1 1-1-1m29 0l1 1-1-1m37 0l1 1-1-1m79 0l1 1-1-1m9 0l1 1-1-1m23 0l1 1-1-1M29 1l1 1-1-1m70 0l1 1-1-1m92 0l1 1-1-1M23 2l1 1-1-1m59 0l1 1-1-1m117 0l1 1-1-1m-52 1l1 1-1-1z"
              fill="#fefefe"
              stroke="none"
            />
            <Path
              d="M3 70l4 9 22-6v43h-6l8 44h9l-3.922-32L55 106h2l22.995 25 9.704 14.502 14.257 7.402L118 160c-3.464-12.023-14.873-10.909-19.972-20.105C94.238 133.058 98 119.654 98 112l19 5.363 19-3.564L151 121l-2 7-20-3 1 9 17 1c-3.493 10.924-7.006 24.943 9 25-2.99-10.384-6.504-24.945 9-25 1.445-3.471 4.933-8.098 4.045-12-1.028-4.512-6.494-6.892-5.874-11.985.906-7.435 13.999-8.539 19.829-9.015v18c16.511-.013 19.759-14.687 29.317-24.472C217.067 90.666 225.03 87.178 231 84v-1l-19.397-1.603L207.682 57 153 3c-11.654 3.357-22.273 11.204-33 16.741-22.668 11.702-45.783 23.16-68 35.683C38.16 63.225 18.458 76.664 3 70z"
              fill="#ff5050"
              stroke="none"
            />
            <Path
              d="M171 3l1 1-1-1m17 1l1 1-1-1m-25 1l1 1-1-1m36 2l1 1-1-1m-99 1l1 1-1-1m77 0l-1 2 1-2m-46 3l1 1-1-1m31 0l1 1-1-1M19.667 12.333l.666.334-.666-.334M78 12l1 1-1-1m27 0l1 1-1-1m129 0l1 1-1-1m-48 1l1 1-1-1M28 14l1 1-1-1m187 0l1 1-1-1M53 15l1 1-1-1m140 2l1 1-1-1M87 18l1 1-1-1m25 0l1 1-1-1m114 0l1 1-1-1m-38 3l1 1-1-1m8 0l1 1-1-1M13 22l1 1-1-1m86 1l1 1-1-1m124 0l1 1-1-1M38 24l1 1-1-1m180 2l1 1-1-1M47 28l1 1-1-1m33 0l1 1-1-1m2 0l1 1-1-1M2 29l-1 2 1-2m192 0l1 1-1-1M41 30l1 1-1-1m20 3l1 1-1-1m162 1l1 1-1-1M4 35l1 1-1-1m28 1l1 1-1-1m26 0l1 1-1-1m138 0l1 1-1-1m15 5l1 1-1-1m14 0l1 1-1-1M68 44l1 1-1-1m4 0l1 1-1-1m-3 2l1 1-1-1m162 0l1 1-1-1m-20 1l1 1-1-1m-10 2l1 1-1-1M28 53l1 1-1-1m191 3l1 1-1-1M13 63l1 1-1-1m210 2l1 1-1-1m-12 4l1 1-1-1M9 70l1 1-1-1m203 3l1 1-1-1M28 77l1 1-1-1m185 0l1 1-1-1m10 2l1 1-1-1m4 1l1 1-1-1M24 81l1 1-1-1m195 0l1 1-1-1M11 82l1 1-1-1m8 2l1 1-1-1m7 0l1 1-1-1M6 85l1 1-1-1m2 5l1 1-1-1m218 3l1 1-1-1M20 96l1 1-1-1z"
              fill="#fefefe"
              stroke="none"
            />
            <Path
              d="M46 96l1 1-1-1m3.667 1.333l.666.334-.666-.334m3 1l.666.334-.666-.334z"
              fill="#fff"
              stroke="none"
            />
            <Path d="M14 99l1 1-1-1z" fill="#fefefe" stroke="none" />
            <Path
              d="M55.667 99.333l.666.334-.666-.334z"
              fill="#fff"
              stroke="none"
            />
            <Path
              d="M223 101l1 1-1-1m-167 5l1 1-1-1m174 4l1 1-1-1m3 0l1 1-1-1m-178 2l1 1-1-1m81 1l1 1-1-1m72 0l1 1-1-1m-188 1l1 1-1-1m202 0l1 1-1-1m-99 3l1 1-1-1m-23 1l1 1-1-1m127 3l1 1-1-1m-113 1l1 1-1-1m-53 1l1 1-1-1m162 1l1 1-1-1M4 126l1 1-1-1m62 1l1 1-1-1m32 0l1 1-1-1m113 1l1 1-1-1m-101 2l1 1-1-1m15.333.667l.334.666-.334-.666M210 131l1 1-1-1m17 0l1 1-1-1m-127 1l1 1-1-1m-90 1l1 1-1-1m174 1l1 1-1-1M6 135l1 1-1-1m74 0l1 1-1-1m-7 1l1 1-1-1m42.667.333l.666.334-.666-.334M175 136l1 1-1-1m-152 1l1 1-1-1m141 0l1 1-1-1m56 0l1 1-1-1m-109 1l1 1-1-1m109 1l1 1-1-1m-147 1l1 1-1-1m133 0l1 1-1-1m-163 4l1 1-1-1m86 0l1 1-1-1m-104 1l1 1-1-1m101 1l1 1-1-1m108 0l1 1-1-1m-148 1l1 1-1-1m67 0l1 1-1-1m35 0l1 1-1-1m-101 2l1 1-1-1m40 1l1 1-1-1m79 2l1 1-1-1m-150 2l1 1-1-1m34 0l1 1-1-1m96 3l1 1-1-1m12 0l1 1-1-1m-96 2l1 1-1-1m123 0l1 1-1-1m-7 2l1 1-1-1z"
              fill="#fefefe"
              stroke="none"
            />
          </Svg>

          <Text style={styles.toolbarItemText}>Analyze</Text>
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

          <Text style={styles.toolbarItemText}>Analytics</Text>
        </View>
      </View>
      <ScrollView style={{ flex: 1 }}>
        {entries.map((index) => (
          <StockEntry key={index} data={data} updateData={(d) => setData(d)} />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
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
    marginLeft: -35,
    fontFamily: "Inter_400Regular",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "15%",
    marginTop: 22,
    marginBottom: -10,
  },
  navigationText: {
    fontSize: 13.5,
    fontWeight: "bold",
    color: "#4c4d58",
    borderColor: "#4b88cd",
    paddingBottom: 10,
    paddingHorizontal: 10,
    fontFamily: "Inter_400Regular",
  },
  profitLoss: {
    zIndex: 1,
    minHeight: "10%",
    maxHeight: "10%",
    width: "90%",
    marginHorizontal: "5%",
    marginTop: "-10%",
    //alignItems: "center",
    //justifyContent: "center",
    backgroundColor: "white",
    elevation: 3,
    shadowColor: "black",
    borderRadius: 3,
  },
  profitLossText: {
    fontSize: 13,
    fontWeight: "200",
    opacity: 0.4,
    textAlign: "center",
    fontFamily: "Inter_400Regular",
  },
  profitLossAmount: {
    fontSize: 17,
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
