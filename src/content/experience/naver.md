---
organization: NAVER Corporation
role: Software Engineer
location: Seongnam, South Korea
start: 2021-12
end: Present
category: work
order: 30
---

**Distributed Systems & Platform Engineering**

- Led the migration of the web crawling platform to a cloud-native architecture: containerized, orchestrated, and optimized Java Spring Boot services that consume Kafka crawl requests and process 1K+ documents/sec on 1,000+ servers (Docker, Nomad).
- Doubled the crawling pipeline's throughput while sustaining 99.9% uptime by removing performance bottlenecks, cutting in-pipeline model latency by 63%, and resolving 20+ on-call incidents a year across Redis and HBase clusters.
- Proposed and delivered a browser rendering service end-to-end for client teams, from API design to production rollout and onboarding.
- Migrated the crawler's blob store from HDFS to S3-compatible object storage with fault-tolerant reads and writes, raising success rates from six to eight nines.

**Search Quality & Machine Learning**

- Built an end-to-end in-browser ML pipeline for web page content recognition in CPU-only environments, improving recognition accuracy to 92.7%. Presented at NAVER Engineering Day 2023.
- Built crawl-time hacked-site detection from SEO signals and HTML/DOM analysis, blocking 1M+ threats monthly.
- Built a VLM-based system that automates web document quality evaluation (99.1% accuracy), saving 180+ hours/year of manual evaluation. Presented at NAVER Engineering Day 2025.
