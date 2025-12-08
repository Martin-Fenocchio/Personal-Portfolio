import "../../../assets/styles/blog.scss";
import BlogListing from "../../blogs/blog-listing";
import { getAllArticles } from "../../../utils/blogs/blog-data";

const BlogsSection = async () => {
  const articles = await getAllArticles();

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

      <BlogListing articles={articles} gridCols={"lg:grid-cols-1"} />
    </section>
  );
};

export default BlogsSection;
