import Tabs from "../tabs/tabs"
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image"
const Experience = ()=>{
    const orgDetails = [
        {
            orgName: "Amdocs India",
            logo: "/DOX.png",
            location:"Magarpatta, Pune",
            designatio:"Software developer",
            duration: "May-2022",
            working: true,
            technology: [{
                logo:"/react.png",
                name:"React TS"
            },
            {
                logo:"/js.png",
                name:"JavaScript"
            }]
        },
        {
            orgName: "Bajaj Allianz",
            logo: "/bajaj.png",
            location:"Yerwada, Pune",
            designatio:"Web Designer",
            duration: "Jan-20 to Feb-22",
            working: false,
            technology: [{
                logo:"/js.png",
                name:"JavaScript"
            },
            {
                logo:"/figma.png",
                name:"Figma"
            }]
        },
        {
            orgName: "Autovista",
            logo: "/autovista.png",
            location:"Baner, Pune",
            designatio:"Web Designer",
            duration: "Jun-19 to Jan-20",
            working: false,
            technology: [{
                logo:"/js.png",
                name:"JavaScript"
            },
            {
                logo:"/figma.png",
                name:"Figma"
            }]
        },
        {
            orgName: "AffinityX",
            logo: "/affinity.png",
            location:"Kharadi, Pune",
            designatio:"Graphic Designer",
            duration: "Nov-18 to Jun-19",
            working: false,
            technology: [{
                logo:"/ai.png",
                name:"Illustrator"
            },
            {
                logo:"/photoshop.png",
                name:"Photoshop"
            }]
        }
    ]
    return(
        <div className="flex justify-center bg-dotted-spacing-4 bg-dotted-[#bcbcbc] h-screen">
            <div className="circlePosition w-96 h-80 bg-[#ffc478a3] rounded-full absolute z-[-1] top-[-5%] left-[-10%] blur-[95px]"></div>
        <div className="circlePosition w-80 h-80 bg-[#ff9fda55] rounded-full absolute z-[-3] top-[2%] right-[15%] blur-3xl"></div>
        <div className="circlePosition w-60 h-60 bg-[#7755ff5b] rounded-full absolute z-[-2] bottom-10 right-5 blur-[100px]"></div>
        <div className="w-[80%]">
        <Image
            alt="logo"
            width={100}
            height={10}
            src="/portfolioLogo.svg"
            className="my-8"
          ></Image>
{/* Main Box */}

        {
            orgDetails.map((item, index)=>{
                return (
                    <div className="w-[100%] h-[60%] md:h-48 flex flex-col md:flex-row shadow-lg rounded-3xl mb-6">
            {/* Organization logo box start  */}
          <div className="md:w-[25%] h-[40%] md:h-auto bg-gradient-to-bl from-[#a843eb] via-[#f43d40] to-[#ffa041] md:rounded-s-3xl md:rounded-tr-none rounded-t-3xl flex justify-center items-center">
            <div className="h-20 w-20 bg-white rounded-full flex justify-center items-center shadow-md" >
                        <Image alt={item.logo} width={40} height={10} src={item.logo}></Image>
                        </div>
            </div>
            {/* Organization logo box end  */}
            {/* Organization details start  */}
            <div className="md:w-[75%] h-[70%] md:h-auto p-4 md:pl-6 rounded-e-3xl bg-[#ffffff50] flex flex-col md:justify-between gap-2 relative ">
                <div className="h-10 flex justify-center items-center px-5 rounded-bl-xl rounded-tr-xl bg-gradient-to-l from-[#a843eb] via-[#f43d40] to-[#ffa041] bottom-0 left-0 absolute  md:bottom-auto md:left-auto md:top-0 md:right-0">
                <p className="text-base font-medium text-white">{item.duration}</p>
                </div>
                <div>
                    <div className="flex md:flex-row flex-col-reverse md:gap-4 gap-2">
                <h1 className="text-4xl font-black text-black bg-gradient-to-tr from-[#a843eb] via-[#f43d40] to-[#ffa041] inline-block text-transparent bg-clip-text">{item.orgName}</h1>
                <div className="md:w-max w-full rounded-lg bg-[#ffd1fc8f] flex items-center md:px-4 md:py-0 py-2 px-2">
                <div className="flex gap-2 items-center">
                <FaLocationDot size={12}></FaLocationDot>
                <p className="text-sm font-medium text-black">{item.location}</p>
                </div>
                </div>
                </div>
                <h3 className="text-2xl font-extrabold ">{item.designatio}</h3>
                </div>
                <div className="border-solid border-b-[1px] border-gray-400 md:w-[50%]"></div>
                
                <div className="flex gap-4 items-center">
                    {item.technology.map((tech, ind)=>{
                        return(

                            <div className="flex items-center mt-2 ">
                    <div className="w-7 h-7 bg-slate-200 rounded-s-md flex justify-center">
                                    <Image alt={tech.logo} width={20} height={30} src={tech.logo} className="object-cover w-full h-full"></Image>
                                    </div>
                                    <div className="bg-black px-3 h-7 rounded-e-lg">
                                    <p className="font-medium text-base text-white">{tech.name}</p>
                                    </div>
                                    </div>
                        )

                    })}
                                    </div>
            </div>
            {/* Organization details end  */} 
          </div>
                )
            })
        }
        <Tabs page="/experience"></Tabs>
        </div>
        </div>
    )
}

export default Experience











    
    // <div className="h-[30%] p-4 flex gap-4">
    //                     <div>
    //                     <h4 className="text-black text-sm">Designation:</h4>
    //                     <p className="text-black text-base font-semibold">Software developer</p>
    //                     </div>
    //                     <div className="border-r-[2px]"></div>
    //                     <div>
    //                     <h4 className="text-black text-sm">Since:</h4>
    //                     <p className="text-black text-base font-semibold">2.2 Years</p>
    //                     </div>
    //                 </div> 