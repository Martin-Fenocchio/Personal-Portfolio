import "../../../assets/styles/libraries.scss";
import UniversalPicture from "../../../assets/pictures/universal.webp";
import RenderIFPicture from "../../../assets/pictures/renderif.webp";
import EasyCopyPicture from "../../../assets/pictures/easycopy.webp";
import StringHelpersPicture from "../../../assets/pictures/stringhelpers.webp";
import LibraryItem from "./library-item";

function LibrariesSection() {
  return (
    <section
      id="libraries-section"
      className=" bg-background libraries-section pt-[9vh] max-w-content m-auto"
    >
      <h2>Libraries</h2>
      <p>
        I've built these Flutter and React packages with pure coding love,
        aiming to simplify life for developers, just like me, who crave
        practical solutions.
      </p>

      <div className={`flex flex-col-reverse`}>
        <LibraryItem
          title="Universal Picture"
          image={UniversalPicture}
          url="https://pub.dev/packages/universal_picture"
          description={
            <p>
              A versatile <strong>Flutter library</strong> for rendering images{" "}
              <strong>regardless</strong> of their <strong>format</strong> or
              source. This widget simplifies the process of loading and{" "}
              <strong>displaying images</strong>.
            </p>
          }
        />
        <LibraryItem
          title="Render If"
          image={RenderIFPicture}
          url="https://pub.dev/packages/renderif"
          description={
            <p>
              RenderIf is a <strong>Flutter library</strong> designed to make
              your <strong>development process faster</strong>. This library
              provides an <strong>extra boolean parameter</strong>, for several
              common <strong>Flutter widgets</strong>.
            </p>
          }
        />
        <LibraryItem
          title="Simple copy"
          image={EasyCopyPicture}
          npmJSPackage
          url="https://www.npmjs.com/package/@martin-fenocchio/simple_copy"
          description={
            <p>
              This is a small npm library for <strong>copying text</strong> to
              the <strong>clipboard</strong>. It's{" "}
              <strong>very simple to use</strong> and works in{" "}
              <strong>web</strong> applications.
            </p>
          }
        />
        <LibraryItem
          title="String Helpers"
          image={StringHelpersPicture}
          npmJSPackage
          url="https://www.npmjs.com/package/@martin-fenocchio/string-helpers"
          description={
            <p>
              A <strong>lightweight</strong> library for{" "}
              <strong>common string manipulation</strong> tasks 🧠.
            </p>
          }
        />
      </div>
    </section>
  );
}

export default LibrariesSection;
