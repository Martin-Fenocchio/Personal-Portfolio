---
title: "Understanding Image Formats"
date: "2025-01-28"
featuredImage: "/blogs/images-format/cover.avif"
author: "Martín Fenocchio"
excerpt: "Learn how to choose the right image format for your web projects. Discover the differences between SVG, JPEG, PNG, WebP, and AVIF, and when to use each one for optimal performance."
description: "A comprehensive guide to image formats for web development. Learn about raster vs vector graphics, and when to use SVG, JPEG, PNG, WebP, and AVIF formats to optimize your website's performance and improve Core Web Vitals."
keywords: ["image formats", "webp", "avif", "svg", "png", "jpeg", "web development", "performance", "optimization", "core web vitals"]
tags: ["web development", "performance", "optimization"]
order: 2
---

# Developer Guide to Image Formats

Almost every page has images. They are important because they can be beautiful, informative, or work as visual breakers. But we as developers always face the doubt about what format we should use for our images. This article explains exactly that.

## Importance of the correct format

YouTube, after converting video covers to .webp, made the page load 10% faster.

Facebook reduced the size of images between 25% and 35% on JPGs and up to 80% on PNGs when converting them to .webp.

## The two types of images

In this world, there are two types of images depending on how they are composed: Vector graphics and Raster graphics. Let's see them!

### Raster Graphics

Raster images (also called bitmaps) are made of millions of tiny squares called pixels. Each pixel is assigned a specific color. They are resolution-dependent: if we increase the size of a raster image, the computer has to "guess" where to add pixels, making the image look blurry or "pixelated."

Common formats: .png, .jpeg

### Vector Graphics

These images are built from mathematical paths (lines, shapes, etc.). The computer does not paint pixel by pixel but draws lines and fills areas between points, making them independent of size. They are infinitely scalable without losing quality.

Common format: .svg

## SVG

Scalable Vector Graphics, created in 2001, is the king of vector images, offering perfect quality, very small sizes, easy animations, and infinite lossless scaling.

#### When to use it

Here is the key: we MUST use .svg only for images with geometrical figures like icons. We MUST NOT use .svg for landscapes, products, or camera pictures; in these cases, the .svg file size will increase too much.

⸻

## JPEG

Joint Photographic Experts Group, created in 1992, is probably the most universal image format. It works in all browsers and is well known to everyone.

The biggest drawback is the incompatibility with transparency, and modern formats solve this limitation.

Fun fact: .jpeg and .jpg are exactly the same. The difference comes from old Windows limitations that restricted file extensions to 3 characters.

#### When to use it

Not recommended to use; the newer formats are better in every aspect.

⸻

## PNG

Portable Network Graphics, created in 1996, is one of the most used formats. Its two biggest pros are the support for transparency and the high, lossless quality.

#### When to use it

When we need the highest image quality and we do not care about the image size, or when the image contains text.

⸻

## WebP

Created by Google in 2010, intended as a replacement for JPG and PNG. It supports good lossy and lossless compression, is compatible with transparency, and is widely supported by browsers.

#### When to use it

We should use .webp when the highest possible quality is not required and can be replaced by a smaller size. A .webp image commonly reduces PNG sizes by around 50% with almost no quality difference.

#### When not to use it

When the image contains text — the compression of .webp can lead to imperfect borders — or when the browser supports .avif.

⸻

## AVIF

Created around 2019, it's one of the newest image formats and probably the best one. Its biggest strength is fantastic size compression with no perceptible quality loss.

#### When to use it

In all cases where we want the smallest size and we do not need pixel-perfect quality. Although .avif has excellent resolution, it's not the best for images with text; in these cases .avif may not render the borders perfectly.

#### When not to use it

When we need 100% compatibility with very old browsers. Currently, the support rate is around 93%, but if we use Next.js we should not worry about this, because Next.js automatically creates a fallback to deliver the image in a compatible format for all older browsers.

⸻

## Conclusion

When I am coding a webpage, in 99% of cases I use only two formats: .svg for the icons and .avif for the rest. The .avif size compression is unreal — it can reduce the size by 80% with almost no quality loss.

This is critical for the performance of the page, it improves the Core Web Vitals significantly and the user will definitely feel the difference.

