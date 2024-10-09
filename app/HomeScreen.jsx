import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
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
        <TouchableOpacity style={styles.button} onPress={() => {/* Handle Voice Assistance */}}>
          <Text style={styles.buttonText}>Voice Assistance</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {/* Handle Object Recognition */}}>
          <Text style={styles.buttonText}>Object Recognition</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {/* Handle Read Text */}}>
          <Text style={styles.buttonText}>Read Text</Text>
        </TouchableOpacity>
      </View>
      
      {/* Settings and Help */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => {/* Navigate to Settings */}}>
          <Text style={styles.footerText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {/* Navigate to Help */}}>
          <Text style={styles.footerText}>Help</Text>
        </TouchableOpacity>
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
  },
  button: {
    backgroundColor: '#2c3e50',
    padding: 20,
    borderRadius: 10,
    margin: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 30,
  },
  footerText: {
    fontSize: 18,
    color: '#2c3e50',
  },
});

export default HomeScreen;
