"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// "Back to top" link shown at the end of any page taller than the window.
// Blog posts have their own (GoToTop, in the post's footer), so it is left
// out there.
export default function BackToTop() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const isPost = /^\/blog\/[^/]+\/?$/.test(pathname ?? "");

  useEffect(() => {
    if (isPost) return;
    const check = () =>
      setShow(document.documentElement.scrollHeight > window.innerHeight + 40);
    check();
    // Page height changes as images load and sections open or close.
    const ro = new ResizeObserver(check);
    ro.observe(document.body);
    window.addEventListener("resize", check);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", check);
    };
  }, [pathname, isPost]);

  if (isPost || !show) return null;

  return (
    // Same width as the footer's content, so the link lines up with its right
    // edge, with clear space above and below.
    <div className="w-full max-w-6xl mx-auto flex justify-end mt-2 mb-10">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-gray-400 hover:text-gray-700 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
          aria-hidden="true"
        >
          {/* Heroicons: arrow-up */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>
        Back to top
      </button>
    </div>
  );
}
