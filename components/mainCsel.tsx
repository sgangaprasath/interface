"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

import Img01 from "@/public/logo.svg";
import Img02 from "@/public/images/RotationTut.png";
import Img03 from "@/public/gallery/cricut.jpg";
import Img04 from "@/public/images/coversv1.jpg";
import Img05 from "@/public/images/MSPhDAdvert.png";
import Img06 from "@/public/images/RENb.jpg";
import Img07 from "@/public/images/SymCover.jpg";
import Img08 from "@/public/images/KempeCover.jpg";
import Img09 from "@/public/images/CoverBB.jpg";
// import Img09 from "@/public/images/Poster-ethology-site.png";

export default function Cselmain() {
  return (
    <Carousel>
      {/* <div className="flex flex-wrap items-center justify-center h-full bg-white ">
        <Link href={"https://sgangaprasath.github.io/ethology/index.html"}>
          <Image
            src={Img09}
            height={0}
            alt={"Ethology, individual to collective"}
            objectFit="cover"
          />
          <div className="absolute rounded-full top-3 left-4 px-4 py-1 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-auto">
            <h1 className="text-white text-xs">
              Ethology, individual to collective
            </h1>
          </div>
          <div className="absolute rounded-full top-3 right-4 px-2 py-1 sm:opacity-0 md:opacity-100 md:bg-blue-600 w-auto">
            <h1 className="text-white text-xs">Online Workshop</h1>
          </div>
        </Link>
      </div> */}
      <div className="flex flex-wrap items-center justify-center h-full bg-white">
        <div className="relative after:absolute after:-z-20 after:h-[380px] md:after:w-[800px] after:-translate-x-10 md:after:-translate-y-1/3 xl:after:w-[1200px] xl:after:-translate-x-40 after:bg-gradient-conic after:from-sky-300 after:via-stone-300 after:to-pink-300 after:content-[''] after:blur-3xl sm:opacity-0 md:opacity-100">
          <Image
            className="relative md:pt-10 xl:pt-20"
            src={Img01}
            alt="Interface lab Logo"
            width={600}
            height={100}
            priority
          />
        </div>
        <div className="md:text-xl xl:text-2xl text-center max-w-2xl">
          <p className="font-light">at the intersection of</p>
          <p className="font-extrabold">Soft-mechanics, Robotics & Behaviour</p>
        </div>
      </div>
      {/* <div className="flex flex-wrap items-center justify-center h-full bg-zinc-400 ">
        <Link href={"/openings"}>
          <Image
            src={Img05}
            height={0}
            alt={"Lab open positions"}
            objectFit="cover"
          />
        </Link>
      </div> */}
      <div className="flex flex-wrap items-center justify-center h-full bg-zinc-400 ">
        <Link href={"/blog/10-BBControl"}>
          <Image
            src={Img09}
            height={0}
            alt={"Bang-bang control"}
            objectFit="cover"
          />
          <div className="absolute rounded-full top-3 left-4 px-4 py-1 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-auto">
            <h1 className="text-white text-xs">
              Bang-bang control by Vishnu Mishra
            </h1>
          </div>
          <div className="absolute rounded-full top-3 right-4 px-2 py-1 sm:opacity-0 md:opacity-100 md:bg-rose-500 w-auto">
            <h1 className="text-white text-xs">Blog</h1>
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-center h-full bg-zinc-400 ">
        <Link href={"/blog/9-Kempe"}>
          <Image
            src={Img08}
            height={0}
            alt={"Kempe's Universality Theorem"}
            objectFit="cover"
          />
          <div className="absolute rounded-full top-3 left-4 px-4 py-1 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-auto">
            <h1 className="text-white text-xs">
              Kempe's Universality Theorem by Mohanraj
            </h1>
          </div>
          <div className="absolute rounded-full top-3 right-4 px-2 py-1 sm:opacity-0 md:opacity-100 md:bg-rose-500 w-auto">
            <h1 className="text-white text-xs">Blog</h1>
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-center h-full bg-zinc-400 ">
        <Link href={"/blog/8-Symmetry"}>
          <Image
            src={Img07}
            height={0}
            alt={"Symmetry in nature, science and engineering"}
            objectFit="cover"
          />
          <div className="absolute rounded-full top-3 left-4 px-4 py-1 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-auto">
            <h1 className="text-white text-xs">
              Symmetry in nature, science and engineering by Vishnu Mishra
            </h1>
          </div>
          <div className="absolute rounded-full top-3 right-4 px-2 py-1 sm:opacity-0 md:opacity-100 md:bg-rose-500 w-auto">
            <h1 className="text-white text-xs">Blog</h1>
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-center h-full bg-zinc-400 ">
        <Link href={"/blog/7-GeoCG"}>
          <Image
            src={Img06}
            height={0}
            alt={"Omnipresence of geometry in CG"}
            objectFit="cover"
          />
          <div className="absolute rounded-full top-3 left-4 px-4 py-1 sm:opacity-0 md:opacity-100 md:bg-gray-100 w-auto">
            <h1 className="text-black text-xs">
              Omnipresence of geometry in CG by Jay Chavda
            </h1>
          </div>
          <div className="absolute rounded-full top-3 right-4 px-2 py-1 sm:opacity-0 md:opacity-100 md:bg-rose-500 w-auto">
            <h1 className="text-white text-xs">Blog</h1>
          </div>
        </Link>
      </div>
      {/* <div className="flex flex-wrap items-center justify-center h-full bg-zinc-400 ">
        <Link href={"/blog/6-Rotation"}>
          <Image
            src={Img02}
            width={0}
            alt={"All about rotations by Mohanraj"}
          />
          <div className="absolute rounded-full top-3 left-4 px-4 py-1 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-auto">
            <h1 className="text-white text-xs">
              All about rotations by Mohanraj
            </h1>
          </div>
          <div className="absolute rounded-full top-3 right-4 px-2 py-1 sm:opacity-0 md:opacity-100 md:bg-sky-400 w-auto">
            <h1 className="text-white text-xs">Tutorial</h1>
          </div>
        </Link>
      </div> */}
      {/* <div className="flex flex-wrap items-center justify-center h-full bg-zinc-400 ">
        <Link href={"/blog/5-Kirigami"}>
          <Image
            src={Img03}
            width={0}
            alt={"Precision crafting with Cricut Maker 3"}
            className="-translate-y-[10px]"
          />
          <div className="absolute rounded-full top-3 left-4 px-4 py-1 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-auto">
            <h1 className="text-white text-xs">
              Precision crafting with Cricut Maker 3 by Jay Chavda
            </h1>
          </div>
          <div className="absolute rounded-full top-3 right-4 px-2 py-1 sm:opacity-0 md:opacity-100 md:bg-rose-500 w-auto">
            <h1 className="text-white text-xs">Blog</h1>
          </div>
        </Link>
      </div> */}

      <div className="flex flex-wrap items-center justify-center h-full bg-zinc-400 ">
        <Link href={"/blog/3-SVOne"}>
          <Image
            src={Img04}
            height={0}
            alt={"Art of scientific visualization - Part 1"}
            objectFit="cover"
          />
          <div className="absolute rounded-full top-3 left-4 px-4 py-1 sm:opacity-0 md:opacity-100 md:bg-gray-800/40 w-auto">
            <h1 className="text-white text-xs">
              Art of scientific visualization - Part 1
            </h1>
          </div>
          <div className="absolute rounded-full top-3 right-4 px-2 py-1 sm:opacity-0 md:opacity-100 md:bg-rose-500 w-auto">
            <h1 className="text-white text-xs">Blog</h1>
          </div>
        </Link>
      </div>
    </Carousel>
  );
}
