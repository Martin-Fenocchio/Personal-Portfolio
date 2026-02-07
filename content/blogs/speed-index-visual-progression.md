---
title: "Speed Index: Visual Progression"
date: "2025-02-06"
author: "Martín Fenocchio"
featuredImage: "/blogs/speed-index/cover.png"
excerpt: "Learn about Speed Index, a Lighthouse metric that measures visual progression from blank page to fully rendered content. Discover why gradual content appearance beats fullscreen loaders and how skeletons improve Speed Index."
description: "A comprehensive guide to Speed Index - the Lighthouse metric that measures visual progression of page rendering. Learn how Speed Index compares screenshots to calculate visual completeness, why gradual content appearance is better than fullscreen loaders, and discover practical techniques like skeleton loaders to improve your Speed Index score."
keywords: ["speed index", "lighthouse", "performance", "visual progression", "page speed", "web performance", "skeleton loader", "loading states", "web vitals", "optimization"]
tags: ["performance", "lighthouse", "speed index"]
---

# Understanding Speed Index and Visual Progression

The **Speed Index (SI)** is a metric that is included in the Lighthouse reports, it **measures the visual progression** since the page is blank (when we enter the site), until the page is completely rendered.

![Speed Index Example](/blogs/speed-index/speed-index-example.png)

## How Speed Index is calculated

Lighthouse generates a **filmstrip** and compares each screenshot versus the final image to calculate **what percentage of the page is visible as early as possible**. 

## Bad example: Fullscreen loaders

If the page starts blank, then a **fullscreen loader appears** and 3 seconds later suddenly appears all the final content, **the SI will be high**, because there was no gradual progression of the elements, it went from a fullscreen loading to the final content.

## Good example: Gradual content appearance

If the page starts blank, but it quickly shows the **headings**, **placeholders reserving the space** while the images are downloading and some **skeletons** for the rest of the content that is being fetched, the **Speed Index will be lower**, because the page will show a **smooth visual progression** in the appearing of each element, it won't be instant changes between blank to full content. 

## Using skeleton loaders

A good way to avoid a high Speed Index is by using the previously mentioned **skeletons**, if we have a page that includes a table with items fetched from an API, instead of showing an empty table while the request is being processed, we can show a **skeleton loading in the table**, using a similar size and structure for the skeleton will **simulate and reserve the space** for the real data, it will improve the UX and help to have a better Speed Index.

## Why fullscreen loaders don't help

We need to be aware of the fullscreen loaders, we can think that they are good for Speed Index because we are showing something instead of an empty viewport, but **Speed Index does not measure how much time was the viewport empty**, the Speed Index **compares the visual progression to the final viewport**, if your fullscreen loader does not have a similar aspect or structure (most probably), the loader won't help to have a better Speed Index.
