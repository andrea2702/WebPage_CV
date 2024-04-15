---
title: "XArm Cube Tracker"
summary: "Move an XArm by following the movement of a cube"
date: "June 17 2023"
draft: false
tags:
- Python
- Computer Vision
- ROS
- OpenCv
demoUrl : https://www.youtube.com/shorts/LTLvf79X1W8
repoUrl : https://github.com/andrea2702/XArmCubeTracker
---

This project focuses on enabling an Xarm robotic arm to track and follow a cube in three-dimensional space using a combination of edge and color detection techniques. The Xarm is equipped with a camera to perceive the cube's position and orientation accurately.

- Cube Detection using Edge and Color Detection:
The project begins by detecting the cube within the camera's field of view. Edge detection algorithms, such as Canny edge detection, are employed to identify the edges of the cube. Additionally, color detection techniques are utilized to recognize the specific color of the cube. By combining edge and color information, the system accurately locates the cube in the image.

- Centering the Cube in the Camera Frame:
Once the cube is detected, the system ensures that it remains centered within the camera frame. This is achieved by continuously adjusting the Xarm's orientation to keep the cube at the center of the image. The system calculates the displacement of the cube from the center of the frame and applies corrective actions to maintain its position.

- Calculating Cube Movement in X, Y, and Z Axes:
To track the movement of the cube in three-dimensional space, the system calculates its displacement along the X, Y, and Z axes. The displacement in the X and Y axes is determined by analyzing the change in the cube's position relative to the center of the camera frame. For the Z-axis movement, the system observes changes in the size of the cube's projection on the camera sensor. An increase or decrease in the number of pixels occupied by the cube indicates movement along the Z-axis, with an increase suggesting the cube is moving closer and a decrease suggesting it is moving farther away.

- Xarm Control for Cube Tracking:
The Xarm's movements are controlled based on the calculated displacement of the cube. The robotic arm adjusts its position and orientation in real-time to follow the cube's movements accurately. This ensures that the Xarm maintains a consistent distance and orientation relative to the cube, enabling precise tracking in three-dimensional space. We send the new position by using the ROS nodes.

By integrating edge and color detection techniques with precise control algorithms, the project enables the Xarm robotic arm to track and follow a cube in three-dimensional space effectively. This capability has applications in various fields, including automation, robotics, and object manipulation.