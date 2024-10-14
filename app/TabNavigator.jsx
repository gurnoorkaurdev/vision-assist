import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ObjectRecognitionScreen from './ObjectRecognitionScreen'; // Adjust path as needed
import ScanTextScreen from './ScanTextScreen'; // Adjust path as needed
import ChangeLanguageScreen from './ChangeLanguageScreen'; // Adjust path as needed
import SettingsScreen from './SettingsScreen'; // Adjust path as needed

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Object Recognition" component={ObjectRecognitionScreen} />
      <Tab.Screen name="Scan Text" component={ScanTextScreen} />
      <Tab.Screen name="Change Language" component={ChangeLanguageScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;




