import { Helmet } from "react-helmet-async";
import AboutMeSection from "../../components/home/aboutMe/aboutMe-section";
import BlogsSection from "../../components/home/blogs/blogs-section";
import ExperienciesSection from "../../components/home/experiences/experiencies-section";
import LibrariesSection from "../../components/home/libraries/libraries-section";
import ProjectsSection from "../../components/home/projects/projects-section";
import SummarySection from "../../components/home/summary/summary-section";
import { CanvasCursor } from "../../utils/cn/cn";

function HomeScreen() {
  return (
    <>
      <Helmet>
        <title>Martín Fenocchio</title>
        <meta
          name="description"
          content="4 years of experience. App and web developer. Specialized in React JS and Flutter. Creator of
open source libraries and passionate about technology."
        />
        <meta property="og:url" content="https://martinfenocchio.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Martín Fenocchio" />
        <meta
          property="og:description"
          content="4 years of experience. Web and App developer. Specialized in React JS and Flutter. Creator of
open source libraries and passionate about technology."
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/documents/8f79947a-ad03-4cca-afaa-822318260b6a.png?token=Imjbk8GDct5-XK6oGKl28MqnvOmzkassAYP6KjLaEqE&height=598&width=1200&expires=33247390448"
        />
      </Helmet>

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
    </>
  );
}

export default HomeScreen;
