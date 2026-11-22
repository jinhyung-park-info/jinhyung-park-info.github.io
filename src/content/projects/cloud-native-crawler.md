---
title: Cloud-Native Migration of a Web Crawling Platform
summary: Migrated a search engine's web crawler to containerized, orchestrated services processing 1K+ documents/sec on 1,000+ servers, and doubled pipeline throughput at 99.9% uptime.
context: NAVER
tags: [Distributed Systems, Java, Kafka, Docker, Nomad]
featured: true
order: 50
---

## Overview

The crawling platform consumes crawl requests from Kafka and fetches, renders, and processes web documents for a search engine serving 4B+ queries a month.

## What I did

- Containerized and orchestrated the Java Spring Boot crawl services on 1,000+ servers with Docker and Nomad.
- Profiled the pipeline end to end and removed bottlenecks, doubling throughput while sustaining 99.9% uptime.
- Cut in-pipeline model latency by 63%.

<!-- ## Lessons
TODO: Write about the design decisions, trade-offs, and what you would do differently. -->
