---
title: "Why PageSpeed Scores Fluctuate"
date: "2025-02-06"
author: "Martín Fenocchio"
featuredImage: "/blogs/ttfb/cover.png"
excerpt: "Understanding why Lighthouse and PageSpeed scores vary between tests, and why this is normal. Learn the real reasons behind score fluctuations and better tools for tracking performance improvements."
description: "Discover why Lighthouse and PageSpeed Insights scores fluctuate between tests, even on the same page. Learn about network variations, third-party scripts, threshold effects, and why Chrome DevTools provides more stable performance measurements for tracking code changes."
keywords: ["lighthouse", "pagespeed", "performance", "web vitals", "TBT", "performance testing", "chrome devtools", "web performance", "score fluctuations", "performance metrics"]
tags: ["performance", "lighthouse", "web vitals"]
---

# Why PageSpeed and Lighthouse Scores Fluctuate

When we are trying to optimize a page, we often use tools like **PageSpeed** or **Lighthouse** to get the performance metrics, but when using them it's very common to face a deceptive case: **in the same page, the same tool, but the scores significantly vary**.

This is a big problem for us, we only want to check if our last code changes improved the metrics, but after an optimization we see that the TBT went from 300ms to 500ms for no reason, even worse: we analyze the same page without code changes but the scores vary too, this is mind-blowing!

But **this is totally normal and fine**, let's dive into the reasons of these variations.

## Network variations

The main reason for the variations is as simple as **the network has the same variations**, when we fetch an image, or when we fetch an endpoint or do a query in a database, **the response time is never the same**, it fluctuates on a very small scale for the human eye, but **in terms of milliseconds it is significant**.

Lighthouse metrics like **TBT** (one of the most important metrics in the performance score) are in milliseconds, if a task that blocks the main thread is waiting for the downloading of a third-party script, **any variation in milliseconds will considerably affect the TBT**, moreover, more TBT can increase the LCP and Speed Index.

As **third-party scripts, remote assets, cache state, or server responses are not stable**, the performance scores won't be stable. 

## Threshold effects

Another reason: **thresholds**, Lighthouse uses ranges, if a task that blocks the main thread takes **49 milliseconds**, the TBT contribution will be **0**, but if the same task in another analysis takes **51 milliseconds**, the TBT will jump to **51ms**. Similar situations happen with LCP or CLS, where the thresholds are strictly defined.

## How to track performance changes reliably

So, how should I check if my recent code changes improved the scores? Well, as we mentioned, **you should not use PageSpeed or Lighthouse for small changes**, but you can use the **Chrome DevTools**.

### Performance tab

There you have two important tabs: **Performance** and **Network**, in the Performance tab you can measure the total blocking time with a breakdown and many details, **this measurement is very stable** compared to Lighthouse. This is a very good way to track the TBT of your page.

### Network tab

The Network tab shows you the **transferred bundle size**, it is all the assets downloaded by the browser to show the page, it includes images, videos, JavaScript, CSS, etc. You have to **keep as low as possible the bundle size and the downloading time**, these two values are very stable and very important for all the Lighthouse metrics.
