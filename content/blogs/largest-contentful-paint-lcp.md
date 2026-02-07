---
title: "LCP: The Key Performance Metric"
date: "2025-02-06"
author: "Martín Fenocchio"
featuredImage: "/blogs/lcp/cover.png"
excerpt: "Learn about Largest Contentful Paint (LCP), one of the most important Core Web Vitals. Understand how LCP measures the largest content element load time and its relationship with TTFB and TBT metrics."
description: "A comprehensive guide to Largest Contentful Paint (LCP) - the Core Web Vital that measures how long it takes to load the largest content element on your page. Learn what elements qualify as LCP candidates, how TTFB and TBT affect LCP, and discover optimization strategies for images, videos, and Lottie animations."
keywords: ["LCP", "largest contentful paint", "core web vitals", "performance", "web vitals", "TTFB", "TBT", "page speed", "lighthouse", "web performance", "optimization"]
tags: ["performance", "web vitals", "LCP"]
---

# Largest Contentful Paint (LCP)

The **Largest Contentful Paint** is one of the **most important metrics for performance**, it measures how much time it takes to load the **largest element of our page**, for example, the video or image in the hero, a Lottie animation or in some cases the biggest heading of the page.

## What elements can be the LCP?

The first thing we need to keep in mind is that **not any element of the page can be used for the LCP metric**, as the "C" in the name indicates, it must be **contentful**, so only **images, videos or texts** will be candidates, if we have a huge div red painted, it won't be a candidate because it does not have content. 

![LCP Example](/blogs/lcp/lcp-demo.avif)

## How TTFB and TBT affect LCP

The LCP depends on another 2 metrics, the **TTFB** and **TBT**, let's dive in.

If the TTFB is 2s, **the LCP will be at least 2s**, the LCP is totally conditioned to the TTFB. Moreover, a high TBT can also increase the LCP, for example, maybe an image (our LCP) is downloaded and ready to render, but maybe some tasks are **blocking the main thread** so the browser does not render the image, increasing the LCP.

However, **low TTFB and TBT do not mean a low LCP**, those 2 metrics can be fine, but if we do not optimize our LCP, the metric could be high.

## How to optimize LCP

To optimize this metric, first we need to **detect what is our LCP**, tools like **PageSpeed** or **Lighthouse** indicate it to us.

We have a dedicated article for some of the most popular cases of LCP and how to optimize it:

- How to optimize images: Link
- How to optimize videos: Link
- How to optimize Lottie animations: Link
