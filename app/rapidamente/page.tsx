/* eslint-disable react-refresh/only-export-components */
import { Metadata } from "next";
import { RedirectionsToRapidamente } from "../../src/utils/redirections/redirections-utils";

const title = "Rapidamente";
const description =
  "Entrena tu mente y compite con otros en simples pero rápidas cuentas matemáticas.";

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
        url: "/og/rapidamente-vision.webp",
      },
    ],
  },
};

function Page() {
  return <RedirectionsToRapidamente />;
}

export default Page;
