import React from "react";
import PubIcon from "../../../assets/icons/pub-dev.svg";
import NPMIcon from "../../../assets/icons/npm.webp";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
  url: string;
  npmJSPackage?: boolean;
  description: React.ReactNode;
}

function LibraryItem({ npmJSPackage, ...props }: Props) {
  return (
    <a href={props.url} target="BLANK">
      <article className="library-item">
        <div className="left">
          <h3>{props.title}</h3>
          {props.description}
          <button>
            Ver en {npmJSPackage ? "NPM" : "PUB"}{" "}
            <Image
              src={npmJSPackage ? NPMIcon : PubIcon}
              alt="library platform icon"
              width={30}
            />
          </button>
        </div>
        <div className="right">
          <Image
            src={props.image}
            alt="library image"
            width={500}
            height={400}
          />
        </div>
      </article>
    </a>
  );
}

export default LibraryItem;
