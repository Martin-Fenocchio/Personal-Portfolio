---
title: "What are the core web vitals"
date: "2025-01-27"
author: "Martín Fenocchio"
featuredImage: "/blogs/cwv/cover.avif"
excerpt: "Understanding the 3 most important metrics for website performance: LCP, INP, and CLS. Learn how to monitor and improve these metrics for better user experience and SEO."
description: "A comprehensive guide to Core Web Vitals - the three most important performance metrics that Google uses to rank websites. Learn about Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS), and how to optimize them."
keywords: ["core web vitals", "performance", "LCP", "INP", "CLS", "web development", "SEO", "web vitals", "page speed"]
tags: ["performance", "web vitals", "SEO"]
order: 6
---

# Core web vitals

The **Core Web Vitals** are the **3 most important metrics** about the performance of a website, as developers is a **MUST to monitorice and improve these metrics**, not only for the user experience but because **Google use these metrics as a factor to rank our website** in its search engine.

Let's go to understand what are the Core Web Vitals.

## What are CWV?

As I mentioned before, the CWV are the **3 most important metrics** about the performance of our websites, these 3 are: **Cumulative Layout Shift (CLS)**, **Interaction to Next Paint (INP)** and **Largest Contentful Paint (LCP)**, let's see each of them.

## Largest Contentful Paint

![Largest Contentful PaintExample](/blogs/cwv/lcp.avif)

This metric measures **how long takes to the largest element on the page** to load, let's see an example:  

In this page, the largest element is by far the car's picture, that element is the **heaviest and biggest part of the initial viewport**, and **the time it takes to load is the LCP**.

### Things to consider about LCP

#### 1. The element must be contentful

It means that **only elements like texts, images or videos are valid**. An empty huge div won't be used for the LCP because **it does not have content**.

#### 2. The element must be in the initial viewport

It means that if the website has a huge image on the last part of the website, **it won't be used for the LCP**, only will be used **the elements that are visible as soon as the user enters to the page**.

#### 3. How to detect is the element

Just in case if your page has many possible candidates to be the largest Contentful element, you can check it using the dev tools, opening the Performance tab and there you will see the largest contentful element of the page.

## Interaction to Next Paint (INP)

![Interactio to Next Paint Example](/blogs/cwv/inp.avif)


**INP measures the responsiveness of your website**. More specifically, it tracks **how long it takes from the moment a user interacts with the page** (like clicking, tapping, or pressing a key) **until the next frame is painted**. In simpler words: **INP tells us how fast the UI reacts to the user's actions**.

If the user clicks a button and the interface takes too long to visually respond, **that delay is captured by INP**. **Google considers INP to be one of the best indicators of real-world interactivity**.

### Things to consider about INP

#### 1. INP focuses on the worst interactions

**INP doesn't average all interactions** — it looks at **the slowest meaningful ones**. If your page feels instant most of the time but **one button takes 300ms to react, that single bad interaction will likely define your INP score**.

#### 2. INP measures visual feedback

**It's not enough that your click event fires quickly**. **The metric ends when the browser paints the updated UI**. So even if your JavaScript runs fast, **blocking render tasks or heavy computations can delay the visual update and increase INP**.

#### 3. How to detect slow interactions

Just open the Performance tab in DevTools and record an interaction. You will be able to see which event listeners, JavaScript functions or rendering tasks are causing delays and increasing your INP.

## Cumulative Layout Shift (CLS)

![Cumulative Layout Shift Example](/blogs/cwv/cls.avif)

**CLS measures how much elements on the screen move unexpectedly**. Users hate when the page **"jumps"** while they are reading or just about to click something. **CLS tracks exactly that — visual instability**.

**A high CLS means your layout shifts during load**, which is **one of the most common UX issues**, especially on content-heavy pages.

### Things to consider about CLS

#### 1. Layout shifts must be unexpected

**Not every movement counts**. **Only shifts that happen without the user triggering them** (like scrolling or pressing a button) **will increase CLS**.

#### 2. Images without dimensions will shift the layout

**If the browser doesn't know the width and height of an image before downloading it**, it must guess the space, which **usually causes everything to jump once the actual size arrives**.

That's why in NextJS **this problem is almost solved by default using the <Image /> component**, because **it reserves the correct aspect ratio from the very beginning**.

**Ads, iframes and dynamic components are common culprits**

**Dynamic content that pushes things down or to the side will always generate layout shifts** unless **you reserve its space ahead of time**.

#### 3. How to detect layout shifts

Once again, the Performance tab in DevTools is your best friend. When you record page load, DevTools will show each layout shift and even highlight which elements moved and by how much.

