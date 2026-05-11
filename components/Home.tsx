"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MusicPlayer } from "./music";
import {
  address,
  anim,
  date,
  txt1,
  txt1Title,
  txt2,
} from "@/data/data";
import { motion } from "framer-motion";
import { Footer } from "./footer";
import { TimeBox } from "./TimeBox";
import OneYearCard from "./Atam";

export function Home() {
  // const [openEnvelope, setOpenEnvelope] = useState(false);
  // const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(() => {
  //   if (openEnvelope) {
  //     setIsPlaying(true);
  //   } else {
  //     setIsPlaying(false);
  //   }
  // }, [openEnvelope]);

  return (
    <div
      className={`"relative h-dvh" tracking-[20%] text-center overflow-hidden text-vrayi `}
    >
      {/* <div
        className={` bg-guyn ${openEnvelope ? "animate-bounceYB" : ""} z-51 w-[160vw] h-[160vw] rounded-4xl absolute left-1/2 top-[0%]  -translate-x-1/2 -translate-y-1/2 rotate-45  shadow-2xl `}

      ></div>
      <div
        className={` bg-guyn ${openEnvelope ? "animate-bounceYT" : ""}  z-50 w-[160vw] h-[160vw] rounded-4xl absolute left-1/2 -bottom-[60%] -translate-x-1/2 -translate-y-1/2 rotate-45  `}
      ></div>
      <img
        src="/forenvelope.png"
        alt="envelop"
        onClick={() => setOpenEnvelope(true)}
        className={`${openEnvelope ? "opacity-0" : ""} transition-all duration-100  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  cursor-pointer  md:w-50 md:h-50 z-60 w-30 h-30 `}
      /> */}

      {/* music button */}
      {/* <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-10 p-1  rounded-[20px] bg-[#063f1280]  right-7 top-7 w-15  h-15 flex justify-center items-center"
        >
          <Image
            src="/icon2.png"
            alt="icon1"
            width={500}
            height={500}
            className=" w-full p-2 object-contain "
          />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div> */}

      <div className=" FontArmDecorative tracking-[10%] leading-12 bg-cover bg-center m-auto max-w-md pb-10 " style={{ backgroundImage: `url("/bg.png")` }}>
<OneYearCard/>
        {/* <Image
          src="/img1.png"
          alt="img"
          width={500}
          height={500}
          className="w-full object-cover h-dvh"
        /> */}
        <motion.h2 {...anim} className=" leading-12 text-2xl my-20 font-bold">
          {txt1Title}
        </motion.h2>
        <motion.p {...anim} className=" leading-12 text-xl px-5 ">
          {txt1}
        </motion.p>
        <motion.h2 {...anim} className="my-20 tracking-[20%] text-5xl font-bold ">
          {date}
        </motion.h2>

        <motion.div {...anim} className="w-full">

          <Image
            src="/img2.jpg"
            alt="img"
            width={500}
            height={500}
            className="w-[85%] mx-auto  object-cover rounded-[220px]"
          />
        </motion.div>

        <motion.p {...anim} className="my-20 leading-12 text-2xl ">
          {txt2}
        </motion.p>

        <Image
          src="/restoran.jpg"
          alt="zinvor"
          width={500}
          height={500}
          className="w-full mb-20 object-cover "
        />


        <motion.a
          {...anim}
          href={`https://www.google.com/maps/search/${address}`}
          target="_blank"
          className=" text-xl px-5 text-center"
        >
          {address}
        </motion.a>

        <TimeBox />

        <motion.div {...anim} className="w-full">

          <Image
            src="/img3.jpg"
            alt="img"
            width={500}
            height={500}
            className="w-[85%] mx-auto  object-cover rounded-[220px]"
          />
        </motion.div>

      </div>
      <Footer />
    </div>
  );
}
