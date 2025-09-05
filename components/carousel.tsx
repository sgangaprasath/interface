"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

import Img01 from "@/public/gallery/gingee.jpg";
import Img02 from "@/public/gallery/cricut.jpg";
import Img03 from "@/public/gallery/toscanoDinner.jpg";
import Img04 from "@/public/gallery/SMYIMTalk.jpg";
import Img05 from "@/public/gallery/Mohan2nd.jpg";
import Img06 from "@/public/gallery/JayPoster.jpg";
import Img07 from "@/public/gallery/sampoorna.jpg";
import Img08 from "@/public/gallery/AkhilBDay.jpg";
import Img09 from "@/public/gallery/MahaVisit.jpg";
import Img10 from "@/public/gallery/NarayananVisit.jpeg";
import Img11 from "@/public/gallery/Ghibli.png";
import Img12 from "@/public/gallery/ChennaiHalf.jpg";
import Img13 from "@/public/gallery/IITMRun.jpg";
import Img14 from "@/public/gallery/RamaVisit.jpg";
export default function Csel() {
  return (
    <Carousel>
      <div className="flex flex-wrap items-center justify-center h-full bg-gray-400">
        <Image
          src={Img11}
          width={0}
          height={0}
          alt={"Ghibli"}
        />
        <div className="absolute top-0 px-4 py-2 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-full">
          <h1 className="text-white text-xs">
            Ghibli style image of the INTERFACE lab members
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center h-full bg-gray-400">
        <Image
          src={Img14}
          width={0}
          height={0}
          alt={"RamaVisit"}
        />
        <div className="absolute top-0 px-4 py-2 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-full">
          <h1 className="text-white text-xs">
            Prof. Rama Govindarajan from ICTS-TIFR Bengaluru visits INTERFACE lab on 22 Aug, 25
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center h-full bg-gray-400">
        <Image
          src={Img13}
          width={0}
          height={0}
          alt={"IITMRun"}
        />
        <div className="absolute top-0 px-4 py-2 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-full">
          <h1 className="text-white text-xs">
            INTERFACE lab members waking up to finish IIT Madras 5k run on 22 Feb, 25
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center h-full bg-gray-400">
        <Image
          src={Img12}
          width={0}
          height={0}
          alt={"ChennaiHalf"}
        />
        <div className="absolute top-0 px-4 py-2 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-full">
          <h1 className="text-white text-xs">
            Members of INTERFACE lab at the Chennai Runners Half-marathon on 5 Jan, 25
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center h-full bg-gray-400">
        <Image
          src={Img10}
          width={0}
          height={0}
          alt={"Narayanan Visit"}
        />
        <div className="absolute top-0 px-4 py-2 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-full">
          <h1 className="text-white text-xs">
            Prof. Narayanan Menon from UMass Amherst visits our lab on 3 Jan, 25
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center h-full bg-gray-400">
        <Image
          src={Img09}
          width={0}
          height={0}
          alt={"Akhil Birthday"}
        />
        <div className="absolute top-0 px-4 py-2 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-full">
          <h1 className="text-white text-xs">
            Prof. L Mahadevan from Harvard University visits our lab on 28 Dec, 24
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center h-full bg-gray-400">
        <Image
          src={Img08}
          width={0}
          height={0}
          alt={"Akhil Birthday"}
        />
        <div className="absolute top-0 px-4 py-2 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-full">
          <h1 className="text-white text-xs">
            Akhil's birthday celebrations at CCD on 15 Nov, 24
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center h-full bg-gray-400">
        <Image
          src={Img07}
          width={0}
          height={0}
          alt={"Vishnu's treat for receiving his PhD degree at Haven Sampoorna on 13 August, 2024"}
        />
        <div className="absolute top-0 px-4 py-2 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-full">
          <h1 className="text-white text-xs">
          Dr. Vishnu&apos;s PhD degree treat at Haven Sampoorna on 13 Aug, 2024
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
            Jay&apos;s poster presentation in AMBE Research Palooza on 5 Jul, 2024 
          </h1>
        </div>
      </div>
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
      <div className="flex flex-wrap items-center justify-center h-full bg-gray-400">
        <Image
          src={Img05}
          width={0}
          height={0}
          alt={"Mohan wins 2nd Prize in AMBE Research Palooza Sci-Tech Exposium"}
        />
        <div className="absolute top-0 px-4 py-2 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-full">
          <h1 className="text-white text-xs">
            Mohan wins 2nd Prize in AMBE Research Palooza Sci-Tech Exposium held on 5 Jul, 2024 
          </h1>
        </div>
      </div>
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
      {/* <div className="flex h-full items-center justify-center bg-gray-400">
        Slide 3
      </div> */}
    </Carousel>
  );
}
