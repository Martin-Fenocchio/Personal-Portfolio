import ExperienceItem from "./experience-item";
import { EXPERIENCES_DATA } from "./experience-data";
import "../../../assets/styles/experiences.scss";

function ExperienciesSection() {
  return (
    <section
      id="experience-section"
      className=" experience-section pt-[9vh] max-w-content m-auto"
    >
      <h2>Experience</h2>

      {EXPERIENCES_DATA.map((experience) => (
        <ExperienceItem
          key={`${experience.company}-${experience.date}`}
          title={experience.title}
          company={experience.company}
          date={experience.date}
          url={experience.url}
          description={experience.description}
        />
      ))}
    </section>
  );
}

export default ExperienciesSection;
