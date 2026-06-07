"use client";

export default function GoToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-400 hover:text-gray-900 hover:border-gray-400 hover:shadow-sm transition-all duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
      </svg>
      Back to top
    </button>
  );
}
