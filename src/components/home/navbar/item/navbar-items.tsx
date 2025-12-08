import Link from "next/link";

interface Props {
  text: string;
  sectionID: string;
}

function NavbarItems(props: Props) {
  return (
    <Link href={props.sectionID}>
      <div className="navbar-item hover ">{props.text}</div>
    </Link>
  );
}

export default NavbarItems;
