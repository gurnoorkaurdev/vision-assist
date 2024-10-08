import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './HomeScreen'; // Adjust the path as needed

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
