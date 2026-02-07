---
title: "Optimizing Lottie Animations"
date: "2025-02-06"
author: "Martín Fenocchio"
featuredImage: "/blogs/lotties/cover.png"
excerpt: "Learn how to optimize Lottie animations for better web performance. Discover the differences between JSON and .lottie formats, compression techniques, and lazy loading strategies to reduce their impact on performance metrics."
description: "A comprehensive guide to optimizing Lottie animations for web performance. Learn about JSON vs .lottie file formats, file compression techniques, lazy loading with IntersectionObserver, and how to reduce the performance impact of Lottie animations on your website."
keywords: ["lottie", "lottie animations", "performance", "optimization", "web performance", "animation", "json", "lazy loading", "intersection observer", "file compression", "web development"]
tags: ["performance", "optimization", "lottie"]
---

# Optimizing Lottie Animations for Performance

Lottie animations on a page commonly represent a **huge problem for performance metrics** because of their **file size** and the **JavaScript work required to run them**. In this blog, we will cover techniques to reduce their impact on these metrics.

## File format and size

This is one of the **most important factors** to optimize the Lottie animations. There are two popular formats for the Lottie animation files: **`.json`** and **`.lottie`**, the most common case is to use JSONs but `.lottie` files can have a **lower size than JSONs** when the animation has many images.

There is not a rule about whether it's better to use JSONs or Lotties formats, a good option is to **ask the designer to bring us both options** and then choose the lighter one.

The JSONs have **better compatibility** than the `.lottie`, but for web, we can use any of them because there are libraries to render both JSONs and `.lottie`.

In terms of file size, we can find Lottie animations (no matter the file format) with a wide range of file sizes, some can have a size of **a few KBs** and others can have a size of **a few MBs**. It depends on the **complexity of the animation**.

Of course the size of the file impacts performance metrics, so we need to **define the trade-offs of animation complexity** with the designer.

## File compression

Once we have the final Lottie file, we can try one of the **online compressors** to check if we can save some KBs in the file, sometimes the compression reduces the quality of the animation but sometimes does not, so it's a good idea to check it.

There are many pages, for example a famous one is: [LottieFiles Optimizer](https://lottiefiles.com/tools/lottie-json-to-optimized-lottie-json)

## Lazy loading

The Lottie player **does not provide a lazy loading feature** for the animations, but we can do a custom solution using JavaScript.

If the animation is far from the initial viewport of the page (let's imagine, in the footer), we can use **`IntersectionObserver`** to delay the download of the assets until the footer is close to the viewport. This will help to **reduce the initial network transfer**, leading to better performance metrics.
