---
title: "First steps to optimize a page"
date: "2025-01-29"
author: "Martín Fenocchio"
featuredImage: "/blogs/optimizing-page/cover.avif"
excerpt: "Learn how to optimize your page performance by converting images, improving LCP, reducing first load size, using dynamic imports, and avoiding main thread blocking. Essential techniques for better Core Web Vitals."
description: "A comprehensive guide to page optimization covering image conversion, LCP improvement, first load size reduction, dynamic imports, and main thread optimization techniques."
keywords: ["performance", "optimization", "LCP", "first load", "dynamic imports", "main thread", "core web vitals", "web development"]
tags: ["performance", "optimization"]
---
## Introduction

Optimizing a Next.js page is not just about choosing a good hosting provider or writing clean code. **Modern performance comes from understanding how the browser works, how JavaScript affects rendering, and how each decision—images**, scripts, components, data fetching—impacts the user experience.

In this article, I’ll share **the most important and practical techniques** I use to make any Next.js page faster, lighter, and smoother.

## Converting images

The first step I take is optimizing the images, some image formats better than others, so we need to choose the best image format for each picture, I wrote a [complete article](https://www.martinfenocchio.com/blogs/understanding-image-formats) about how to choose the best format.

To summarize the article, I almost always use SVG for the vector icons and .AVIF for the rest of images. **Choosing a good format for an image can reduce its size up to 50%.**

I always convert the images using the page [squoosh.app](https://squoosh.app/), developed by Google, in my opinion, is the best image format converter that gets the best size decrease with the minimum quality loss.

## Improving the LCP

The LCP, the Largest Contentful Paint, measures the render time of the largest contentful element of the initial viewport of a page, **this render time is one of the most important metrics about the performance.**

Sometimes, we are lucky to have as largest element a simple heading or text, but in most cases, the largest element is an image.

In that case, we have to use all our skills to improve the image loading: choosing the best image format and using techniques in code, as using the prop `fetchPriority`, or `loading=eager`, I wrote a [complete article](https://www.martinfenocchio.com/blogs/mastering-image-component) explaining how to optimize to the fullest the images in NextJS.

**Using the proper code techniques can significantly improve your LCP score.**

## First load size

When we visit a page, the browser downloads all the needed files, those files include the javascript code, the styles, assets and whatever is needed to render the page. That's called "First Load".

**The First load size should not be higher than 1mb, an excellent number would be <500kb.**

The higher the size, the heavier the work the browser have to do, more time downloading files and more work for the main thread; **All these will affect directly to the core web vitals of our page, so it's crucial to keep this concept in mind.**

We can easily get the first load size opening the browser dev tools, going to the network tab and checking the transferred size at the bottom of the panel.

In the network tab, we can also know what files are included in the first load size (we should activate the source maps for easier detection)

## Import dynamically

When we have a big first load size, we need to optimize it, and a good way to do that in Next.js is to import some components dynamically.

Imagine we have a large page with 6 different sections, each one with images, animations, styles and javascript logic; if we do not optimize properly the code, all those files and assets will be downloaded in the first load, which is not correct, **only the resources needed for the initial viewport should be downloaded in the first load.**

For example, we can "split" the first load, using the official NextJS's package `next/dynamic`, for example:

```typescript
const AboutUsSection = dynamic(() => import('@/components/about-us/index.tsx'));
```

## Avoid blocking the main thread

The browser has a single main thread that is responsible for doing almost everything: running JavaScript, rendering the UI, handling user input and more. **If we block that thread with heavy JavaScript work, the page will feel slow, janky, and unresponsive, even if the server is fast and the HTML is well optimized.**

Some common operations that can block the main thread are:

- Parsing or stringifying large JSON objects
- Running big loops or complex calculations
- Using useLayoutEffect in ways that delay the initial paint
- Doing synchronous data transformations on every render
- Loading or decoding large images synchronously

## Wrapping up

Improving performance is not about applying a single technique; **it’s the combination of many small optimizations that creates a truly fast experience.**

By choosing the right image formats, keeping the first load small, loading components dynamically, and avoiding work that blocks the main thread, you ensure that your Next.js page stays responsive and efficient. **Apply these ideas consistently, and your users—and your Core Web Vitals—will notice the difference.**