import "../app/globals.css";
import Link from "next/link";
import { RiTwitterXLine } from "react-icons/ri";

export default function NavBar() {
  return (
    <div className="container mx-28 mb-10 pb-6 pt-8 max-w-6xl backdrop-blur-2xl">
      <ul className="relative flex flex-col items-center justify-center gap-4 px-24 font-light text-sm md:gap-5 md:flex-row md:justify-end lg:gap-10">
        <li className="linkStyle">
          <Link href={"/"}>home</Link>
        </li>
        <li className="linkStyle">
          <Link href={"/members"}>members</Link>
        </li>
        <li className="linkStyle">
          <Link href={"/research"}>research</Link>
        </li>
        <li className="linkStyle">
          <Link href={"/pubs"}>publications</Link>
        </li>
        <li className="linkStyle">
          <Link href={"/gallery"}>gallery</Link>
        </li>
        <li className="linkStyle">
          <Link href={"/contact"}>contact</Link>
        </li>
        <li className="linkStyle">
          <Link
            href={"https://twitter.com/kaitovaai"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXLine />
          </Link>
        </li>
      </ul>
    </div>
  );
}
