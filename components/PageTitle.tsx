// Large centred page title with a Heroicon (24px outline) to its left, as on
// the Research, Members and Publications pages.

export default function PageTitle({ title, icon }: { title: string; icon: string | string[] }) {
  const paths = Array.isArray(icon) ? icon : [icon];
  return (
    <h1 className="flex flex-row items-center justify-center w-full p-2 text-4xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-10 h-10 flex-shrink-0"
        aria-hidden="true"
      >
        {paths.map((d) => (
          <path key={d} strokeLinecap="round" strokeLinejoin="round" d={d} />
        ))}
      </svg>
      <span className="font-bold px-4">{title}</span>
    </h1>
  );
}
