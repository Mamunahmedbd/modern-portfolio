import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

export default function Hero(pageInfo) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, My name is ${pageInfo?.pageInfo?.pageInfo?.name}`,
      "Guy who loves NextJs",
      "<ButLovesToNextJs/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.pageInfo?.pageInfo?.heroImage).url()}
        alt="Mamun Ahmed"
        width="150"
        height="150"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px]">
          {pageInfo?.pageInfo?.pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-2">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton"> About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton"> Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton"> Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton"> Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
