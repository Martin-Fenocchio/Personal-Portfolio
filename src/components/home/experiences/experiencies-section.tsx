import ExperienceItem from "./experience-item";
import "../../../assets/styles/experiences.scss";

function ExperienciesSection() {
  return (
    <section
      id="experience-section"
      className=" experience-section pt-[9vh] max-w-content m-auto"
    >
      <h2>Experience</h2>

      <ExperienceItem
        title="Flutter and React JS developer"
        company="LimboTeams"
        date="July 2021 - Present"
        url="https://limboteams.com"
        description={
          <p>
            <strong>Development leader</strong> of a team of frontend
            programmers, in charge of reviewing Pull Requests and{" "}
            <strong>making technical decisions</strong>, in addition to
            <strong> day-to-day programming</strong> with both technologies.
          </p>
        }
      />
      <ExperienceItem
        title="React JS developer"
        company="ImCreate"
        date="February 2021 - July 2021"
        url="https://imcreatestudios.com"
        description={
          <p>
            Frontend developer in <strong>e-commerce</strong> made with{" "}
            <strong>React JS</strong>, connecting{" "}
            <strong>payment gateways</strong>, various <strong>API</strong>'s,
            responsive design and more.
          </p>
        }
      />
      <ExperienceItem
        title="Trainee developer"
        company="Nuwe"
        date="December 2020 - February 2021"
        url="https://nuwe.io"
        description={
          <p>
            First steps in my professional career, I developed as a trainee dev
            at the <strong>startup Nuwe</strong>, a tech event organizer, using
            <strong>React JS</strong> and <strong>Next JS</strong>.
          </p>
        }
      />
    </section>
  );
}

export default ExperienciesSection;
