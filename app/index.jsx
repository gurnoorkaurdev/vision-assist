import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView className="h-full">
        <View className="flex-1 items-center justify-center">
        <Text className="text-3xl font-pblack" >index screen</Text>
        <StatusBar style="auto" />
        </View>
    </SafeAreaView>
  );
}