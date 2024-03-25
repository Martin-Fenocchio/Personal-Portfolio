export interface ITag {
  text: string;
  image: string;
}

function TagItem(props: ITag) {
  return (
    <p className="tag-item">
      {props.text} <img src={props.image} alt="tech icon" />
    </p>
  );
}

export default TagItem;
