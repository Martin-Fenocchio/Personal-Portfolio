import "../../../assets/styles/projects.scss";
import {
  projectsByDefaultOrder,
  projectsByFlutterOrder,
  projectsByReactOrder,
} from "../../../utils/projects/projects-data";
import ProjectItem from "./project-item";

import { useState } from "react";

function ProjectsSection() {
  const tParam = new URLSearchParams(window.location.search).get("t");
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const projects = !tParam
    ? projectsByDefaultOrder
    : tParam == "f"
    ? projectsByFlutterOrder
    : projectsByReactOrder;

  return (
    <section
      id="projects-section"
      className="bg-background project-section pt-[9vh] max-w-content m-auto"
    >
      <h2>Projects</h2>

      <p>
        Throughout my professional career, I've had the privilege of
        contributing to a variety of projects. In several of them, I took on the
        responsibility of leading the frontend development. Below are some
        examples:
      </p>

      <div className="mb-5" />

      <div className="grid">
        {projects
          .slice(0, showMoreProjects ? projects.length : 4)
          .map((project, index) => (
            <ProjectItem {...project} key={index} />
          ))}
      </div>

      <button
        className="border-yellow border-2 border-solid rounded-xl w-[60%] py-2  ml-[20%] mt-12 text-yellow font-bold"
        onClick={() => setShowMoreProjects(!showMoreProjects)}
      >
        Show {showMoreProjects ? "less" : "more"} projects
      </button>
    </section>
  );
}

export default ProjectsSection;
