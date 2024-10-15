import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button, TouchableOpacity, View  } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';

import * as Speech from 'expo-speech'
const ObjectRecognitionScreen = () => {

  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View className="flex-1 justify-center">
        <Text className="text-center">We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }


  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
    camera = facing == 'front' ? 'back' : 'front'
    Speech.speak(`${camera} camera`)
  }

  return (
    <CameraView className="flex-1" facing={facing}>
      <View className="flex-row">
        <TouchableOpacity className="flex-1 self-end items-center" onPress={toggleCameraFacing}>
          <View className="h-screen"></View>
        </TouchableOpacity>
      </View>
    </CameraView>
  );
};



export default ObjectRecognitionScreen;
