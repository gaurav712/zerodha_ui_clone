import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import DialogInput from "react-native-dialog-input";
import { Feather } from "react-native-vector-icons";

export default function StockEntry() {
  const [quantity, setQuantity] = React.useState("50 / 50");
  const [mis, setMis] = React.useState("BUY");
  const [niftyText, setNiftyText] = React.useState("NIFTY NOV 17550 PE");
  const [profitText, setProfitText] = React.useState(0);
  const [nfoText, setNfoText] = React.useState("NFO");
  const [ltpText, setLtpText] = React.useState("1 min ago");
  const [quantityPrompt, setQuantityPrompt] = React.useState(false);
  const [niftyPrompt, setNiftyPrompt] = React.useState(false);
  const [profitPrompt, setProfitPrompt] = React.useState(false);
  const [ltpPrompt, setLtpPrompt] = React.useState(false);
  const [misNrml, setMisNrml] = React.useState("MIS");
  const [misMarketLimit, setMisMarketLimit] = React.useState("MARKET");

  function indianNumeric(x) {
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != "") lastThree = "," + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
  }

  return (
    <View style={styles.container}>
      <View style={styles.columnView}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              setMis(mis === "SELL" ? "BUY" : "SELL");
            }}
          >
            <Text
              style={{
                width: 40,
                textAlign: "center",
                paddingVertical: 2.25,
                fontSize: 11.4,
                fontFamily: "Inter_400Regular",
                backgroundColor: mis === "SELL" ? "#f6ecea" : "#eaf1fa",
                color: mis === "SELL" ? "#c08587" : "#7e95c5",
              }}
            >
              {mis}
            </Text>
          </TouchableOpacity>
          <DialogInput
            isDialogVisible={quantityPrompt}
            hintInput={"Enter new value"}
            submitInput={(inputText) => {
              setQuantity(inputText);
              setQuantityPrompt(false);
            }}
            closeDialog={() => {
              setQuantityPrompt(false);
            }}
          />
          <Text
            style={{
              opacity: 0.4,
              marginLeft: 5,
              fontSize: 11.5,
              alignSelf: "center",
              fontFamily: "Inter_400Regular",
            }}
            onLongPress={() => {
              setQuantityPrompt(true);
            }}
            onPress={() => setQuantityPrompt(true)}
          >
            {` ${quantity}`}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <DialogInput
            isDialogVisible={ltpPrompt}
            hintInput={"Enter new value"}
            submitInput={(inputText) => {
              setLtpText(inputText);
              setLtpPrompt(false);
            }}
            closeDialog={() => {
              setLtpPrompt(false);
            }}
          />
          <Text
            onPress={() => setLtpPrompt(true)}
            style={{
              //opacity: 0.4,
              alignSelf: "center",
              textAlign: "center",
              fontSize: 11,
              marginRight: 5,
              color: "#b6b4ba",
              fontFamily: "Inter_400Regular",
            }}
          >
            {ltpText.includes("clock") && (
              <Feather name="clock" size={14} color="#b6b4ba" />
            )}
            {ltpText.replace("clock", "")}
          </Text>
          <Text style={styles.misTextView}>COMPLETE</Text>
        </View>
      </View>
      <View style={styles.columnView}>
        <DialogInput
          isDialogVisible={niftyPrompt}
          hintInput={"Enter new value"}
          submitInput={(inputText) => {
            setNiftyText(inputText);
            setNiftyPrompt(false);
          }}
          closeDialog={() => {
            setNiftyPrompt(false);
          }}
        />
        <Text
          style={styles.niftyTextView}
          onPress={() => {
            setNiftyPrompt(true);
          }}
        >
          {niftyText}
        </Text>
        <DialogInput
          isDialogVisible={profitPrompt}
          hintInput={"Enter new value"}
          submitInput={(inputText) => {
            setProfitText(inputText);
            setProfitPrompt(false);
          }}
          closeDialog={() => {
            setProfitPrompt(false);
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.nfoTextView, { alignSelf: "center" }]}>
            {"Avg.  "}
          </Text>
          <Text
            onPress={() => {
              setProfitPrompt(true);
            }}
            style={styles.profitTextView}
          >
            {`${indianNumeric(parseInt(profitText))}.${
              Number(profitText).toFixed(2).toString().split(".")[1]
            }`}
          </Text>
        </View>
      </View>
      <View style={styles.columnView}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              setNfoText(nfoText === "NFO" ? "NSE" : "NFO");
            }}
          >
            <Text style={{ opacity: 0.4, fontSize: 11.5 }}>{nfoText}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            onPress={() => {
              if (misNrml === "MIS") {
                setMisNrml("NRML");
              } else {
                setMisNrml("MIS");
              }
            }}
            style={{
              opacity: 0.4,
              textAlign: "center",
              fontSize: 11.5,
              fontFamily: "Inter_400Regular",
            }}
          >
            {`${misNrml} `}
          </Text>
          <Text
            onPress={() => {
              if (misMarketLimit === "MARKET") {
                setMisMarketLimit("LIMIT");
              } else {
                setMisMarketLimit("MARKET");
              }
            }}
            style={{
              opacity: 0.4,
              textAlign: "center",
              fontSize: 11.5,
              fontFamily: "Inter_400Regular",
            }}
          >
            {misMarketLimit}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#20202020",
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
  },
  columnView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 3,
    alignItems: "center",
  },
  misTextView: {
    width: 80,
    textAlign: "center",
    paddingVertical: 2.5,
    fontSize: 11.5,
    fontFamily: "Inter_400Regular",
    backgroundColor: "#edf7ea",
    color: "#91b38d",
  },
  niftyTextView: {
    opacity: 0.7,
    fontSize: 13,
    fontFamily: "Inter_400Regular",
  },
  profitTextView: {
    fontSize: 13,
    opacity: 0.75,
    color: "black",
    fontFamily: "Inter_400Regular",
  },
  nfoTextView: {
    marginLeft: 5,
    opacity: 0.5,
    fontSize: 11.5,
    fontFamily: "Inter_400Regular",
  },
  ltpTextView: {
    marginLeft: 5,
    opacity: 0.7,
    fontSize: 11.5,
    fontFamily: "Inter_400Regular",
  },
});
