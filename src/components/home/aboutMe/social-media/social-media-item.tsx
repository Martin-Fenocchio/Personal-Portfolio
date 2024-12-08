interface Props {
  text: string;
  url?: string;
  icon: string;
  onClick?: () => void;
}

function SocialMediaItem(props: Props) {
  return (
    <a
      onClick={props.onClick}
      target="BLANK"
      className={props.text.toLowerCase().replace(".", "").replace("@", "")}
    >
      <div className="social-media-item hover flex border-[2px] border-green px-3 py-1 rounded-[15px]">
        <img src={props.icon} alt="icon" className="mr-2" />
        <p className="text-white">{props.text}</p>
      </div>
    </a>
  );
}

export default SocialMediaItem;
