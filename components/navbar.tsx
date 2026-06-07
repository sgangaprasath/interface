// /** @format */
"use client";

import { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Research",
    link: "#",
    children: [
      {
        label: "Research Areas",
        link: "/research",
      },
      {
        label: "Publications",
        link: "/pubs",
      },
      {
        label: "News",
        link: "/news",
      },
    ],
  },
  {
    label: "Teaching",
    link: "/teaching",
  },
  {
    label: "Group",
    link: "#",
    children: [
      {
        label: "Members",
        link: "/members",
      },
      {
        label: "Blog",
        link: "/blog",
      },
    ],
  },
  {
    label: "Gallery",
    link: "/gallery",
  },
  {
    label: "Openings",
    link: "/openings",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];

// export default function NavBar() {
//   return (
//     <div className="container mx-28 pb-6 pt-8 max-w-6xl backdrop-blur-2xl">
//       <ul className="relative flex flex-col items-center justify-center gap-4 px-24 font-light text-sm md:gap-5 md:flex-row md:justify-end lg:gap-10">
//         <li className="linkStyle">
//           <Link href={"/"}>home</Link>
//         </li>
//         <li className="linkStyle">
//           <Link href={"/members"}>members</Link>
//         </li>
//         <li className="linkStyle">
//           <Link href={"/research"}>research</Link>
//         </li>
//         <li className="linkStyle">
//           <Link href={"/pubs"}>publications</Link>
//         </li>
//         <li className="linkStyle">
//           <Link href={"/gallery"}>gallery</Link>
//         </li>
//         <li className="linkStyle">
//           <Link href={"/openings"}>openings</Link>
//         </li>
//         <li className="linkStyle">
//           <Link href={"/contact"}>contact</Link>
//         </li>
//         <li className="linkStyle">
//           <Link
//             href={"https://twitter.com/kaitovaai"}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <RiTwitterXLine />
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-end px-8 py-4 text-sm">
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((d, i) => (
            <div key={i} className="relative group">
              <Link
                href={d.link ?? "#"}
                className="flex items-center gap-1 px-3 py-2 rounded-md text-neutral-400 hover:text-black hover:bg-gray-50 transition-all"
              >
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className="text-xs rotate-180 transition-all group-hover:rotate-0" />
                )}
              </Link>
              {/* dropdown */}
              {d.children && (
                <div className="absolute right-0 top-full mt-1 hidden w-auto flex-col gap-0.5 rounded-lg bg-white border border-gray-100 py-2 shadow-lg transition-all group-hover:flex">
                  {d.children.map((ch, j) => (
                    <Link
                      key={j}
                      href={ch.link ?? "#"}
                      className="flex items-center px-4 py-2 text-neutral-400 hover:text-black hover:bg-gray-50 whitespace-nowrap"
                    >
                      {ch.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className=" h-full w-[65%] bg-white px-4 py-4">
        <div className=" flex flex-col text-base  gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem key={i} label={d.label} link={d.link}>
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        <section className="  flex flex-col gap-8 mt-4 items-center">
          <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
            Login
          </button>

          <button className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Register
          </button>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem) {
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative   px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
        <span>{d.label}</span>
        {d.children && (
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="flex flex-col gap-1 rounded-lg bg-white py-3 w-auto transition-all">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black  "
            >
              {/* item */}
              <span className="whitespace-nowrap pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
