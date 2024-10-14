import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const ScanTextScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.text}>Scan Text Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default ScanTextScreen;
