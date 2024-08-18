"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

import Img01 from "@/public/gallery/gingee.jpg";
import Img02 from "@/public/gallery/cricut.jpg";
import Img03 from "@/public/gallery/toscanoDinner.jpg";
import Img04 from "@/public/gallery/SMYIMTalk.jpg";
import Img05 from "@/public/gallery/Mohan2nd.jpg";
import Img06 from "@/public/gallery/JayPoster.jpg";
import Img07 from "@/public/gallery/MohanTalk.jpg";
export default function Csel() {
  return (
    <Carousel>
      <div className="flex flex-wrap items-center justify-center h-full bg-gray-400">
        <Image
          src={Img01}
          width={0}
          height={0}
          alt={"Our 'hike' to the top of the Gingee fort - 7 Jan, 24"}
        />
        <div className="absolute top-0 px-4 py-2 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-full">
          <h1 className="text-white text-xs">
            Our hike to the top of the Gingee fort - 7 Jan, 24
          </h1>
        </div>
      </div>

      {/* <div className="flex flex-wrap items-center justify-center h-full bg-gray-400">
        <Image
          src={Img02}
          width={0}
          height={0}
          alt={"Paul Jackson insipired Kirigami art by Jay Chavda"}
        />
        <div className="absolute top-0 px-4 py-2 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-full">
          <h1 className="text-white text-xs">
            Paul Jackson insipired Kirigami art by Jay Chavda
          </h1>
        </div>
      </div> */}

      <div className="flex flex-wrap items-center justify-center h-full bg-gray-400">
        <Image
          src={Img03}
          width={0}
          height={0}
          alt={"Our dinner at Toscano with AM1100 TAs - 1 Mar, 24"}
        />
        <div className="absolute top-0 px-4 py-2 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-full">
          <h1 className="text-white text-xs">
            Our dinner at Toscano with AM1100 TAs
          </h1>
        </div>
      </div>

      {/* <div className="flex flex-wrap items-center justify-center h-full bg-gray-400">
        <Image
          src={Img04}
          width={0}
          height={0}
          alt={"Ganga Prasath's talk at SMYIM on 14 June, 2024"}
        />
        <div className="absolute top-0 px-4 py-2 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-full">
          <h1 className="text-white text-xs">
            Ganga Prasath&apos;s talk at SMYIM, Kodaikanal on 14 June, 2024.
          </h1>
        </div>
      </div> */}

      <div className="flex flex-wrap items-center justify-center h-full bg-gray-400">
        <Image
          src={Img05}
          width={0}
          height={0}
          alt={"Mohan wins 2nd Prize in AMBE Research Palooza Sci-Tech Exposium"}
        />
        <div className="absolute top-0 px-4 py-2 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-full">
          <h1 className="text-white text-xs">
            Mohan wins 2nd Prize in AMBE Research Palooza Sci-Tech Exposium held on 5 July, 2024 
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center h-full bg-gray-400">
        <Image
          src={Img06}
          width={0}
          height={0}
          alt={"Jay's poster presentation in AMBE Research Palooza on 5 July, 2024"}
        />
        <div className="absolute top-0 px-4 py-2 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-full">
          <h1 className="text-white text-xs">
            Jay&apos;s poster presentation in AMBE Research Palooza on 5 July, 2024 
          </h1>
        </div>
      </div>

      {/* <div className="flex flex-wrap items-center justify-center h-full bg-gray-400">
        <Image
          src={Img07}
          width={0}
          height={0}
          alt={"Mohan's talk in AMBE Research Palooza on 5 July, 2024 "}
        />
        <div className="absolute top-0 px-4 py-2 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-full">
          <h1 className="text-white text-xs">
            Mohan&apos;s talk in AMBE Research Palooza on 5 July, 2024 
          </h1>
        </div>
      </div> */}

      {/* <div className="flex h-full items-center justify-center bg-gray-400">
        Slide 3
      </div> */}
    </Carousel>
  );
}
