import Github from "../../../assets/icons/github.svg";
import Linkedin from "../../../assets/icons/linkedin.svg";
import Doc from "../../../assets/icons/doc.svg";
import Email from "../../../assets/icons/email.svg";
import CV from "../../../assets/files/Martin Fenocchio (i).pdf";
import SocialMediaItem from "../aboutMe/social-media/social-media-item";
import "../../../assets/styles/summary.scss";

function SummarySection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Martin_Fenocchio_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="section-summary  pt-[9vh] max-w-content m-auto">
      <h2>Résumé and contact</h2>

      <p>
        Would you like to review my CV? You can download it here, where you will
        also find my contact information.
      </p>

      <div className="grid-media flex gap-3 mt-7">
        <SocialMediaItem text="Résumé" icon={Doc} onClick={handleDownloadCV} />
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
