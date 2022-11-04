import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import Image from "next/image";

function ExperienceCard({ experi }) {
  return (
    <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[500px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="px-0 md:px-5">
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={urlFor(experi?.companyImage).url()}
        />
        <h4 className="text-4xl font-light">Web developer</h4>
        <p className="font-bold text-2xl mt-1">Mamun Ahmed</p>
        <div className="flex space-x-2 my-2">
          {/* tech use */}
          <Image
            className="rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt="image"
            width={30}
            height={30}
          />
          <Image
            className="rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt="image"
            width={30}
            height={30}
          />
          <Image
            className="rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt="image"
            width={30}
            height={30}
          />
          <Image
            className="rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt="image"
            width={30}
            height={30}
          />
        </div>
        <p className="uppercase text-gray-500">
          {new Date(experi?.dateStarted).toDateString()} -{" "}
          {experi?.isCurrentlyworkingHere
            ? "Present"
            : new Date(experi?.dateEnded).toDateString()}
        </p>
        <ul className="list-disc ml-5 pr-5 w-4/5 text-lg h-80 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#F7AB0A]/80  ">
          {experi?.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
