import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

const EmergencyAlarmScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.text}>Emergency Alarm</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});

export default EmergencyAlarmScreen;
