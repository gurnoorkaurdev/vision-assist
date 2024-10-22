import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ObjectRecognitionScreen from "./ObjectRecognitionScreen";
import ScanTextScreen from "./ScanTextScreen";
import GPSNavigationScreen from "./GPSNavigationScreen";
import EmergencyAlarmScreen from "./EmergencyAlarmScreen";
import * as Speech from "expo-speech";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const speak = (read) => {
    Speech.speak(read);
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#161622",
          height: 100,
          paddingTop: 10,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#E7F1A8",
        tabBarInactiveTintColor: "#FFFDF5",
      }}>
      <Tab.Screen
        name="Object Recognition"
        options={{
          headerShown: false,
          tabBarLabel: "Object Recognition",
          tabBarIcon: ({ color }) => (
            <AntDesign name="scan1" size="32px" color={color} />
          ),
        }}
        component={ObjectRecognitionScreen}
        listeners={{
          tabPress: () => {
            speak("Object Recognition");
          },
        }}
      />
      <Tab.Screen
        name="Scan Text"
        options={{
          headerShown: false,
          tabBarLabel: "Scan Text",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="text-fields" size="32px" color={color} />
          ),
        }}
        component={ScanTextScreen}
        listeners={{
          tabPress: () => {
            speak("Scan Text");
          },
        }}
      />
      <Tab.Screen
        name="GPS Navigation"
        options={{
          headerShown: false,
          tabBarLabel: "GPS Navigation",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="assistant-navigation"
              size="32px"
              color={color}
            />
          ),
        }}
        component={GPSNavigationScreen}
        listeners={{
          tabPress: () => {
            speak("GPS Navigation");
          },
        }}
      />
      {/* Changed to SettingsScreen and updated name */}
      <Tab.Screen
        name="Emergency Alarm"
        options={{
          headerShown: false,
          tabBarLabel: "Emergency Alarm",
          tabBarIcon: ({ color }) => (
            <Feather name="bell" size="32px" color={color} />
          ),
        }}
        component={EmergencyAlarmScreen}
        listeners={{
          tabPress: () => {
            speak("Emergency Alarm");
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
