import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import DialogInput from "react-native-dialog-input";

export default function StockEntry({ data, updateData }) {
  const [quantity, setQuantity] = React.useState(0);
  const [mis, setMis] = React.useState("MIS");
  const [niftyText, setNiftyText] = React.useState("NIFTY NOV 17550 PE");
  const [profitText, setProfitText] = React.useState(0);
  const [nfoText, setNfoText] = React.useState("NFO");
  const [nfoValue, setNfoValue] = React.useState(0);
  const [ltpText, setLtpText] = React.useState(192);
  const [fade, setFade] = React.useState(false);
  const [quantityPrompt, setQuantityPrompt] = React.useState(false);
  const [niftyPrompt, setNiftyPrompt] = React.useState(false);
  const [profitPrompt, setProfitPrompt] = React.useState(false);
  const [avgPrompt, setAvgPrompt] = React.useState(false);
  const [ltpPrompt, setLtpPrompt] = React.useState(false);
  const [fluctuatedVal, setFluctuatedVal] = React.useState(0);
  const [tmpLtp, setTmpLtp] = React.useState(192);

  function round5(x) {
    return x % 5 >= 2.5 ? parseInt(x / 5) * 5 + 5 : parseInt(x / 5) * 5;
  }

  React.useEffect(() => {
    updateData({
      ...data,
      [ltpText]: Number(fluctuatedVal) * Number(quantity),
    });
    setProfitText(Number(fluctuatedVal) * Number(quantity));
  }, [quantity, fluctuatedVal]);

  React.useEffect(() => {
    setFluctuatedVal(Number(tmpLtp) - Number(nfoValue));
  }, [nfoValue, tmpLtp]);

  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  const loadData = React.useCallback(
    async function () {
      if (!fade) {
        let val = Number(ltpText);
        let fluc = randomNumber(val - 3, val + 3);
        let dec = parseInt((fluc % 1) * 100);
        dec = round5(dec);
        setTmpLtp(parseInt(fluc) + dec / 100);
      }
    },
    [tmpLtp]
  );

  React.useEffect(() => {
    const timerId = setInterval(loadData, 1000);
    return () => clearInterval(timerId);
  }, [loadData]);

  //React.useEffect(() => {
  //const a = setInterval(() => {
  //}, 1000);
  //return clearInterval(a);
  //}, []);

  function indianNumeric(x) {
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != "") lastThree = "," + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
  }

  return (
    <View style={[styles.container, { opacity: fade ? 0.5 : 1.0 }]}>
      <View style={styles.columnView}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              color:
                quantity !== 0 ? (quantity > 0 ? "#4882db" : "red") : "black",
              fontFamily: "Inter_400Regular",
              fontSize: 11.5,
            }}
          >
            {Number(quantity).toFixed(0)}
          </Text>
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
              fontSize: 11.5,
              fontFamily: "Inter_400Regular",
            }}
            onPress={() => {
              setQuantityPrompt(true);
            }}
          >
            {" "}
            Qty.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setMis(mis === "MIS" ? "NRML" : "MIS");
          }}
          onLongPress={() => setFade(!fade)}
        >
          <Text
            style={[
              styles.misTextView,
              {
                backgroundColor: mis === "MIS" ? "#fff6e8" : "#f4f3f8",
                color: mis === "MIS" ? "#f5b456" : "#8766b3",
              },
            ]}
          >
            {mis}
          </Text>
        </TouchableOpacity>
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
        <Text
          onPress={() => {
            setProfitPrompt(true);
          }}
          style={[
            styles.profitTextView,
            {
              color:
                Number(profitText) !== 0
                  ? Number(profitText) > 0
                    ? "#4caf50"
                    : "#ff5722"
                  : "black",
            },
          ]}
        >
          {profitText !== 0 ? (profitText > 0 ? "+" : "") : ""}
          {`${indianNumeric(parseInt(profitText))}.${
            Number(profitText).toFixed(2).toString().split(".")[1]
          }`}
        </Text>
      </View>
      <View style={styles.columnView}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              setNfoText(nfoText === "NFO" ? "NSE" : "NFO");
            }}
          >
            <Text style={{ opacity: 0.4, fontSize: 12 }}>
              {`${nfoText}` + "  " + "Avg."}
            </Text>
          </TouchableOpacity>
          <DialogInput
            isDialogVisible={avgPrompt}
            hintInput={"Enter new value"}
            submitInput={(inputText) => {
              setNfoValue(inputText);
              setAvgPrompt(false);
            }}
            closeDialog={() => {
              setAvgPrompt(false);
            }}
          />
          <Text
            onPress={() => {
              setAvgPrompt(true);
            }}
            style={styles.nfoTextView}
          >
            {Number(nfoValue).toFixed(2)}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ opacity: 0.4, fontSize: 11.5 }}>LTP</Text>
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
            onPress={() => {
              setLtpPrompt(true);
            }}
            style={styles.ltpTextView}
          >
            {Number(tmpLtp).toFixed(2)}
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
  },
  misTextView: {
    width: 45,
    textAlign: "center",
    paddingVertical: 2.25,
    fontSize: 11.5,
    fontFamily: "Inter_400Regular",
  },
  niftyTextView: {
    opacity: 0.7,
    fontSize: 13,
    fontFamily: "Inter_400Regular",
  },
  profitTextView: {
    fontSize: 14,
    opacity: 0.75,
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
