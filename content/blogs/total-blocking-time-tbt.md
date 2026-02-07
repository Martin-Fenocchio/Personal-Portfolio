---
title: "TBT: Main Thread Blocking"
date: "2025-02-06"
author: "Martín Fenocchio"
featuredImage: "/blogs/tbt/cover.png"
excerpt: "Learn about Total Blocking Time (TBT), a critical performance metric that measures how long the main thread is blocked by JavaScript tasks. Discover how to reduce TBT through hydration optimization, dynamic imports, and third-party script management in Next.js."
description: "A comprehensive guide to Total Blocking Time (TBT) - the performance metric that measures main thread blocking. Learn how the main thread works, why tasks over 50ms contribute to TBT, and discover Next.js optimization techniques including reducing hydration, using dynamic imports, and managing third-party scripts with next/script."
keywords: ["TBT", "total blocking time", "performance", "main thread", "javascript", "nextjs", "hydration", "dynamic import", "web performance", "lighthouse", "optimization", "blocking tasks"]
tags: ["performance", "nextjs", "TBT"]
order: 1
---

# Total Blocking Time (TBT)

## Understanding the Main Thread

The first thing we need to understand is the **"Main Thread"**, it's where **all the JavaScript code is executed**, every JavaScript function of your page is run in this thread, it includes tasks such as **rendering, DOM updates, layout calculations, user events**, etc.

The main thread **only processes one task at a time**, so if there is a complex task that takes so much time to be completed any other task as the user interaction in the page will have to wait until the long task is completed, here is where **Total Blocking Time (TBT)** appears.

## How TBT is calculated

The unit of this metric are the **milliseconds**, all the JavaScript code that is executed takes some time to be completed, if an execution takes **more than 50 milliseconds**, this task will contribute to the TBT.

If an execution takes 40 milliseconds, the TBT contribution of this task will be **zero**, but if the execution takes 58 milliseconds, the contribution will be **8 milliseconds**.

A task contributes only if it takes more time than 50ms, but the amount of contribution will be the **milliseconds after the 50ms threshold**. If the task takes 58ms, the contribution will be the excess over the threshold (50ms).

## Debugging TBT with DevTools

We can see the tasks and their duration using the **DevTools**, in the **"Performance" tab**, we can see a trace with all the tasks executed in the main thread, each task is represented as a rectangle, the width of the rectangle represents the duration of task (the wider the rectangle, the longer the duration). If the duration is higher than 50ms, the task contributes to the TBT.

The TBT of a page is **acceptable if it's lower than 200ms**, it's **bad if it's higher than 600ms**.

## Recommendations to reduce TBT

In order to have a low TBT, we can follow these recommendations:

### Reduce hydration

The hydration is a complex task ran for every client component of the page, so **the fewer client components we have, the lower hydration**.

The **server components of Next.js do not need hydration**, so they do not contribute to TBT by hydration.

In case that you have a client component with a complex hydration, you can try the library **next-lazy-hydration-on-scroll** to delay the hydration until the component enters the viewport.

### Dynamic Import 

Next.js has a very useful tool called **`next/dynamic`**, which helps you to **delay the parsing and execution of a component**.

Imagine you have a page with a modal that only is rendered under a specific condition, the modal has a heavy logic so its hydration contributes a lot for the TBT, if you **dynamically import the modal component**, the contribution will be lower (even zero), because React won't process the component until the render condition of the modal are satisfied.

The dynamic import **will not be useful for components immediately rendered** in the page, for example, if you dynamically import the footer of your page, React will parse and execute it as soon as the user enters the page. The dynamic import **only has effect when the component is conditionally rendered**. 

### Third-party scripts

Third-party scripts often **contribute significantly to TBT**, fortunately Next.js provides the **`next/script`** to control how and when the script is loaded.

	import Script from 'next/script';
	
	function MyApp({ Component, pageProps }) {
	  return (
	    <>
	      {/* Critical script that blocks rendering */}
	      <Script src="https://critical-script.com/script.js" strategy="beforeInteractive" />
	      
	      {/* Load after page becomes interactive */}
	      <Script src="https://analytics.com/script.js" strategy="afterInteractive" />
	      
	      {/* Load during browser idle time */}
	      <Script src="https://non-essential.com/script.js" strategy="lazyOnload" />
	      
	      <Component {...pageProps} />
	    </>
	  );
	}

Using the **appropriate strategy** can have a huge impact on the TBT.
