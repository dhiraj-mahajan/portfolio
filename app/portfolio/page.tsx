import Tabs from "../tabs/tabs";
import { motion } from "framer-motion";
import { FaFile, FaLocationDot, FaPhone, FaEnvelope, FaArrowRight } from "react-icons/fa6";



export default function Portfolio () {
    return(
        <div>
            <div className="flex justify-center bg-dotted-spacing-4 bg-dotted-[#bcbcbc] h-screen">
                <div className="w-[100%] flex flex-col md:flex-row justify-start mt-16 gap-8">
            {/* banner Image start */}
            <motion.div className="" initial={{x:-100, opacity:0}} animate={{x:0, opacity:1}} transition={{ ease: "easeInOut", duration: 0.50 }}>
              
            <div className="">
            {/* <Image alt="logo" width={300} height={100} src="/myImage.png"></Image> */}
            
            </div>
            </motion.div>
            {/* banner Image end */}

            {/* Text intro part */}
            <motion.div className="md:ml-8" initial={{x:100, opacity:0}} animate={{ x: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.50 }}>
            <h1 className="md:text-6xl text-5xl font-black text-black drop-shadow-lg">
                   {"Hey!, I'm"}
                </h1>
                <div className="mt-4">
                <span className="text-7xl drop-shadow-xl font-black "> {"Dhiraj Mahajan"} </span>
                </div>
                <div className="mt-4 flex flex-col md:flex-row md:gap-2 gap-1 items-baseline">
              <p className="font-normal text-2xl text-black">
                A Passionate{" "}
              </p>
              <motion.span initial="initial" animate="animate" className="relative block overflow-hidden whitespace-nowrap">
              <div className="font-black text-2xl text-black bg-gradient-to-tr from-[#a843eb] via-[#f43d40] to-[#ffa041] inline-block text-transparent bg-clip-text">Software Developer</div>
              </motion.span>
              </div>
              <p className="my-1 font-normal text-2xl text-black">
                based in Pune, India{" "}
              </p>
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
        <Tabs page="/portfolio"></Tabs>
        </div>
    )
}