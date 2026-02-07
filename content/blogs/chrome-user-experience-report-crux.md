---
title: "CrUX: Real User Metrics"
date: "2025-02-06"
author: "Martín Fenocchio"
featuredImage: "/blogs/crux/cover.png"
excerpt: "Learn about Chrome User Experience Report (CrUX), a public dataset with real user performance metrics. Understand why CrUX data matters more than Lighthouse or PageSpeed lab results."
description: "Discover Chrome User Experience Report (CrUX) - a public dataset with real user performance metrics. Learn how CrUX differs from Lighthouse and PageSpeed lab data, why it aggregates over 28 days, and why real user metrics should take priority over simulated laboratory tests."
keywords: ["CrUX", "chrome user experience report", "real user metrics", "RUM", "web vitals", "performance metrics", "LCP", "INP", "lighthouse", "pagespeed", "user experience"]
tags: ["performance", "web vitals", "CrUX"]
---

# Chrome User Experience Report (CrUX)

**Chrome UX Report (CrUX)** is a **public dataset with real metrics about real users**.

## Laboratory data vs Real user data

When we use Lighthouse or PageSpeed, the data we get is from the laboratory, this means **many metrics are simulated**. This helps us to get an overall picture of the situation but **it does not reflect the real user experience**.

When we use Chrome and enter a page, in the background, **the browser calculates the metrics of the performance** of the page we are visiting, like the LCP or INP, the browser stores these metrics in a **public and anonymous dataset**.

![CrUX panel](/blogs/crux/crux-panel.avif)

## How to access CrUX data

We can get CrUX data using many tools, like **PageSpeed**, which shows CrUX and laboratory data, but we can also use **DebugBear** or **Search Console**.

## Important facts about CrUX

### 28-day aggregation period

CrUX **aggregates data over a 28-day period**, if we made a huge change yesterday on our site, we won't see the difference in CrUX because it's an aggregate of a long period of time. 

### Traffic requirements

CrUX is **only available for pages with significant traffic**, if our page is barely visited, it won't collect data. 

### CrUX over laboratory data

CrUX has the most important metrics about performance, **always we should take care of CrUX metrics over the Lighthouse, PageSpeed or DebugBear**, they are laboratory data, but **CrUX is real metrics**.
