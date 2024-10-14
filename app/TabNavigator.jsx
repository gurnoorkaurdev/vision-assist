import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ObjectRecognitionScreen from './ObjectRecognitionScreen'; // Adjust path as needed
import ScanTextScreen from './ScanTextScreen'; // Adjust path as needed
import ChangeLanguageScreen from './ChangeLanguageScreen'; // Adjust path as needed
import SettingsScreen from './SettingsScreen'; // Adjust path as needed
import * as Speech from 'expo-speech'


const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  const speak = (read) => {
    Speech.speak(read)
  }
  
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
      
      <Tab.Screen 
        name="Object Recognition" 
        options={{ headerShown: false }} 
        component={ObjectRecognitionScreen} 
        listeners={{tabPress: () => {speak("Object Recognition")}}} 
      />
      <Tab.Screen 
        name="Scan Text" 
        options={{ headerShown: false }} 
        component={ScanTextScreen} 
        listeners={{tabPress: () => {speak("Scan Text")}}}
      />
      <Tab.Screen 
        name="GPS Navigation" 
        options={{ headerShown: false }} 
        component={ChangeLanguageScreen} 
        listeners={{tabPress: () => {speak("GPS Navigation")}}}  
      />
      {/* Change Language and disable text to speech for changing tabs could be in settings */}
      <Tab.Screen 
        name="Settings" 
        options={{ headerShown: false }} 
        component={SettingsScreen} 
        listeners={{tabPress: () => {speak("Settings")}}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;




