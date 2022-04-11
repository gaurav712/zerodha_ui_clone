import React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import DialogInput from "react-native-dialog-input";
import { Feather } from "react-native-vector-icons";
import { Svg, Path } from "react-native-svg";

export default function Profile({ userAlias, setUserAlias }) {
  const [profitLoss, setProfitLoss] = React.useState("tigerakshay12@gmail.com");
  const [profitLossPrompt, setProfitLossPrompt] = React.useState(false);
  const [userName, setUserName] = React.useState("Surya Prakash");
  const [userNamePrompt, setUserNamePrompt] = React.useState(false);
  const [userAliasPrompt, setUserAliasPrompt] = React.useState(false);
  const [version, setVersion] = React.useState("3.3.5b164");
  const [versionPrompt, setVersionPrompt] = React.useState(false);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.header}>Account</Text>
          <Feather name="chevron-down" size={40} />
        </View>
        <View style={styles.navigation}>
          <DialogInput
            isDialogVisible={userNamePrompt}
            hintInput={"Enter new value"}
            submitInput={(inputText) => {
              setUserName(inputText);
              setUserNamePrompt(false);
            }}
            closeDialog={() => {
              setUserNamePrompt(false);
            }}
          />
          <Text
            onPress={() => setUserNamePrompt(true)}
            style={{
              fontSize: 17,
              marginLeft: 20,
              color: "#4c4d58dd",
              fontFamily: "Inter_400Regular",
            }}
          >
            {userName}
          </Text>
        </View>
      </View>
      <ScrollView
        style={styles.profitLoss}
        contentContainerStyle={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <DialogInput
            isDialogVisible={userAliasPrompt}
            hintInput={"Enter new value"}
            submitInput={(inputText) => {
              setUserAlias(inputText);
              setUserAliasPrompt(false);
            }}
            closeDialog={() => {
              setUserAliasPrompt(false);
            }}
          />
          <Text
            onPress={() => setUserAliasPrompt(true)}
            style={styles.profitLossText}
          >
            {userAlias}
          </Text>
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
            style={styles.profitLossAmount}
          >
            {profitLoss}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#e8f0fc",
            height: 80,
            width: 80,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 28,
              color: "#a4bae8",
            }}
          >{`${userName[0]}${userName.trim().split(" ").pop()[0]}`}</Text>
        </View>
      </ScrollView>
      <ScrollView
        contentContainerStyle={
          {
            //flex: 1
          }
        }
      >
        <View style={styles.entryContainer}>
          <Text style={styles.entryText}>Funds</Text>
          <Image
            source={require("./assets/rupee.jpeg")}
            style={{
              width: 20,
              aspectRatio: 1,
            }}
          />
        </View>
        <View style={styles.entryContainer}>
          <Text style={styles.entryText}>Profile</Text>
          <Feather name="user" size={25} color="#9b9aaf" />
        </View>
        <View style={styles.entryContainer}>
          <Text style={styles.entryText}>Settings</Text>
          <Feather name="settings" size={25} color="#9b9aaf" />
        </View>
        <View
          style={[
            styles.entryContainer,
            {
              borderBottomWidth: 0,
            },
          ]}
        >
          <Text style={styles.entryText}>Console</Text>
          <Svg width={28} height={28} viewBox="0 0 24 24" fill="none">
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
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: "20%",
          }}
        >
          <Text
            style={{
              color: "#5b80c9",
              fontWeight: "bold",
            }}
          >
            Portfolio
          </Text>
          <Text
            style={{
              color: "#5b80c9",
              fontWeight: "bold",
            }}
          >
            Tradebook
          </Text>
          <Text
            style={{
              color: "#5b80c9",
              fontWeight: "bold",
            }}
          >
            P&L
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: "20%",
            marginTop: 15,
            paddingBottom: 25,
            borderColor: "lightgrey",
            borderBottomWidth: 1,
          }}
        >
          <Text
            style={{
              color: "#5b80c9",
              fontWeight: "bold",
            }}
          >
            Tax P&L
          </Text>
          <Text
            style={{
              color: "#5b80c9",
              fontWeight: "bold",
            }}
          >
            IPO
          </Text>
          <Text
            style={{
              color: "#5b80c9",
              fontWeight: "bold",
            }}
          >
            Gift stocks
          </Text>
        </View>
        <View style={styles.entryContainer}>
          <Text style={styles.entryText}>Connected apps</Text>
          <Feather name="box" size={25} color="#9b9aaf" />
        </View>
        <View style={styles.entryContainer}>
          <Text style={styles.entryText}>Invite friends</Text>
          <Feather name="user-plus" size={25} color="#9b9aaf" />
        </View>
        <View style={styles.entryContainer}>
          <Text style={styles.entryText}>Support</Text>
          <Feather name="alert-circle" size={25} color="#9b9aaf" />
        </View>
        <View style={styles.entryContainer}>
          <Text style={styles.entryText}>User manual</Text>
          <Feather name="help-circle" size={25} color="#9b9aaf" />
        </View>
        <View style={styles.entryContainer}>
          <Text style={styles.entryText}>Licenses</Text>
          <Feather name="file-text" size={25} color="#9b9aaf" />
        </View>
        <View style={styles.entryContainer}>
          <Text style={styles.entryText}>Logout</Text>
          <Feather name="log-out" size={25} color="#9b9aaf" />
        </View>
        <View style={styles.entryContainer}>
          <DialogInput
            isDialogVisible={versionPrompt}
            hintInput={"Enter new value"}
            submitInput={(inputText) => {
              setVersion(inputText);
              setVersionPrompt(false);
            }}
            closeDialog={() => {
              setVersionPrompt(false);
            }}
          />
          <Text
            style={{
              opacity: 0.4,
            }}
            onPress={() => setVersionPrompt(true)}
          >{`Version ${version}`}</Text>
        </View>
        <Image
          style={{
            alignSelf: "center",
            width: "50%",
            resizeMode: "contain",
            marginTop: 10,
          }}
          source={require("./assets/zerodha.jpeg")}
        />
      </ScrollView>
    </View>
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
    marginLeft: -34,
    fontFamily: "Inter_400Regular",
  },
  navigation: {
    flexDirection: "row",
    marginTop: 22,
    marginBottom: 5,
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
    minHeight: "17%",
    maxHeight: "17%",
    width: "90%",
    marginHorizontal: "5%",
    marginTop: "-14.5%",
    flexDirection: "row",
    // alignItems: 'center',
    //justifyContent: "center",
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "black",
    borderRadius: 3,
    //padding: 20,
    paddingHorizontal: 20,
  },
  profitLossText: {
    fontSize: 20,
    fontWeight: "700",
    opacity: 0.6,
    // textAlign: 'center',
    fontFamily: "Inter_400Regular",
  },
  profitLossAmount: {
    fontSize: 12,
    // fontWeight: 'light',
    opacity: 0.4,
    // textAlign: 'center',
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
    fontSize: 12,
    marginLeft: 5,
    fontFamily: "Inter_400Regular",
  },
  entryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 28,
    borderColor: "lightgrey",
    borderBottomWidth: 1,
  },
  entryText: {
    fontSize: 13.5,
    opacity: 0.6,
    fontFamily: "Inter_400Regular",
  },
});
