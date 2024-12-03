import AboutMeSection from "../../components/home/aboutMe/aboutMe-section";
import BlogsSection from "../../components/home/blogs/blogs-section";
import ExperienciesSection from "../../components/home/experiences/experiencies-section";
import LibrariesSection from "../../components/home/libraries/libraries-section";
import Navbar from "../../components/home/navbar/navbar";
import ProjectsSection from "../../components/home/projects/projects-section";
import BurgerMenu from "../../components/layout/burger-menu/burger-menu";
import { CanvasCursor } from "../../utils/cn/cn";

function HomeScreen() {
  return (
    <main className="f-width h-full">
      <div className="line" />
      <Navbar />
      <BurgerMenu />
      <AboutMeSection />
      <ExperienciesSection />
      <ProjectsSection />
      <LibrariesSection />
      <BlogsSection />
      <CanvasCursor />
    </main>
  );
}

export default HomeScreen;
