import "../../../assets/styles/libraries.scss";
import LibraryItem from "./library-item";
import { LIBRARIES_DATA } from "./library-data";

function LibrariesSection() {
  return (
    <section
      id="libraries-section"
      className=" bg-background libraries-section pt-[9vh] max-w-content m-auto"
    >
      <h2>Open Source</h2>
      <p>
        In my free time, I've built these <strong>open source</strong> React, Tailwind and Flutter packages
        with pure coding love, aiming to simplify life for developers, just like
        me, who crave practical solutions and <strong>community-driven</strong>{" "}
        development.
      </p>

      <div className={`flex flex-col`}>
        {LIBRARIES_DATA.map((library) => (
          <LibraryItem
            key={`${library.title}-${library.url}`}
            title={library.title}
            image={library.image}
            url={library.url}
            npmJSPackage={library.npmJSPackage}
            description={library.description}
          />
        ))}
      </div>
    </section>
  );
}

export default LibrariesSection;
