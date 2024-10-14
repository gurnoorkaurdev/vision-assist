import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Welcome Message */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to Vision Assist!</Text>
      </View>

      {/* Main Features */}
      <View style={styles.mainContent}>
        <Text style={styles.descriptionText}>
          Use the bottom tabs to navigate between Object Recognition, Scan Text, Change Language, and Settings.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  descriptionText: {
    fontSize: 18,
    color: '#2c3e50',
    textAlign: 'center',
  },
});

export default HomeScreen;

