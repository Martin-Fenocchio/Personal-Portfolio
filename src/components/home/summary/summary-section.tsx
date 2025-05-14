import Github from "../../../assets/icons/github.svg";
import Linkedin from "../../../assets/icons/linkedin.svg";
import Email from "../../../assets/icons/email.svg";
import SocialMediaItem from "../aboutMe/social-media/social-media-item";
import "../../../assets/styles/summary.scss";

function SummarySection() {
  return (
    <section className="section-summary  pt-[9vh] max-w-content m-auto">
      <h2>Contact</h2>

      <p>
        Would you like to contact me? Here you will find my contact information.
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
    </section>
  );
}

export default SummarySection;
