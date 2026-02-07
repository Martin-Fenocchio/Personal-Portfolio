---
title: "Optimizing Transfer Size"
date: "2025-02-06"
author: "Martín Fenocchio"
featuredImage: "/blogs/transferred-size/cover.png"
excerpt: "Learn how to optimize the initial transfer size of your web pages. Discover how to identify heavy files using Chrome DevTools and optimize images, videos, HTML, JavaScript, and third-party scripts to reduce download size."
description: "A comprehensive guide to optimizing transfer size - the total amount of data downloaded when a user first visits your page. Learn how to use Chrome DevTools Network tab, identify heavy files (images, videos, HTML, JavaScript, third-party scripts), and apply optimization techniques to reduce initial transfer size for better performance, especially on mobile devices."
keywords: ["transfer size", "performance", "web performance", "initial load", "network transfer", "optimization", "chrome devtools", "bundle size", "code splitting", "lazy loading", "web development"]
tags: ["performance", "optimization", "transfer size"]
---

# Understanding and Optimizing Transfer Size

The **initial transfer** of a page is the bunch of files that the browser has to download as soon as the user enters the page. It includes **CSS, HTML, JS, images, fonts**, etc. We always need to keep in mind the size of this initial transfer in order to optimize the performance metrics.

## How to debug transfer size

Fortunately, it's easy to debug, we can see the initial transfer of the page using the **DevTools in the "Network" tab**, there is a list of all the files with their sizes, priorities, waterfalls and types. At the bottom of the tab, we see **"X MB transferred"**.

We need to **keep this size as low as possible**, especially for mobile devices, when users often use mobile data, **each MB downloaded by the browser matters**.

## The most common heavy files

To optimize the transferred size first we need to know exactly what type of file is the heaviest, let's dive into the most common cases:

### 1. Images

One of the most common cases, a group of images can increase the transferred size in **many MBs**, so it's important to apply optimizations like **lazy loading**, converting the images to **efficient formats**, setting a **proper resolution**, etc.

### 2. Videos

A single video can have a **big size**, so we need to be very careful when using them. We have many recommendations to optimize videos in a dedicated article.

### 3. HTML

Sometimes the heaviest file on the list can be the **HTML document** of your page, in my personal experience, I faced cases where the HTML document has a size **higher than 3 MBs**, that is very crazy. The reason for the high size was the use of **many inline very large SVGs**, some of them had more than 3000 characters. The solution was to **move the inline SVGs to the public folder** and render them using `<img/>`.

### 4. Third-party scripts

When we use external services like **analytics, ads, or third-party libraries**, we can face the case of many files being downloaded for those services. This sometimes can be a hard problem to fix because **we do not have full control over external services**, so we need to manage the setup of those services to **delay the downloading** until more priority files are downloaded.

A well-known case is the **official YouTube player**, if we set an `iframe` with a YouTube video, our list of transferred files will have many files needed by the player, those files have a considerable size which impacts on the performance.

### 5. JavaScript

Sometimes, our own **Next.js app can generate many JS files**. For example, when we have many React components with a lot of logic, or using many libraries. If the JavaScript files are many and with a high size, we can use some techniques like **code splitting**.

Next.js has a very useful tool called **`next/dynamic`**, which helps you **separate the bundle of a specific component** from the initial bundle.
