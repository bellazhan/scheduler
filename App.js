import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Welcome to my app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#fff',
    fontSize: 32,
  }
});
