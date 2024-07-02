import Tabs from "../tabs/tabs"
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
            orgName: "Autovista PVT LTD",
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
        <div className="flex justify-center">
            <div className="circlePosition w-96 h-80 bg-[#ffc478a3] rounded-full absolute z-[-1] top-[-5%] left-[-10%] blur-[95px]"></div>
        <div className="circlePosition w-80 h-80 bg-[#ff9fda55] rounded-full absolute z-[-3] top-[2%] right-[15%] blur-3xl"></div>
        <div className="circlePosition w-60 h-60 bg-[#7755ff5b] rounded-full absolute z-[-2] bottom-10 right-5 blur-[100px]"></div>
        <div className="w-[80%]">
        <Image
            alt="logo"
            width={130}
            height={10}
            src="/portfolioLogo.svg"
            className="my-8"
          ></Image>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
                {
                    orgDetails.map((item, index)=>{
                        return (
                            <div key={index}>
                    <div className=" rounded-3xl shadow-lg">
                        <div className="p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-4 items-center">
                            <div className="h-14 w-14 bg-white rounded-full flex justify-center items-center shadow-md" >
                        <Image alt="amdocsLogo" width={30} height={10} src={item.logo}></Image>
                        </div>
                        <div>
                            <h2 className="text-black text-base font-semibold">{item.orgName}</h2>
                            <p className="text-black text-xs">{item.location}</p>
                        </div>
                        </div>
                        {item.working && <div className="py-2 px-2 rounded-xl text-center text-xs font-semibold text-white  bg-secondary">
                            <p>Working</p>
                        </div>}
                        </div>
                        <div className="my-5 mx-2 lg:flex gap-6">
                        <div className="mb-3 lg:mb-0 flex gap-2 items-baseline lg:flex-col lg:gap-0">
                        <h4 className="text-black lg:text-xs text-base">Designation:</h4>
                        <p className="text-black text-base font-semibold">{item.designatio}</p>
                        </div>
                        <div className="border-r-[2px] border-black"></div>
                        <div className="flex gap-2 items-baseline lg:flex-col lg:gap-0">
                        <h4 className="text-black lg:text-xs text-base">{item.working ? "Since" : "Duration:"}</h4>
                        <p className="text-black text-base font-semibold">{item.duration}</p>
                        </div>
                        </div>

                        <div className="mt-4 mx-2">
                                {/* <h1 className="font-semibold ">Technologies</h1> */}
                                <div className="lg:flex my-2 gap-4">
                                    {
                                        item.technology.map((tech, ind)=>{
                                            return(
                                                <div key={ind} className="mb-3 lg:mb-0 flex items-center justify-center gap-2 w-full p-3 border-solid border-[1px] border-black rounded-2xl">
                                    <Image alt="reactLogo" width={30} height={30} src={tech.logo}></Image>
                                    <p className="font-medium text-base">{tech.name}</p>
                                    </div>

                                            )
                                        })
                                    }
                                </div>
                                
                            </div>                        
                        </div>
                    </div>
                </div>
                        )

                    })
                }
                

               
            </div>




            {/* <div className="w-[50%] h-[80vh] py-6"> */}

                {/* Total Experience tag start*/}
                {/* <div className="mb-6 w-64 p-3 bg-gradient-to-r from-[#efebff] to-[#ffffff00] rounded-3xl flex gap-2 items-center">
                    <span className="font-bold text-6xl text-[#7755ff] text-gradient-to-b from-[#7755ff] to-[#559fff]">5</span>
                    <div>
                    <p className="text-base font-semibold">Years of</p> 
                    <p className="text-base font-semibold">experience</p>
                    </div>
                    </div> */}
                    {/* Total Experience tag end*/}

            {/* </div> */}
            
            {/* <h1>Total 5 years of experience as sonftware developer and UI/UX designer</h1>
        <h1>Currently working in Amdocs India PVT LTD Designation: Software developer Since 2 years</h1> */}

        <Tabs page="/experience"></Tabs>
        </div>
        </div>
    )
}

export default Experience









{/* 
    bg-gradient-to-r from-[#7755ff] to-[#b555ff]
    
    <div className="h-[30%] p-4 flex gap-4">
                        <div>
                        <h4 className="text-black text-sm">Designation:</h4>
                        <p className="text-black text-base font-semibold">Software developer</p>
                        </div>
                        <div className="border-r-[2px]"></div>
                        <div>
                        <h4 className="text-black text-sm">Since:</h4>
                        <p className="text-black text-base font-semibold">2.2 Years</p>
                        </div>
                    </div> */}