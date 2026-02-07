---
title: "CLS: Preventing Layout Shifts"
date: "2025-02-06"
author: "Martín Fenocchio"
featuredImage: "/blogs/cwv/cover.avif"
excerpt: "Learn about Cumulative Layout Shift (CLS), a Core Web Vital that measures visual stability. Discover the most common causes of CLS and practical solutions to prevent layout shifts on your website."
description: "A comprehensive guide to Cumulative Layout Shift (CLS) - the Core Web Vital that measures visual stability. Learn why CLS represents 20% of Lighthouse performance score, understand common causes like images without dimensions, ads, and fonts, and discover practical solutions to achieve zero CLS."
keywords: ["CLS", "cumulative layout shift", "core web vitals", "performance", "web vitals", "layout shift", "visual stability", "lighthouse", "web development", "frontend optimization"]
tags: ["performance", "web vitals", "CLS"]
---

# Cumulative Layout Shift (CLS)

The **Cumulative Layout Shift (CLS)** is the second metric in the hierarchy in the composition of the performance score in Lighthouse, **representing 20% of the score**, undoubtedly we have to keep a close watch on it.

Fortunately, CLS is not too complex to understand and prevent, this metric **measures how much the elements of a page move while the site is loading**. 

For example, if an ad banner appears 2 seconds after the initial render of the page pushing all the headings, texts and images, **the CLS of that page will be high**. However, if we **reserve the space** that the banner will fill, the CLS will be zero because the elements of the page were initially placed in their final positions.

![CLS Example](/blogs/cls/cls-demo.avif)

### The most common causes

## Images with no reserved spaces

Imagine we have an article page, with many images and texts, if we don't reserve the space that each image will use, the CLS will be high, but if we simply **set in all the `<img/>` elements the width and height**, or simply the **aspect-ratio**, the CLS will be zero. 

## Ads or cookie banners

This is another very common cause, a page shows a huge banner with delay in the top, bottom or anywhere **without previously reserving the space**, will increase significantly the CLS, the solution is the same as the images: **reserve the space**.

## Fonts

This reason is less popular but valid, when we have a **custom font which is downloaded from a remote server**, the browser must download the font files, but meanwhile the browser shows the texts with a fallback font. 

The problem is when the browser applies the new font, if the new font has **different style** (like different line height, characters width, spacing, etc), in these cases, the texts with the new font can fill more or less space, **moving the other elements of the page**, increasing the CLS.

Another reason for CLS produced by fonts is when the browser shows **invisible texts while downloading the custom font**, once the download is finished, the browser applies it and renders the texts, moving other elements.

**The solution** is to use **fallback fonts with similar properties** to the custom ones, for example, if your custom font is in the sans fonts group, set a fallback from that group, you should not set, for example, as fallback a serif font if your custom font is sans.
