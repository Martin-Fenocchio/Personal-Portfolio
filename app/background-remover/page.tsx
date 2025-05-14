/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Metadata } from "next";
import { RedirectionsToBGRemover } from "../../src/utils/redirections/redirections-utils";

const title = "Background Remover";
const description = "Elimina el fondo de tus imágenes de forma sencilla.";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.webp",
  },
  themeColor: "#030228",
  openGraph: {
    url: "https://martinfenocchio.com",
    type: "website",
    title,
    description,
    images: [
      {
        url: "/og/bg-remover-vision.webp",
      },
    ],
  },
};

function Page() {
  return <RedirectionsToBGRemover />;
}

export default Page;
