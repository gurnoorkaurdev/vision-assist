import { decodeJpeg } from "@tensorflow/tfjs-react-native";

export const detectObjects = async (model, image) => {
  try {
    const imageTensor = decodeJpeg(image); // Convert image to tensor
    const predictions = await model.detect(imageTensor); // Perform detection
    console.log("Predictions:", predictions);
    return predictions;
  } catch (error) {
    console.error("Error during detection:", error);
    throw error;
  }
};
