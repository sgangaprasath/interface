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
  const [isMobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-end px-8 py-4 text-sm">
          {/* Desktop nav */}
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

          {/* Hamburger button — mobile only */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-md text-neutral-400 hover:text-black hover:bg-gray-50 transition-all"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-5 h-0.5 bg-current" />
            <span className="block w-5 h-0.5 bg-current" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>
      </nav>

      {/* Mobile slide-in menu */}
      {isMobileOpen && (
        <MobileNav closeSideMenu={() => setMobileOpen(false)} />
      )}
    </>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/40 md:hidden"
      onClick={closeSideMenu}
    >
      <div
        className="h-full w-[70%] max-w-xs bg-white px-5 py-6 flex flex-col gap-1 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="self-end mb-4 p-1 text-neutral-400 hover:text-black transition-colors"
          onClick={closeSideMenu}
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {navItems.map((d, i) => (
          <SingleNavItem key={i} label={d.label} link={d.link} closeSideMenu={closeSideMenu}>
            {d.children}
          </SingleNavItem>
        ))}
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem & { closeSideMenu: () => void }) {
  const [isItemOpen, setItem] = useState(false);

  if (d.children) {
    return (
      <div className="flex flex-col">
        <button
          onClick={() => setItem(!isItemOpen)}
          className="flex items-center justify-between px-2 py-3 text-neutral-400 hover:text-black transition-colors"
        >
          <span>{d.label}</span>
          <IoIosArrowDown
            className={`text-xs transition-all ${isItemOpen ? "rotate-180" : ""}`}
          />
        </button>
        {isItemOpen && (
          <div className="flex flex-col pl-4 border-l border-gray-100 ml-2 mb-1">
            {d.children.map((ch, i) => (
              <Link
                key={i}
                href={ch.link ?? "#"}
                onClick={d.closeSideMenu}
                className="py-2 px-2 text-sm text-neutral-400 hover:text-black transition-colors"
              >
                {ch.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={d.link ?? "#"}
      onClick={d.closeSideMenu}
      className="px-2 py-3 text-neutral-400 hover:text-black transition-colors"
    >
      {d.label}
    </Link>
  );
}
