---
# Imported from old site (2022) — delete this file to remove it
title: Simulating Point-and-Click Behavior in an Implicit Adversarial Environment
summary: A point-and-click simulator in which two agents compete for the same target, trained jointly with reinforcement learning to show how the optimal point-and-click policy changes in adversarial settings.
period: "2021"
context: Yonsei CS Capstone
tags: [Reinforcement Learning, HCI, Simulation]
links:
  - label: Code
    url: https://github.com/SWCapstoneProject/Adversarial_PointAndClick
  - label: Video
    url: https://www.youtube.com/watch?v=DLQu1RDsS6w
order: 29
---

With Hyunwoo Lee and Gyucheol Shim, supervised by Prof. Byungjoo Lee (Department of Computer Science, Yonsei University).

- Built a simulator for real-world point-and-click settings where more than one agent competes to acquire the same target.
- Trained two agents jointly in an adversarial environment with reinforcement learning, and compared them with an agent trained in a non-adversarial environment (Do et al.).
- The optimal policy differed both qualitatively and quantitatively (trial completion time and click failure rate). An ablation that trained agents with different human factors showed which factors matter.
