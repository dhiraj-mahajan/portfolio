'use client';
import Image from "next/image";
import Tabs from "./tabs/tabs";
import { FaFile, FaLocationDot, FaPhone, FaEnvelope, FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import Experience from "./experience/page";
export default function Home() {
  let str1 = "Software Developer"
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-dotted-spacing-4 bg-dotted-[#bcbcbc] h-fit">
        <div className="px-6 pt-10">
          <Image
            alt="logo"
            width={1000}
            height={200}
            src="/banner2.png"
          ></Image>
        </div>
        <div className="flex flex-row items-center p-10">
          <div>
            <Image
              alt="logo"
              width={300}
              height={200}
              src="/smallBanner1.png"
            ></Image>
          </div>
          <div className="">
            <motion.div className="md:ml-8" initial={{x:100, opacity:0}} animate={{ x: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.50 }}>
            <h1 className="md:text-4xl text-3xl font-black text-tertiory drop-shadow-lg">
                   {"Hey!, I'm"}
                </h1>
                <div className="mt-4">
                <span className="text-6xl drop-shadow-xl font-black text-tertiory"> {"Dhiraj Mahajan"} </span>
                </div>
                <div className="mt-4 flex flex-col md:flex-row md:gap-2 gap-1 items-baseline">
              <p className="font-normal text-m text-tertiory w-[30rem]">
                A Software Developer & UI/UX Designer passionate about crafting clean, user-friendly digital experiences. I blend code and creativity to build products that are both functional and delightful.
              </p>
              
              </div>
             
              <motion.div className="mt-5 flex flex-col md:flex-row gap-2 md:gap-4" initial={{y:100, opacity:0}} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.50, delay:0.50 }}>
              <button className="py-2 px-2 rounded-full mt-2 bg-white bg-opacity-50 shadow-md border border-primary">
                <div className="flex justify-center gap-2 items-center">
                  <div className="h-10 w-10 bg-primary bg-opacity-50 rounded-full flex justify-center text-center items-center shadow-md shadow-[#dea9ff] drop-shadow-md">
                  <FaFile className="text-white" size={15}></FaFile>
                  </div>
                  <span className="font-medium md:text-lg text-sm text-black pr-2">
                    Download CV
                  </span>{" "}
                </div>
              </button>
              <button className="py-2 px-2 rounded-full mt-2 bg-white bg-opacity-50 shadow-md border border-primary">
                <div className="flex justify-center gap-2 items-center ">
                  <span className="font-medium md:text-lg text-sm text-black pl-2">
                    Contact Now
                  </span>{" "}
                  <div className="h-10 w-10 bg-primary bg-opacity-50 rounded-full flex justify-center text-center items-center shadow-md shadow-[#dea9ff] drop-shadow-md">
                  <FaArrowRight className="text-white" size={15}></FaArrowRight>
                  </div>
                </div>
              </button>
              </motion.div>
              
            </motion.div>
          </div>
        </div>
        <Experience></Experience>
        <div className="w-full h-72 bg-slate-500">test</div>
        <div>
          <Tabs page="/"></Tabs>
        </div>
      </div>
    </>
  );
}
