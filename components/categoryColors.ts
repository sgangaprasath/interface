// Shared category palette. Tailwind class names are used by the blog index
// (PostPreview); the hex triples are used by the Tufte article header, which
// styles inline so it doesn't depend on Tailwind's purge list.

export const categoryClasses: Record<string, string> = {
  Tutorial: "bg-violet-100 text-violet-600 border border-violet-200",
  Primer: "bg-emerald-100 text-emerald-600 border border-emerald-200",
  Blog: "bg-sky-100 text-sky-600 border border-sky-200",
  Rant: "bg-rose-100 text-rose-600 border border-rose-200",
};

export const defaultCategoryClass =
  "bg-gray-100 text-gray-500 border border-gray-200";

export interface CategoryTone {
  bg: string;
  fg: string;
  border: string;
}

export const categoryTones: Record<string, CategoryTone> = {
  Tutorial: { bg: "#f3eeff", fg: "#6d4bc4", border: "#e2d7fb" },
  Primer: { bg: "#e9f7f0", fg: "#0b6b4f", border: "#cfeade" },
  Blog: { bg: "#e9f3fb", fg: "#0d6291", border: "#cfe4f4" },
  Rant: { bg: "#fdecef", fg: "#a8324a", border: "#f7d6dd" },
};

export const defaultCategoryTone: CategoryTone = {
  bg: "#f2f2ec",
  fg: "#6b6b62",
  border: "#e0e0d6",
};

export const toneFor = (category?: string): CategoryTone =>
  (category && categoryTones[category]) || defaultCategoryTone;
