import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabNavigator from './TabNavigator'; // Correct path for TabNavigator

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TabNavigator />
    </SafeAreaView>
  );
};

export default App;





