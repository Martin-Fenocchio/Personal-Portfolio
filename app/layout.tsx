/* eslint-disable react-refresh/only-export-components */
import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import "../src/assets/styles/global.scss";
import "../src/assets/styles/about-me.scss";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://martinfenocchio.com"
  ),
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <Script id="consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("consent", "default", {
            ad_storage: "denied",
            ad_user_data: "denied",
            ad_personalization: "denied",
            analytics_storage: "denied",
            functionality_storage: "denied",
            security_storage: "granted",
            wait_for_update: 500,
          });
        `}
      </Script>
      <Script
        id="cookieyes"
        src="https://cdn-cookieyes.com/client_data/f0adb0f6cd84cf9b2453f3123e98b942/script.js"
      />
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-32TZ1BX014"
      />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "G-32TZ1BX014");
          `}
        </Script>
      <body>{children}</body>
    </html>
  );
}
