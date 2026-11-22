---
# Imported from old site (2022) — delete this file to remove it
title: Speech Recognize Calendar
summary: An Android app that creates, updates, and deletes Google Calendar events by voice, built at NAVER Campus Hackday 2020.
period: "2020"
context: NAVER Campus Hackday
tags: [Android, Java, MVVM]
links:
  - label: Code
    url: https://github.com/jinhyung-park-info/SpeechRecognizeCalender
featured: true
order: 27
---

Team project with Youngjin Moon, Sujin Lee, and Jiwon Lee (May 2020).

- Built with the MVVM architecture and integrated with Google Calendar.
- Implemented Google Login through OAuth with the Google REST API.
- Designed an LSTM model and built its training data for turning speech into calendar events. Because of TensorFlow Lite version limits on Android, the shipped version parses the recognized text with regular expressions instead.
