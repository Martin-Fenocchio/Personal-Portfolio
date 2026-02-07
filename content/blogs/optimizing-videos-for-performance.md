---
title: "Optimizing Videos for the Web"
date: "2025-02-06"
author: "Martín Fenocchio"
featuredImage: "/blogs/video/cover.png"
excerpt: "Learn how to optimize videos for better web performance. Discover video formats, codecs like AV1 and VP9, mobile optimization strategies, lazy loading techniques, and advanced methods like adaptive streaming and fast start."
description: "A comprehensive guide to optimizing videos for web performance. Learn about video formats (MP4, WebM), codecs (AV1, VP9, H.264), mobile-specific optimizations, lazy loading with IntersectionObserver, adaptive streaming, and fast start techniques to reduce video impact on performance metrics."
keywords: ["video optimization", "performance", "web performance", "AV1", "VP9", "H.264", "codec", "MP4", "WebM", "adaptive streaming", "lazy loading", "video compression", "web development"]
tags: ["performance", "optimization", "video"]
order: 4
---

# Optimizing Videos for Web Performance

The videos on a page commonly represent a **huge problem for the performance metrics** but in this blog we will talk about good techniques to reduce the impact of these assets on the metrics.

## Formats and codecs

Not all the video formats are the same, **MP4 is not the only format** for videos, there are more like **WebM** which can have better compression. But the file weight is not determined only by the format, **the most important factor is the codec**.

The codecs are **algorithms that determine how the video is encoded and decoded**, this is the key for video optimization, there are many different codecs like **H.264**, **VP9**, **AV1**, etc. 

They have different results in the compression, for example **AV1 is very efficient but is not widely compatible** for all the browsers, while **VP9 is good too and more compatible**.

A recommended option for us as devs, is to convert the original file from MP4 to MP4 but using the codec AV1 and another copy using WebM with the codec VP9. So we will have a **group of 3 videos in different formats** for all the level of compatibility for the browsers. 

Once we have the 3 copies, we can use them in HTML like the following example:

	<video
	  controls
	  preload="metadata"
	  poster="/media/video-poster.jpg"
	  playsinline
	  width="1280"
	  height="720"
	>
	  <!-- Best efficiency (modern browsers): AV1 in MP4 -->
	  <source
	    src="/media/video.av1.mp4"
	    type='video/mp4; codecs="av01.0.05M.08"'
	  />

	  <!-- Great efficiency + broad modern support: VP9 in WebM -->
	  <source
	    src="/media/video.vp9.webm"
	    type='video/webm; codecs="vp9"'
	  />

	  <!-- Universal fallback: H.264 in MP4 -->
	  <source
	    src="/media/video.h264.mp4"
	    type='video/mp4; codecs="avc1.42E01E"'
	  />

	  Sorry, your browser doesn't support embedded videos.
	</video>

We must **define correctly the attribute `type`** of each `<source>` to ensure the browser chooses the best option. 

## Videos on mobile

In unoptimized pages, we often use the **same wide video for desktop and mobile resolutions**, this is a **huge opportunity for improvement**, we can provide a smaller video for mobile screens.

Imagine we have in the hero of the page, a huge video of **1920px**, the resolution is nice for desktops, but it's **too big for mobiles** (the mobile screens are around 400px), so we can have a **smaller version of the video (800px for example)** and use it only for mobile screens, this will lead to a **huge reduction in the file size** and better performance metrics.

## Lazy loading

HTML **does not provide a lazy loading feature** for the videos as it does for the images, but we can do a custom solution using JavaScript.

If the video is far from the initial viewport of the page (let's imagine, in the footer), we can use **`IntersectionObserver`** to delay the download of the video until the footer is close to the viewport. This will help to **reduce the initial network transfer**, leading to better performance metrics.

## Advanced optimizations

With the previous techniques, we probably will reduce a considerable part of the impact of the videos in the performance metrics, but if we want to go beyond these recommendations, we have another two techniques to recommend:

### Adaptive Streaming

Did you notice when you watch a YouTube video that **the browser does not download the entire video at once** before starting to play it? The page downloads it dynamically while we are watching it, this is called **Adaptive Streaming**.

Adaptive Streaming is a very good technique when we need to show a **long video**, instead of making the browser download all the video when the user did not start to watch it, we can use this technique to **download the video dynamically**.

This technique is not too easy like the previous ones but it's not impossible, using third-party services like **Cloudflare Stream** or **Vimeo** we can achieve it.

### Fast start

The MP4 files have two parts, the first is the **"moov"**, there is where all the **metadata of the video** is, like duration or dimensions, and the second part is where all the frames of the video are.

Sometimes, some videos have the **moov at the end of the file**, forcing the browser to download all the video to get the required metadata to render the video.

When the video has the **moov at the beginning of the file**, the browser can **start to render it even without finishing the complete download**, leading to a better UX.
