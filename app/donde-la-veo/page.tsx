/* eslint-disable react-refresh/only-export-components */
import { Metadata } from "next";
import { RedirectionsToDondeLaVeo } from "../../src/utils/redirections/redirections-utils";

const title = "Donde La Veo?";
const description =
  "Encuentra en que app ver tu película o serie de manera sencilla";

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
        url: "/og/dondelaveo.png",
      },
    ],
  },
};

function Page() {
  return <RedirectionsToDondeLaVeo />;
}

export default Page;
