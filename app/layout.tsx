/* eslint-disable react-refresh/only-export-components */
import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import "../src/assets/styles/global.scss";
import "../src/assets/styles/about-me.scss";

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
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-32TZ1BX014"
      ></script>
      <body>{children}</body>
    </html>
  );
}
