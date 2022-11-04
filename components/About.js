import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";

function About(pageInfo) {
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        transition={{ duration: 1.2 }}
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px] overflow-hidden"
        src={urlFor(pageInfo?.pageInfo?.pageInfo?.profilePic).url()}
      />
      <motion.div
        transition={{ duration: 1.2 }}
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">title</span>{" "}
          background
        </h4>
        <p className="text-base">
          {pageInfo?.pageInfo?.pageInfo?.backgroundInformation}
        </p>
      </motion.div>
    </div>
  );
}

export default About;
