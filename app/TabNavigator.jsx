import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ObjectRecognitionScreen from './ObjectRecognitionScreen'; // Adjust path as needed
import ScanTextScreen from './ScanTextScreen'; // Adjust path as needed
import ChangeLanguageScreen from './ChangeLanguageScreen'; // Adjust path as needed
import SettingsScreen from './SettingsScreen'; // Adjust path as needed
import { Tabs } from 'expo-router';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { 
          backgroundColor: '#161622',
        },
        tabBarActiveTintColor: '#E7F1A8',
        tabBarInactiveTintColor: '#FFFDF5',
      
      }}
    
    >
      <Tab.Screen name="Object Recognition" options={{ headerShown: false }} component={ObjectRecognitionScreen} />
      <Tab.Screen name="Scan Text" options={{ headerShown: false }} component={ScanTextScreen} />
      <Tab.Screen name="Change Language" options={{ headerShown: false }} component={ChangeLanguageScreen} />
      <Tab.Screen name="Settings" options={{ headerShown: false }} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;




