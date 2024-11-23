import { loadModel, detectObjects } from "./objectDetectionService";

// Initialize the model and detection logic
export const startObjectDetection = async (image, callback) => {
  try {
    const model = await loadModel();
    const detections = await detectObjects(model, image);
    callback(detections); // Pass detections to a callback function
  } catch (error) {
    console.error("Error in object detection:", error);
  }
};
