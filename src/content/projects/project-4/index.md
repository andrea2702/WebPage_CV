---
title: "Gestured base arm control"
summary: "Move an robot arm by the position of your hands"
date: "May 28 2023"
draft: false
tags:
- ROS
- MediaPipe
- Gazebo
demoUrl : https://www.youtube.com/watch?v=9owxQ1zTffA
repoUrl : hhttps://github.com/andrea2702/GestureBasedArmControl
---

This project involves simulating a robotic arm in Gazebo, a popular robotics simulation environment, and implementing gesture-based control using Mediapipe for hand tracking. The goal is to enable users to interact with the simulated robotic arm using intuitive hand gestures, allowing for natural and immersive control.

- Robotic Arm Simulation in Gazebo:
The project begins by setting up a simulated environment in Gazebo, where a robotic arm model is deployed. The robotic arm is equipped with joints and end-effectors necessary for movement and manipulation tasks. Gazebo provides a realistic simulation platform, allowing developers to test and validate control algorithms in a virtual environment before deploying them to physical hardware.

- Hand Tracking with Mediapipe:
Hand tracking is implemented using Mediapipe, a machine learning framework that offers robust solutions for various computer vision tasks. The Mediapipe library provides pre-trained models for hand tracking, enabling accurate detection and localization of hand keypoints such as fingertips, palm center, and hand boundaries. These keypoints are tracked in real-time using the camera feed, allowing for precise hand gesture recognition.

- Gesture-Based Control Interface:
The detected hand keypoints are processed to recognize specific gestures, which serve as commands for controlling the robotic arm. For example, opening and closing the hand may correspond to commands for grasping and releasing objects, respectively. Additionally, arm movements can be controlled by tracking the position and orientation of the hand relative to a reference point in the simulation environment.

- Real-Time Interaction with the Robotic Arm:
As the user performs gestures in front of the camera, the corresponding commands are relayed to the simulated robotic arm in real-time. The robotic arm responds by adjusting its joints and end-effectors to mimic the desired movements and actions. For instance, when the user closes their hand, the robotic arm moves its gripper to grasp virtual objects within its reach. Similarly, releasing the hand gesture prompts the arm to release the object.

- User Feedback and Visualization:
The simulation environment provides visual feedback to the user, allowing them to observe the movements of the robotic arm in response to their gestures. This feedback enhances the user experience and facilitates intuitive interaction with the simulated system.

By combining Gazebo's realistic simulation capabilities with Mediapipe's accurate hand tracking, the project offers an immersive and intuitive gesture-based control interface for robotic arm manipulation. This enables users to interact with robotic systems more naturally, opening up opportunities for applications in human-robot collaboration, teleoperation, and virtual prototyping.





