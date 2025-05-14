import React from "react";
import TagItem, { ITag } from "./tag-item";
import Image from "next/image";

interface ProjectItemProps {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  url?: string;
  tags: ITag[];
  description: React.ReactNode;
}

function ProjectItem(props: ProjectItemProps) {
  console.log("project", props.image);

  return (
    <a href={props.url} target="BLANK">
      <article className="project-item" data-has-url={props.url != null}>
        <Image src={props.image} alt="project image" width={500} height={300} />

        <h3>{props.title}</h3>
        {props.description}

        <footer>
          {props.tags.map((tag) => (
            <TagItem {...tag} key={tag.text} />
          ))}
        </footer>
      </article>
    </a>
  );
}

export default ProjectItem;
