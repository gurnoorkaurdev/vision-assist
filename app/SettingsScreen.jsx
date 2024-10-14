import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.text}>Settings Screen</Text>
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

export default SettingsScreen;
