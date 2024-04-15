---
title: "Duck traking"
summary: "Calculate ducks trajectory"
date: "May 22 2023"
draft: false
tags:
- Python
- Yolov5
- Computer Vision
demoUrl: https://www.youtube.com/watch?v=olWXXbzrLfk
repoUrl: https://github.com/andrea2702/Quack_track?tab=readme-ov-file
---

The project aims to analyze the movement of ducks within a video feed. It takes a video as input and employs the YOLOv5 (You Only Look Once version 5) object detection algorithm to identify ducks within each frame. Once the ducks are detected, the system utilizes edge detection techniques to track their movements across consecutive frames.

The process involves the following steps:

- Duck Detection with YOLOv5: YOLOv5 is utilized to accurately detect ducks within each frame of the input video. This deep learning-based object detection algorithm provides real-time detection capabilities, ensuring efficient processing of video streams.

- Edge Detection for Movement Tracking: Edge detection algorithms such as Canny edge detection are applied to identify the boundaries of the ducks within each frame. By detecting edges, the system can track the movement of ducks between consecutive frames by analyzing the displacement of these edges.

- Conversion of Pixel Movement to Physical Units: To quantify the movement of ducks accurately, the system converts the detected pixel movement to centimeters using basic geometry and traditional computer vision methods. This involves calibrating the video feed to establish a conversion factor between pixels and real-world distances, allowing for precise measurements of duck movement.

- Analysis and Output: Finally, the system generates output data that quantifies the movement of each duck detected in the video feed.