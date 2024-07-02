import Image from "next/image";
import Tabs from "./tabs/tabs";
import { FaFile } from "react-icons/fa6";
export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        {/* <div className="circlePosition w-96 h-80 bg-[#ffc54875] rounded-full absolute z-[-1] top-[-5%] left-[-10%] blur-[95px]"></div> */}
        {/* <div className="circlePosition w-80 h-80 bg-[#ffffff] rounded-full absolute z-1 top-[30%] left-[35%] blur-3xl"></div> */}
        {/* <div className="circlePosition w-96 h-80 bg-[#7755ff39] rounded-full absolute z-[-2] bottom-20 right-28 blur-[100px]"></div> */}
        <div className="w-[80%]">
          <Image
            alt="logo"
            width={130}
            height={10}
            src="/portfolioLogo.svg"
            className="mt-8"
          ></Image>
          <div>
          <div className="w-[100%] flex justify-center my-10">
              <Image alt="logo" width={220} height={10} src="/circleImg.png"></Image>
            </div>
            {/* Text intro part */}
            <div className="w-[100%] md:flex-col md:text-center">
              <div className="md:flex gap-3 justify-center">
                <span className="text-6xl font-black text-black inline-block mb-3 md:mb-0">
                  Hey!,
                </span>
                <span className="text-6xl font-black text-secondary"> {"I'm"} </span>
                <span className="text-6xl font-black text-primary inline-block mb-3 md:mb-0">
                   Dhiraj
                </span>
                <span className="text-6xl font-black text-black inline-block">
                  Mahajan
                </span>
                </div>

              <p className="my-3 font-medium text-lg text-black">
                Software Developer and UI/UX designer{" "}
              </p>

              <button className="bg-white py-4 px-5 rounded-2xl mt-2 border-solid border-[1px] border-slate-700">
                <div className="flex justify-center gap-2 items-center">
                  <FaFile className="text-primary" size={20}></FaFile>
                  <span className="font-medium text-lg text-black">
                    Download CV
                  </span>{" "}
                </div>
              </button>
              
            </div>
            
            
          </div>
          <Tabs page="/"></Tabs>
        </div>
      </div>
    </>
  );
}
