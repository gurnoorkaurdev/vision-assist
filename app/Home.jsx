import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabNavigator from './TabNavigator'; // Adjust path if needed

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TabNavigator />
    </SafeAreaView>
  );
};

export default Home;
