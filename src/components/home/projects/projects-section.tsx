import "../../../assets/styles/projects.scss";
import ProjectItem from "./project-item";
import GuatapayPicture from "../../../assets/pictures/projects/guatapay-vision.webp";
import AdamoPicture from "../../../assets/pictures/projects/adamo-vision.webp";
import UposPicture from "../../../assets/pictures/projects/upos-vision.webp";
import LimboScanPicture from "../../../assets/pictures/projects/limboscan-vision.webp";
import CuyPicture from "../../../assets/pictures/projects/cuy-vision.webp";
import FMoneyPicture from "../../../assets/pictures/projects/fmoney-vision.webp";
import GuatapayWebPicture from "../../../assets/pictures/projects/guatapay-web-vision.webp";
import DarxprexWebPicture from "../../../assets/pictures/projects/darxprex-web-vision.webp";
import UposAdminPicture from "../../../assets/pictures/projects/upos-admin-vision.webp";
import LimboXtractoPicture from "../../../assets/pictures/projects/limboxtractor-vision.webp";
import FlutterIcon from "../../../assets/icons/flutter.svg";
import BlocIcon from "../../../assets/icons/bloc.webp";
import FirebaseIcon from "../../../assets/icons/firebase.svg";
import ProviderIcon from "../../../assets/icons/provider.svg";
import ReactIcon from "../../../assets/icons/react.svg";
import ReduxIcon from "../../../assets/icons/redux.svg";
import ScssIcon from "../../../assets/icons/scss.svg";
import TailwindIcon from "../../../assets/icons/tailwind.svg";
import React, { useState } from "react";

function ProjectsSection() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  return (
    <section
      id="projects-section"
      className="bg-background project-section pt-[9vh] max-w-content m-auto"
    >
      <h2>Projects</h2>

      <div className="grid">
        <ProjectItem
          image={GuatapayPicture}
          url=""
          title="Guatapay"
          tags={[
            {
              text: "Flutter",
              image: FlutterIcon,
            },
            {
              text: "Bloc",
              image: BlocIcon,
            },
            {
              text: "Firebase",
              image: FirebaseIcon,
            },
          ]}
          description={
            <p>
              Billetera <strong>crypto</strong>, recibe y envía{" "}
              <strong>Bitcoin</strong> a quien desees, hecha en Flutter,{" "}
              <strong>lideré el desarrollo FrontEnd</strong> en este proyecto.
            </p>
          }
        />
        <ProjectItem
          image={AdamoPicture}
          url=""
          title="Adamo ID"
          tags={[
            {
              text: "Flutter",
              image: FlutterIcon,
            },
            {
              text: "Firebase",
              image: FirebaseIcon,
            },
            {
              text: "Bloc",
              image: BlocIcon,
            },
          ]}
          description={
            <p>
              <strong>Digital signatures</strong> and{" "}
              <strong>identity verifications</strong>, <strong>lead</strong> the
              <strong>front-end</strong> both the app and the web part, Using{" "}
              <strong>Flutter Web</strong> and React JS
            </p>
          }
        />
        <ProjectItem
          image={GuatapayWebPicture}
          url=""
          title="Guatapay Platform"
          tags={[
            {
              text: "React",
              image: ReactIcon,
            },
            {
              text: "Context",
              image: ReduxIcon,
            },
            {
              text: "SCSS",
              image: ScssIcon,
            },
          ]}
          description={
            <p>
              Platform that <strong>allows e-commerces</strong> to{" "}
              <strong>accept and receive cryptocurrency payments</strong> by
              installing a small add-on in their store.
            </p>
          }
        />

        <ProjectItem
          image={DarxprexWebPicture}
          url=""
          title="Darxprex Web"
          tags={[
            {
              text: "React",
              image: ReactIcon,
            },
            {
              text: "Context",
              image: ScssIcon,
            },
            {
              text: "Tailwind",
              image: TailwindIcon,
            },
          ]}
          description={
            <p>
              Web platform for Darxprex app{" "}
              <strong>workers to manage their customers</strong>, place orders,
              track revenue and more.
            </p>
          }
        />

        {showMoreProjects && (
          <>
            <ProjectItem
              image={UposPicture}
              url=""
              title="uPOS"
              tags={[
                {
                  text: "Flutter",
                  image: FlutterIcon,
                },
                {
                  text: "Firebase",
                  image: FirebaseIcon,
                },
                {
                  text: "Provider",
                  image: ProviderIcon,
                },
              ]}
              description={
                <p>
                  Point of sale system for restaurants, made with{" "}
                  <strong>Flutter</strong>, with a{" "}
                  <strong>mobile app and a web</strong>. Manage employees,
                  dishes, statistics and more.
                </p>
              }
            />

            <ProjectItem
              image={FMoneyPicture}
              url=""
              title="FMoney"
              tags={[
                {
                  text: "React",
                  image: ReactIcon,
                },
                {
                  text: "Redux",
                  image: ReduxIcon,
                },
                {
                  text: "SCSS",
                  image: ScssIcon,
                },
              ]}
              description={
                <p>
                  <strong>Cryptographic</strong> lottery/lottery platform,
                  allows the purchase of <strong>cryptographic tickets</strong>{" "}
                  and win prizes on the platform's <strong>own token</strong>.
                </p>
              }
            />

            <ProjectItem
              image={CuyPicture}
              url=""
              title="Cuy"
              tags={[
                {
                  text: "React",
                  image: ReactIcon,
                },
                {
                  text: "Context",
                  image: ReduxIcon,
                },
                {
                  text: "Tailwind",
                  image: TailwindIcon,
                },
              ]}
              description={
                <p>
                  Website for Latin American <strong>exchange houses</strong>,
                  you can preview <strong>conversions in real time</strong> and
                  make the exchange instantly.
                </p>
              }
            />

            <ProjectItem
              image={LimboScanPicture}
              url=""
              title="LimboScan"
              tags={[
                {
                  text: "Flutter",
                  image: FlutterIcon,
                },

                {
                  text: "Bloc",
                  image: BlocIcon,
                },
              ]}
              description={
                <p>
                  <strong>QR code scanner app</strong>, designed to be as{" "}
                  <strong>fast</strong> as possible and{" "}
                  <strong>without ads</strong>.
                </p>
              }
            />

            <ProjectItem
              image={LimboXtractoPicture}
              url=""
              title="LimboXtractor"
              tags={[
                {
                  text: "Flutter",
                  image: FlutterIcon,
                },
                {
                  text: "Bloc",
                  image: BlocIcon,
                },
              ]}
              description={
                <p>
                  Practical app made to extract data such as CBU, DNI, phone
                  numbers, coordinates, and more.
                </p>
              }
            />

            <ProjectItem
              image={UposAdminPicture}
              url=""
              title="uPOS admin"
              tags={[
                {
                  text: "React",
                  image: ReactIcon,
                },
                {
                  text: "Context",
                  image: ReduxIcon,
                },
                {
                  text: "SCSS",
                  image: ScssIcon,
                },
              ]}
              description={
                <p>
                  Web platform for distributors of the uPOS app, allows to add
                  and manage customers.
                </p>
              }
            />
          </>
        )}
      </div>

      <button
        className="border-yellow border-2 border-solid rounded-xl w-[50%] py-2 ml-[25%] mt-12 text-yellow font-bold"
        onClick={() => setShowMoreProjects(!showMoreProjects)}
      >
        Show {showMoreProjects ? "less" : "more"} projects
      </button>
    </section>
  );
}

export default ProjectsSection;
