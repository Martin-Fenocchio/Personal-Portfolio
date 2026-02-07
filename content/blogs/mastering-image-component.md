---
title: "Mastering <Image/>"
date: "2025-01-28"
author: "Martín Fenocchio"
featuredImage: "/blogs/image-component/cover.avif"
excerpt: "Learn how to optimize images in Next.js using the built-in Image component. Discover how to use quality, priority, sizes, placeholder, and dimension props to improve your website's performance and Core Web Vitals."
description: "A comprehensive guide to Next.js Image component. Learn how to use quality, priority, sizes, placeholder, and dimension props to optimize images and improve your website's performance metrics and Core Web Vitals."
keywords: ["next.js", "image optimization", "Image component", "performance", "web development", "core web vitals", "LCP", "layout shift"]
tags: ["next.js", "performance", "optimization"]
order: 5
---

# Mastering <Image/>

**The images are probably the heaviest elements on a page**, which is why knowing how to optimize them properly is such a valuable skill for any developer. In a frontend world dominated by NextJS, it's great news that the framework includes a built-in component for image optimization.

This blog will cover all what you need to know about the NextJS component `<Image/>`, how to use it, its props and how to get the most out of it, let's go!

## Native vs NextJS element

The most common question when you start to use NextJS is what are the differences between the native HTML element `<img />` and the built-in NextJS component `<Image/>`.

The second one is an extension of the first one, the component `<Image/>` accepts some new properties that allow us to improve the performance of the image loading, **by the end of this article, you probably won't want to use the native HTML tag anymore**, let's explore what makes `<Image/>` special!

## Quality

The most easy new prop to understand is `Quality`, as the name indicates, it regulates the quality of the image, it accepts a value from 0 (very bad quality) to 1 (the original picture's quality).

**By default, NextJS sets the quality to 75** for all the images because it reduces the image's size and the decrease of definition is almost imperceptible from the human eye, 75 it's a good trade-off but you can set a different value.

**A good case to use 100 quality is for digital art**, for the rest, it's recommended to use the default 75.

## Priority

One of the most important things to improve the performance metrics of our page, **`priority` is a fundamental prop** that says to NextJS "This image is very important, please load it as fast as you can"

This prop sets automatically 2 native props of `<img/>`: `fetchPriority=high` and `loading=eager`, moreover, NextJS will preload the image using a `<link/>` in the head of our page.

**It's fundamental use this prop when the LCP (Largest Contentful Paint) of our page is an image**, and we should not use it for any other case.

## Sizes

Imagine you have an image that is 1800px wide, would you really want to show that to a mobile screen that is only of 400px wide? It's not a big deal and a very good point to optimize, here is when this prop comes in.

You can say to NextJS: "This image will be rendered occupying 1000px in desktop but in mobiles it will occupy the 100% of de screen's width".

**This will deliver a very light image to mobile devices**, impacting a lot in the performance metrics.

You can do it setting the prop like this:

```
sizes="(max-width: 768px) 100vw, 1000px"
```

Translation:

For screens with a max width of 768px (typical breakpoint for mobiles) deliver an image with the 100% of the screen's width but in larger screens, always deliver an image with a width of 1000 pixels.

## Placeholder

**This is a very interesting prop that does not improve the performance metrics but improves the user experience** visiting your page.

Typically, when you enter to a page, the images take 1,2,3 seconds to load meanwhile you see a blank space instead of the image, that blank space is what the prop `placeholder` comes to replace.

Instead of showing a blank space, you can show a blurred version of your image, which will be rendered meanwhile the real image loads, an example:

![Interactio to Next Paint Example](/blogs/images-format/placeholders.avif)

By default this prop is deactivated, but you can activate it setting `placeholder="blur"`.

_For remote images, you will need to blur by yourself the images, but you can use good libraries like `placeholder`_

## Width and Height

These are the most used props and the simplest, we only need to set the real dimensions of the picture we are using.

**NextJS using this information calculates the aspect ratio of the image**, and while the image is loading in the page, NextJS reserves the space that will take the image, **to avoid layout shifts when the asset loads**.

It's important to set the real dimensions of the picture, **not the dimensions that the picture will occupy in the page**.

This prop is not needed when the image is local, because NextJS will get the need values automatically. For remote images, you need to set the dimensions or use the prop `fill` to use the parent's dimensions.

## Conclusion

As we read in this article, NextJS offers a lot of tools to optimize the images of our page, **it's crucial as developers to know and set these props to get the best performance metrics**.

If you are interested in web performance, I recommend you other 2 articles: Images formats for web and Core web vitals.

