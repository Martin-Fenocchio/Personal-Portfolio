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
        title="Programador Flutter y React JS"
        company="LimboTeams"
        date="Julio 2021 - Presente"
        url="https://limboteams.com"
        description={
          <p>
            <strong>Líder de desarrollo</strong> de un equipo de programadores
            frontend, encargado de revisar Pull Requests y{" "}
            <strong>tomar decisiones</strong> técnicas, además de{" "}
            <strong>programar día a día</strong> con ambas tecnologías.
          </p>
        }
      />
      <ExperienceItem
        title="Programador React JS"
        company="ImCreate"
        date="Febrero 2021 - Julio 2021"
        url="https://imcreatestudios.com"
        description={
          <p>
            Desarrollador Frontend en <strong>e-commerce</strong> hecha con
            <strong> React JS</strong>, conectando{" "}
            <strong>pasarelas de pagos</strong>, diversas <strong>API</strong>
            ’s, diseño <strong>responsive</strong> y más.
          </p>
        }
      />
      <ExperienceItem
        title="Desarrollador Trainee"
        company="Nuwe"
        date="Diciembre 2020 - Febrero 2021"
        url="https://nuwe.io"
        description={
          <p>
            Primeros pasos en mi carrera profesional, desarrolle como trainee
            dev en la <strong>startup</strong> Nuwe, una organizadora de eventos
            tech, utilizando <strong>React JS</strong> y{" "}
            <strong>Next JS</strong>.
          </p>
        }
      />
    </section>
  );
}

export default ExperienciesSection;
