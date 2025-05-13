import React from "react";
import CalendarIcon from "../../../assets/icons/calendar.svg";
import Image from "next/image";

interface Props {
  title: string;
  company: string;
  date: string;
  url: string;
  description: React.ReactNode;
}

function ExperienceItem(props: Props) {
  return (
    <article className="max-w-content m-auto mb-12 experience-item">
      <div className="left flex flex-col items-center gap-4">
        <div className="calendar">
          <Image src={CalendarIcon} alt="calendar icon" />
        </div>
        <div className="yellow-line" />
      </div>
      <div className="right pb-2">
        <h3 className="text-[#0fff9a] font-bold">
          {props.title} <span className="separator px-1 text-white">-</span>{" "}
          <span className="company text-yellow ">{props.company}</span>
        </h3>
        <h4 className="text-darkGreen">{props.date}</h4>
        {props.description}
        <a
          href={props.url}
          target="BLANK"
          className="text-yellow font-bold mt-4 block"
        >
          {props.url}
        </a>
      </div>
    </article>
  );
}

export default ExperienceItem;
