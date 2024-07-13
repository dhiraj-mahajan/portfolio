import Image from "next/image";
import Tabs from "./tabs/tabs";
import { FaFile, FaLocationDot, FaPhone, FaEnvelope, FaArrowRight } from "react-icons/fa6";
export default function Home() {
  return (
    <>
      <div className="flex justify-center bg-dotted-spacing-4 bg-dotted-[#bcbcbc] h-[100vh]">
        {/* <div className="circlePosition w-96 h-80 bg-[#ff484875] rounded-full absolute z-[-1] top-[-5%] left-[-10%] blur-[95px]"></div> */}
        {/* <div className="circlePosition w-80 h-80 bg-[#ffffff] rounded-full absolute z-1 top-[30%] left-[35%] blur-3xl"></div> */}
        {/* <div className="circlePosition w-96 h-80 bg-[#7755ff39] rounded-full absolute z-[-2] bottom-20 right-28 blur-[100px]"></div> */}
        <div className="w-[80%]">
          <Image
            alt="logo"
            width={100}
            height={10}
            src="/portfolioLogo.svg"
            className="mt-8"
          ></Image>
          
          <div>
            
          <div className="w-[100%] flex flex-col md:flex-row justify-center items-center mt-16 gap-8">
            {/* banner Image start */}
            <div className="md:w-[50%] flex justify-center">
            <div className="md:w-72 md:h-80 w-60 h-72 rounded-3xl border-[2px] border-[#565656] -rotate-3">
            <div className="md:w-72 md:h-80 w-60 h-72 bg-white shadow-lg rounded-3xl p-2 md:p-4 rotate-12 flex flex-col justify-between">
            <div className="w-[100%] flex justify-center bg-gradient-to-bl from-[#a843eb] via-[#f43d40] to-[#ffa041] pt-4 rounded-3xl">
            <Image alt="logo" width={136} height={10} src="/manImg.png"></Image>
            </div>
            <div className="p-2 bg-slate-100 rounded-xl">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-xs md:text-sm"></FaEnvelope>
              <p className="md:text-sm text-xs">dhirajmahajan456@gmail.com</p>
            </div>
            <div className="pt-1 flex items-center gap-2">
              <FaPhone className="text-xs md:text-sm"></FaPhone>
              <p className="md:text-sm text-xs">8956866950</p>
              <p className="md:text-sm text-xs">|</p>
              <FaLocationDot className="text-xs md:text-sm"></FaLocationDot>
              <p className="md:text-sm text-xs">Pune, India</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            {/* banner Image end */}

            {/* Text intro part */}
            <div className="md:w-[50%]">
            <h1 className="md:text-6xl text-5xl font-black text-black drop-shadow-lg">
                  Hey!,
                </h1>
                <div className="mt-4">
                <span className="md:text-7xl text-6xl drop-shadow-xl font-black bg-gradient-to-tr from-[#a843eb] via-[#f43d40] to-[#ffa041] inline-block text-transparent bg-clip-text"> {"I'm Dhiraj"} </span>
                </div>
              <p className="my-3 font-medium text-lg text-black">
                a passionate Software Developer and UI/UX designer{" "}
              </p>
              <p className="my-3 font-medium text-lg text-black">
                based in India{" "}
              </p>
              <div className="flex flex-col md:flex-row gap-2 md:gap-4">
              <button className="bg-gradient-to-tr from-[#a843eb] via-[#f43d40] to-[#ffa041] py-2 px-6 rounded-full mt-2">
                <div className="flex justify-center gap-2 items-center py-2 ">
                  <FaFile className="text-white" size={15}></FaFile>
                  <span className="font-medium md:text-lg text-sm text-white">
                    Download CV
                  </span>{" "}
                </div>
              </button>
              <button className="bg-gradient-to-tr from-[#a843eb] via-[#f43d40] to-[#ffa041] py-2 px-6 rounded-full mt-2">
                <div className="flex justify-center gap-2 items-center py-2 ">
                 
                  <span className="font-medium md:text-lg text-sm text-white">
                    Contact Now
                  </span>{" "}
                  <FaArrowRight className="text-white" size={15}></FaArrowRight>
                </div>
              </button>
              </div>
              
            </div>
              
            </div>
            
            
            <div className="h-32 w-[100%]"></div>
          </div>
          
          <Tabs page="/"></Tabs>
        </div>
       
      </div>
    </>
  );
}
