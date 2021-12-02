import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DialogInput from 'react-native-dialog-input';

export default function StockEntry() {
  const [quantity, setQuantity] = React.useState(0);
  const [mis, setMis] = React.useState('MIS');
  const [niftyText, setNiftyText] = React.useState('NIFTY NOV 17550 PE');
  const [profitText, setProfitText] = React.useState(0);
  const [nfoText, setNfoText] = React.useState('NFO');
  const [nfoValue, setNfoValue] = React.useState(0);
  const [ltpText, setLtpText] = React.useState(192);
  const [fade, setFade] = React.useState(false);
  const [quantityPrompt, setQuantityPrompt] = React.useState(false);
  const [niftyPrompt, setNiftyPrompt] = React.useState(false);
  const [profitPrompt, setProfitPrompt] = React.useState(false);
  const [avgPrompt, setAvgPrompt] = React.useState(false);
  const [ltpPrompt, setLtpPrompt] = React.useState(false);

  return (
    <View style={[styles.container, { opacity: fade ? 0.5 : 1.0 }]}>
      <View style={styles.columnView}>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              color:
                quantity !== 0 ? (quantity > 0 ? '#4882db' : 'red') : 'black',
            }}>
            {Number(quantity).toFixed(0)}
          </Text>
          <DialogInput
            isDialogVisible={quantityPrompt}
            hintInput={'Enter new value'}
            submitInput={(inputText) => {
              setQuantity(inputText);
              setQuantityPrompt(false);
            }}
            closeDialog={() => {
              setQuantityPrompt(false);
            }}
          />
          <Text
            style={{ opacity: 0.4 }}
            onLongPress={() => {
              setQuantityPrompt(true);
            }}
            onPress={() => setFade(!fade)}>
            {' '}
            Qty.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setMis(mis === 'MIS' ? 'NRML' : 'MIS');
          }}>
          <Text
            style={[
              styles.misTextView,
              {
                backgroundColor: mis === 'MIS' ? '#fff6e8' : '#f4f3f8',
                color: mis === 'MIS' ? '#f5b456' : '#8766b3',
              },
            ]}>
            {mis}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.columnView}>
        <DialogInput
          isDialogVisible={niftyPrompt}
          hintInput={'Enter new value'}
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
          }}>
          {niftyText}
        </Text>
        <DialogInput
          isDialogVisible={profitPrompt}
          hintInput={'Enter new value'}
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
                profitText !== 0 ? (profitText > 0 ? 'green' : 'red') : 'black',
            },
          ]}>
          {profitText !== 0 ? (profitText > 0 ? '+' : '') : ''}
          {Number(profitText).toFixed(2)}
        </Text>
      </View>
      <View style={styles.columnView}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => {
              setNfoText(nfoText === 'NFO' ? 'NSE' : 'NFO');
            }}>
            <Text style={{ opacity: 0.4 }}>{nfoText} Avg.</Text>
          </TouchableOpacity>
          <DialogInput
            isDialogVisible={avgPrompt}
            hintInput={'Enter new value'}
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
            style={styles.nfoTextView}>
            {Number(nfoValue).toFixed(2)}
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ opacity: 0.4 }}>LTP</Text>
          <DialogInput
            isDialogVisible={ltpPrompt}
            hintInput={'Enter new value'}
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
            style={styles.ltpTextView}>
            {Number(ltpText).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderColor: '#20202020',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  columnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  misTextView: {
    width: 50,
    textAlign: 'center',
    paddingVertical: 2.5,
  },
  niftyTextView: {
    opacity: 0.7,
    fontSize: 16,
  },
  profitTextView: {
    fontSize: 16,
    opacity: 0.5,
  },
  nfoTextView: {
    marginLeft: 5,
    opacity: 0.5,
  },
  ltpTextView: {
    marginLeft: 5,
  },
});
