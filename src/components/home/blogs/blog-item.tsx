import Image from "next/image";

interface Props {
  title: string;
  description: React.ReactNode;
  image: string;
  url: string;
}

function BlogItem(props: Props) {
  return (
    <a href={props.url} target="BLANK">
      <article className="flex flex-row blog-item">
        <div className="picture">
          <Image src={props.image} alt="blog image" />
        </div>
        <div className="right">
          <h3>{props.title}</h3>
          {props.description}
        </div>
      </article>
    </a>
  );
}

export default BlogItem;
