/* eslint-disable react-refresh/only-export-components */
import AboutMeSection from "../src/components/home/aboutMe/aboutMe-section";
import ExperienciesSection from "../src/components/home/experiences/experiencies-section";
import ProjectsSection from "../src/components/home/projects/projects-section";
import LibrariesSection from "../src/components/home/libraries/libraries-section";
import BlogsSection from "../src/components/home/blogs/blogs-section";
import SummarySection from "../src/components/home/summary/summary-section";
import { CanvasCursor } from "../src/utils/cn/cn";
import { Metadata } from "next";
import { getYearsOfExperienceLabel } from "../src/utils/experience/experience-years";

const title = "Martín Fenocchio";
const yearsOfExperience = getYearsOfExperienceLabel();
const description =
  `Tech Lead and full-stack developer with ${yearsOfExperience} years of experience. Specialized in JavaScript, Next.js, React, APIs, AI adoption, and technical leadership.`;
const ogDescription =
  `Tech Lead and full-stack developer with ${yearsOfExperience} years of experience. Specialized in JavaScript, Next.js, React, APIs, AI adoption, and technical leadership.`;

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
    description: ogDescription,
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/documents/8f79947a-ad03-4cca-afaa-822318260b6a.png?token=Imjbk8GDct5-XK6oGKl28MqnvOmzkassAYP6KjLaEqE&height=598&width=1200&expires=33247390448",
      },
    ],
  },
};

function Page() {
  return (
    <div>
      <main className="f-width h-full">
        <div className="line" />
        <AboutMeSection />
        <ExperienciesSection />
        <ProjectsSection />
        <LibrariesSection />
        <BlogsSection />
        <SummarySection />
        <CanvasCursor />
      </main>
    </div>
  );
}

export default Page;
