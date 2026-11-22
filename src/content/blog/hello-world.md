---
title: "Sample post: what Markdown can do here"
description: A hidden sample post that shows the formatting available on this blog. It only appears in local preview.
date: 2026-11-22
tags: [meta]
hidden: true
---

This post is **hidden** (`hidden: true`), so it appears only when you run the site locally. Delete it or use it as a template.

## Code

```python
def minhash_signature(shingles: set[str], num_perm: int = 128) -> list[int]:
    return [min(hash((seed, s)) for s in shingles) for seed in range(num_perm)]
```

## Math

Jaccard similarity of two documents $A$ and $B$:

$$
J(A, B) = \frac{|A \cap B|}{|A \cup B|}
$$

## Tables and quotes

| Stage | Throughput |
|---|---|
| Fetch | 1K docs/s |
| Parse | 1K docs/s |

> Notes from reading papers fit nicely in quotes.

## Images

Upload images in the editor (they go to `public/images/`) or reference them as `![alt text](/images/file.png)`.
