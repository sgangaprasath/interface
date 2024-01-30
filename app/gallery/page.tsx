import "../globals.css";

export const metadata = {
  title: "Slider with Progress Indicator - Cruip Tutorials",
  description: "Page description",
};

import SilderImg01 from "@/public/gallery/gingee.jpg";
import SilderImg02 from "@/public/gallery/cricut.jpg";
import ProgressSlider from "@/components/progress-slider";

export default function Home() {
  const items = [
    {
      img: SilderImg01,
      desc: "Our recent 'hike' to the top of the Gingee fort - 7 Jan, 24",
    },
    {
      img: SilderImg02,
      desc: "Paul Jackson insipired Kirigami art by Jay Chavda",
    },
  ];

  return (
    <>
      <main>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex justify-center antialiased">
          <div className="flex flex-col justify-center">
            <ProgressSlider items={items} />
          </div>
        </div>
      </div>
      </main>
    </>
  );
}
