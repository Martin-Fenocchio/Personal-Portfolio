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
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-32TZ1BX014"
      ></script>
      <body>{children}</body>
    </html>
  );
}
