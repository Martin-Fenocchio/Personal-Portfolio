import AboutMeSection from "../../components/home/aboutMe/aboutMe-section";
import BlogsSection from "../../components/home/blogs/blogs-section";
import ExperienciesSection from "../../components/home/experiences/experiencies-section";
import LibrariesSection from "../../components/home/libraries/libraries-section";
import ProjectsSection from "../../components/home/projects/projects-section";
import SummarySection from "../../components/home/summary/summary-section";
import { CanvasCursor } from "../../utils/cn/cn";

function HomeScreen() {
  return (
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
  );
}

export default HomeScreen;
