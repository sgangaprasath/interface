"use client";

/**
 * Plain linked text, not a button. Styling lives in the article stylesheet
 * under .tufte-totop.
 */
export default function GoToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="tufte-totop"
    >
      Back to top
    </button>
  );
}
