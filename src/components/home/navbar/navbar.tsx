/* eslint-disable @typescript-eslint/no-unused-vars */
import "../../../assets/styles/navbar.scss";
import NavbarItems from "./item/navbar-items";
import LinkedIn from "../../../assets/icons/linkedIn-yellow.svg";
import Github from "../../../assets/icons/github-yellow.svg";
import { Dispatch } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  setMenuIsOpen?: Dispatch<React.SetStateAction<boolean>>;
}

function Navbar(_: Props) {
  return (
    <nav className="nav-bar flex  items-center">
      <Link href="/">
        <h2 className="M">M</h2>
      </Link>

      <div className="flex gap-2 lg:px-12 min-h-[50px] items-center">
        <NavbarItems text="Projects" sectionID="/#projects-section" />
        <NavbarItems text="Experience" sectionID="/#experience-section" />
        <NavbarItems text="Blogs" sectionID="/blogs" />
        <NavbarItems text="Libraries" sectionID="/#libraries-section" />
      </div>

      <h2 className="max-md:hidden M hide">M</h2>
      {/* <h2 className="x-button" onClick={() => props.setMenuIsOpen?.(false)}>
        X
      </h2> */}

      <div className="social-media">
        <a href="https://github.com/Martin-Fenocchio" target="BLANK">
          <Image src={Github} alt="github" className="hover" />
        </a>
        <a
          href="https://www.linkedin.com/in/martín-fenocchio-b507a31b2/"
          target="BLANK"
        >
          <Image src={LinkedIn} alt="linkedIn" className="hover" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
