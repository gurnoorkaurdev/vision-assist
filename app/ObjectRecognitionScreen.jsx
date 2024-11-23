import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Speech from "expo-speech";
import { startObjectDetection } from "../backend/objectDetection/index";

const ObjectRecognitionScreen = () => {
  const [image, setImage] = useState(null);
  const [detections, setDetections] = useState([]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      handleObjectDetection(result.uri);
    }
  };

  const handleObjectDetection = async (imageUri) => {
    try {
      const callback = (detectedObjects) => {
        setDetections(detectedObjects);
        speakDetections(detectedObjects);
      };
      await startObjectDetection(imageUri, callback);
    } catch (error) {
      console.error("Detection failed:", error);
    }
  };

  const speakDetections = (detections) => {
    detections.forEach((detection) => {
      const text = `Detected ${detection.class} with ${
        Math.round(detection.score * 100) / 100
      } confidence`;
      Speech.speak(text);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Object Recognition</Text>
      </View>
      <View style={styles.content}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <Button title="Pick an Image" onPress={pickImage} />
        <Text style={styles.resultTitle}>Detections:</Text>
        {detections.map((detection, index) => (
          <Text key={index} style={styles.detectionText}>
            {detection.class} - {Math.round(detection.score * 100)}%
          </Text>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  header: {
    padding: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
  },
  resultTitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  detectionText: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default ObjectRecognitionScreen;
