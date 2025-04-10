import React from "react";
import TagItem, { ITag } from "./tag-item";

interface ProjectItemProps {
  title: string;
  image: string;
  url?: string;
  tags: ITag[];
  description: React.ReactNode;
}

function ProjectItem(props: ProjectItemProps) {
  console.log("import.meta.env", import.meta.env);

  return (
    <a href={props.url} target="BLANK">
      <article className="project-item" data-has-url={props.url != null}>
        <img
          src={import.meta.env.VITE_IMAGES_URL + props.image}
          alt="project image"
        />

        <h3>{props.title}</h3>
        {props.description}

        <footer>
          {props.tags.map((tag) => (
            <TagItem {...tag} />
          ))}
        </footer>
      </article>
    </a>
  );
}

export default ProjectItem;
