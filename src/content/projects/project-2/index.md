---
title: "Autonomous Puzzlebot"
summary: "The Puzzlebot Vehicle is capable to do a track without help"
date: "June 17 2023"
draft: false
tags:
- Python
- ROS
- Computer Vision
- Yolov5
- OpenCv
demoUrl : https://www.youtube.com/watch?v=bmP49zlKMyg
repoUrl : https://github.com/andrea2702/Puzzlebot-Autonomous-ROS?tab=readme-ov-file
---

This project focuses on enabling a puzzlebot to navigate autonomously using a combination of computer vision techniques and a Jetson embedded system along with a Raspberry Pi camera module.

- Track Following with PID Control:
The Raspberry Pi camera captures images of the track on which the puzzlebot moves. A computer vision algorithm detects the central line on the track. Utilizing a Proportional-Integral-Derivative (PID) controller, the puzzlebot adjusts its direction and speed to follow the central line accurately, ensuring smooth and consistent navigation.

- Traffic Sign Detection using YOLOv5:
YOLOv5, a state-of-the-art object detection model, is employed to detect various traffic signs such as turn right, turn left, stop, and dangerous curve ahead. Upon detection, the puzzlebot interprets the detected signs and executes corresponding actions. For instance, upon detecting a stop sign, the puzzlebot halts its motion, ensuring adherence to traffic regulations.

- Traffic Light Recognition using Classic Computer Vision:
Classic computer vision techniques are utilized to detect traffic lights within the puzzlebot's field of view. By analyzing the color of the detected lights, the puzzlebot determines whether to stop, proceed with caution, or maintain its current speed. This enables the puzzlebot to interact safely with traffic signals and other vehicles.

- Crosswalk Detection using Contours:
Contour detection algorithms are employed to identify crosswalks along the track. Recognizing the presence of a crosswalk alerts the puzzlebot to the possibility of encountering a traffic signal. This information influences the puzzlebot's navigation strategy, ensuring appropriate responses near pedestrian crossings.

- State Machine Control:
The entire system is governed by a state machine that orchestrates the puzzlebot's behavior based on its perception of the environment. The state machine manages transitions between different states such as track following, traffic sign recognition, traffic light interaction, and crosswalk detection, ensuring seamless and efficient navigation in diverse scenarios.

By integrating advanced computer vision techniques with precise control algorithms and state machine logic, the project enables the puzzlebot to navigate autonomously while effectively interacting with traffic signs, signals, and pedestrian crossings, thus enhancing safety and efficiency in real-world environments.