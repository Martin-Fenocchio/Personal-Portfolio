import "../../../assets/styles/blog.scss";
import BlogItem from "./blog-item";
const Blog1Picture = "/pictures/blog1.webp";
const Blog2Picture = "/pictures/blog2.webp";
const Blog3Picture = "/pictures/blog3.webp";
const Blog4Picture = "/pictures/blog4.webp";

function BlogsSection() {
  return (
    <section
      id="blogs-section"
      className=" bg-background blog-section pt-[9vh] max-w-content m-auto"
    >
      <h2>Blogs</h2>
      <p>
        I have a genuine passion for writing about programming, with a
        particular focus on Flutter and JavaScript. Not only does this practice
        deepen my own understanding, but it also allows me to share useful and
        interesting insights with fellow developers.
      </p>

      <BlogItem
        image={Blog4Picture}
        title="Understanding JavaScript Primitives and Reference Types in Depth"
        url="https://medium.com/@martin_feno/understanding-javascript-primitives-and-reference-types-in-depth-ff63b4b5043a"
        description={
          <p>
            JavaScript is a <strong>dynamic</strong> and{" "}
            <strong>versatile</strong> language, but some of its quirks can be
            puzzling — especially when it comes to how it handles
            <strong>primitives</strong> and <strong>refecence</strong> types.
          </p>
        }
      />
      <BlogItem
        image={Blog1Picture}
        title="Boost Your Flutter App's Performance"
        url="https://medium.com/@martin_feno/boost-your-flutter-apps-performance-with-this-simple-script-55728bff4354"
        description={
          <p>
            A <strong>javascript script</strong> that I made to detect the{" "}
            <strong>unused libraries</strong> and <strong>assets</strong> to
            save storage and <strong>improve the performance</strong> of an app
          </p>
        }
      />
      <BlogItem
        image={Blog3Picture}
        url="https://medium.com/@martin_feno/7-shortcuts-for-flutter-development-e1d4dba60708"
        title="7 Shortcuts to improve your productivity in flutter development"
        description={
          <p>
            A <strong>collection</strong> of seven <strong>shortcuts</strong> of
            <strong>visual studio</strong> code to <strong>increase</strong>{" "}
            your <strong>productivity</strong> when you are coding!
          </p>
        }
      />
      <BlogItem
        image={Blog2Picture}
        url="https://medium.com/@martin_feno/how-to-update-the-number-version-automatically-in-a-flutter-app-265ed5e3eee4"
        title="Update the number version automatically in a Flutter app"
        description={
          <p>
            In this blog I share a <strong>simple script coded</strong> by me to{" "}
            <strong>increase</strong> the <strong>version number</strong> on{" "}
            <strong>each commit</strong>, saving us time.
          </p>
        }
      />
    </section>
  );
}

export default BlogsSection;
