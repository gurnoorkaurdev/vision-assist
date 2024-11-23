export const processDetections = (detections) => {
  return detections.map((detection) => ({
    class: detection.class,
    score: detection.score,
    bbox: detection.bbox, // Bounding box: [x, y, width, height]
  }));
};

export const speakDetections = (detections) => {
  detections.forEach((detection) => {
    const text = `Detected ${detection.class} with ${Math.round(
      detection.score * 100
    )}% confidence.`;
    console.log(text);
  });
};
