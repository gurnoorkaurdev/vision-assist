import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";
import * as cocossd from "@tensorflow-models/coco-ssd";

export const loadModel = async () => {
  await tf.ready(); // Ensure TensorFlow is ready
  console.log("TensorFlow is ready");
  const model = await cocossd.load(); // Load COCO-SSD model
  console.log("COCO-SSD model loaded");
  return model;
};
