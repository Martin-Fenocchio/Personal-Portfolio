import React from "react";
import "./globals.css";
import "../src/assets/styles/global.scss";
import "../src/assets/styles/about-me.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.webp" />
        <meta name="theme-color" content="#030228" />

        <title>Martín Fenocchio</title>
        <meta
          name="description"
          content="4 years of experience. App and web developer. Specialized in React JS and Flutter. Creator of
open source libraries and passionate about technology."
        />
        <meta property="og:url" content="https://martinfenocchio.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Martín Fenocchio" />
        <meta
          property="og:description"
          content="4 years of experience. Web and App developer. Specialized in React JS and Flutter. Creator of
open source libraries and passionate about technology."
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/documents/8f79947a-ad03-4cca-afaa-822318260b6a.png?token=Imjbk8GDct5-XK6oGKl28MqnvOmzkassAYP6KjLaEqE&height=598&width=1200&expires=33247390448"
        />
      </head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-32TZ1BX014"
      ></script>
      <body>{children}</body>
    </html>
  );
}
