import "../../../assets/styles/blog.scss";
import BlogItem from "./blog-item";
import { BLOGS_DATA } from "./blog-data";

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

      {BLOGS_DATA.map((blog) => (
        <BlogItem
          key={`${blog.title}-${blog.url}`}
          image={blog.image}
          title={blog.title}
          url={blog.url}
          description={blog.description}
        />
      ))}
    </section>
  );
}

export default BlogsSection;
