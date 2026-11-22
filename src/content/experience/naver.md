---
organization: NAVER
role: Software Engineer
location: Seongnam, South Korea
start: 2021-12
end: Present
category: work
hidden: true
order: 30
---

**Distributed Systems & Platform Engineering**

- Led the migration of the web crawling platform to a cloud-native architecture: containerized, orchestrated, and optimized Java Spring Boot services that consume Kafka crawl requests and process 1K+ documents/sec on 1,000+ servers (Docker, Nomad).
- Doubled the crawling pipeline’s throughput while sustaining 99.9% uptime by profiling and removing performance bottlenecks, cutting in-pipeline model latency by 63%, and troubleshooting 20+ on-call incidents a year across Redis and HBase clusters.
- Proposed and delivered a browser rendering service end-to-end for client teams: gathered business requirements, owned the service from API design to production rollout, and supported client teams through onboarding and operational issues.
- Migrated the crawler’s blob store from HDFS to S3-compatible object storage, designing the key layout and lifecycle policies; made reads and writes fault-tolerant to intermittent errors, raising success rates from six to eight nines.

**Search Quality & Machine Learning**

- Designed and deployed an end-to-end in-browser ML pipeline for web page content recognition in CPU-only environments, built from scratch across data ingestion, preprocessing, training, serving, and monitoring; improved content recognition accuracy to 92.7%. Presented at NAVER Engineering Day 2023.
- Partnered with the content-quality team to keep hacked sites out of search results: built crawl-time blocking that complements their pre-index filtering, using SEO signals and HTML/DOM-based detection logic to filter 1M+ threats monthly for a search engine serving 4B+ queries per month.
- Proposed and built a VLM-based system that automates web document quality evaluation; reached 99.1% evaluation accuracy and saved 180+ hours/year of manual evaluation. Presented at NAVER Engineering Day 2025.
- Rebuilt and maintained the team’s onboarding program, a hands-on project that mirrors the production crawling architecture; since adopted to onboard engineers on neighboring teams.
