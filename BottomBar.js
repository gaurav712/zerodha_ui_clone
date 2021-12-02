import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { Feather, FontAwesome } from 'react-native-vector-icons';

export default function BottomBar() {
  return (
    <View style={styles.container}>
      <View style={styles.element}>
        <Feather name="bookmark" size={25} color="#413e4d" />
        <Text style={styles.elementText}>Watchlist</Text>
      </View>
      <View style={styles.element}>
        <Feather name="book" size={25} color="#413e4d" />
        <Text style={styles.elementText}>Orders</Text>
      </View>
      <View style={styles.element}>
        <FontAwesome name="suitcase" size={25} color="#4b88cd" />
        <Text
          style={[
            styles.elementText,
            {
              color: '#4b88cd',
            },
          ]}>
          Portfolio
        </Text>
      </View>
      <View style={styles.element}>
        <Feather name="box" size={25} color="#413e4d" />
        <Text style={styles.elementText}>Apps</Text>
      </View>
      <View style={styles.element}>
        <Feather name="user" size={25} color="#413e4d" />
        <Text style={styles.elementText}>QT8151</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  element: {
    alignItems: 'center',
  },
  elementText: {
    fontSize: 13,
    marginTop: 5,
    opacity: 0.75,
  },
});
