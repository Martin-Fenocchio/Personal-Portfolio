import Arrow from "../../../assets/icons/arrow-down.svg";
import Github from "../../../assets/icons/github.svg";
import Linkedin from "../../../assets/icons/linkedin.svg";
import Email from "../../../assets/icons/email.svg";
import SocialMediaItem from "./social-media/social-media-item";
import "../../../assets/styles/about-me.scss";

function AboutMeSection() {
  return (
    <section className="about-me-section  h-full gradient">
      <div className="h-[90%] about_me_section flex flex-column items-center  ">
        <div className="width-container">
          <h1 className="text-white">
            Hi, <span>I'm Martín.</span>
          </h1>
          <h2 className="text-white">Flutter & React dev</h2>

          <p className="text-white">
            <span className="green">
              {" "}
              <strong>4 years</strong>
            </span>{" "}
            of experience. Web and app developer.{" "}
            <span className="green">Specialized</span> in{" "}
            <span className="green">
              <strong>React JS</strong> and <strong>Flutter</strong>
            </span>
            . Creator of <br />
            <span className="yellow">
              <strong>open source</strong> libraries
            </span>{" "}
            and <span className="yellow">passionate</span> about technology.
          </p>

          <div className="grid-media flex gap-3 mt-7">
            <SocialMediaItem
              text="GitHub"
              icon={Github}
              url="https://github.com/Martin-Fenocchio"
            />
            <SocialMediaItem
              text="LinkedIn"
              icon={Linkedin}
              url="https://www.linkedin.com/in/martín-fenocchio-b507a31b2/"
            />
            <SocialMediaItem
              text="fenomartin6@gmail.com"
              icon={Email}
              url="mailto:fenomartin6@gmail.com"
            />
          </div>

          <a
            href="#experience-section"
            className="experience flex items-center animate-bounce hover"
          >
            Experience <img src={Arrow} alt="icon" className="w-10" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
