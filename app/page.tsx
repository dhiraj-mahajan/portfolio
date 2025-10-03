'use client';
import Image from "next/image";
import Tabs from "./tabs/tabs";
import { FaFile, FaLocationDot, FaPhone, FaEnvelope, FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import Experience from "./experience/page";
import About from "./about/page";
import Portfolio from "./portfolio/page";
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
        <div className="flex flex-col-reverse md:flex-row items-center p-10">
          <div className="mt-8">
            <Image
              alt="logo"
              width={300}
              height={200}
              src="/smallBanner1.png"
            ></Image>
          </div>
          <div className="">
            <motion.div className="md:ml-8" initial={{x:100, opacity:0}} animate={{ x: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.50 }}>
            <h1 className="md:text-4xl text-2xl font-black text-tertiory drop-shadow-lg">
                   {"Hey!, I'm"}
                </h1>
                <div className="mt-4">
                <span className="md:text-6xl text-4xl drop-shadow-xl font-black text-tertiory"> {"Dhiraj Mahajan"} </span>
                </div>
                <div className="mt-4 flex flex-col md:flex-row md:gap-2 gap-1 items-baseline">
              <p className="font-normal text-m text-tertiory md:w-[40rem]">
                A Software Developer & UI/UX Designer passionate about crafting clean, user-friendly digital experiences. I blend code and creativity to build products that are both functional and delightful.
              </p>
              
              </div>
             
              <motion.div className="mt-5 flex flex-col md:flex-row gap-2 md:gap-4" initial={{y:100, opacity:0}} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.50, delay:0.50 }}>
              <button
                className="py-2 px-2 rounded-full mt-2 bg-white bg-opacity-50 shadow-md border border-primary"
                onClick={() => {
                    window.open('/Dhiraj_Mahajan_Resume.pdf', '_blank');
                }}
              >
                <div className="flex justify-center gap-2 items-center">
                  <div className="h-10 w-10 bg-primary bg-opacity-50 rounded-full flex justify-center text-center items-center shadow-md shadow-[#dea9ff] drop-shadow-md">
                    <FaFile className="text-white" size={15}></FaFile>
                  </div>
                  <span className="font-medium md:text-lg text-sm text-black pr-2">
                    Download CV
                  </span>{" "}
                </div>
              </button>
                <button
                className="py-2 px-2 rounded-full mt-2 bg-white bg-opacity-50 shadow-md border border-primary"
                onClick={() => {
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }}
                >
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
        <div className="w-[90%]">
        <Experience></Experience>
        </div>
        <div className="w-[90%]">
          <Portfolio />
        </div>
        <div className="w-full h-full bg-primary mt-6">
          <About></About>
        </div>
        {/* <div>
          <Tabs page="/"></Tabs>
        </div> */}
      </div>
    </>
  );
}
