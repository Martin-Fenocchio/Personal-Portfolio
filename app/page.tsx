"use client";

import React from "react";
import AboutMeSection from "../src/components/home/aboutMe/aboutMe-section";
import ExperienciesSection from "../src/components/home/experiences/experiencies-section";
import ProjectsSection from "../src/components/home/projects/projects-section";
import LibrariesSection from "../src/components/home/libraries/libraries-section";
import BlogsSection from "../src/components/home/blogs/blogs-section";
import SummarySection from "../src/components/home/summary/summary-section";
import { CanvasCursor } from "../src/utils/cn/cn";

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
