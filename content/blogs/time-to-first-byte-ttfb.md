---
title: "TTFB: Server Response Time"
date: "2025-02-06"
author: "Martín Fenocchio"
featuredImage: "/blogs/ttfb/cover.png"
excerpt: "Learn about Time To First Byte (TTFB), a critical performance metric that measures server response time. Discover how Next.js routing strategies like SSG, ISR, and SSR affect TTFB and how to optimize it."
description: "A comprehensive guide to Time To First Byte (TTFB) - the performance metric that measures how long it takes for the server to send the first byte of response. Learn why TTFB is a backend issue, how Next.js routing strategies (SSG, ISR, SSR) impact TTFB, and discover optimization techniques for better server response times."
keywords: ["TTFB", "time to first byte", "performance", "nextjs", "SSG", "ISR", "SSR", "server response", "web performance", "backend optimization", "vercel", "lighthouse"]
tags: ["performance", "nextjs", "TTFB"]
---

# Time To First Byte (TTFB)

The **Time To First Byte** measures the time since the browser requests the page to the server until the browser gets the **first byte of information from the server**, it's an issue **totally about backend**.

![TTFB Example](/blogs/ttfb/ttfb.webp)

## TTFB in Next.js and Vercel

Imagine when you are building a page using **Next.js** and deploying it in **Vercel**, in this case, you have some good recommendations to follow if you want to improve the TTFB metric. 

This metric will be highly affected by the **settings of your Next.js router**, for example you will have undoubtedly best results if your page uses **SSG (Static Site Generation)**, similar if the page uses **ISR (Incremental Static Regeneration)**, because in these cases the server will send the needed files to your browser **without needing to wait for database queries or external API requests**, the server won't have to do slow or hard work to send the needed bundle to your browser, this means **lower TTFB**.

## The impact of SSR on TTFB

On the other hand, if your page has **SSR (Server-Side Rendering)**, the server will have to **process each user request**, doing all the needed tasks with databases or external APIs before sending the bundle to the browser, all these tasks will **increase the TTFB**.

## Optimizing TTFB with Next.js

Next.js brings very powerful tools to improve this metric as we mentioned. A **correct management of the route settings and cache** in your Next.js app will considerably improve the Time To First Byte metric of the site.
