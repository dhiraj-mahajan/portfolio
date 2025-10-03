import Tabs from "../tabs/tabs";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
const Experience = () => {
  const orgDetails = [
    {
      orgName: "Amdocs India",
      logo: "/DOX.png",
      location: "Magarpatta, Pune",
      designatio: "Software developer",
      duration: "May-2022",
      work: [
        "Building scalable and interactive web applications using React TypeScript and JavaScript.",
        "Collaborating with cross-functional teams to deliver high-performance solutions.",
        "Focused on writing clean, maintainable code and optimizing UI for smooth user experiences.",
      ],
      working: true,
      technology: [
        {
          logo: "/react.png",
          name: "React TS",
        },
        {
          logo: "/js.png",
          name: "JavaScript",
        },
      ],
    },
    {
      orgName: "Bajaj Allianz",
      logo: "/bajaj.png",
      location: "Yerwada, Pune",
      designatio: "Web Designer",
      duration: "Jan-20 to Feb-22",
      work: [
        "Designed and developed responsive websites with JavaScript for dynamic interactions.",
        "Created intuitive UI layouts and prototypes using Figma.",
        "Enhanced user experience by aligning design with business requirements.",
      ],
      working: false,
      technology: [
        {
          logo: "/js.png",
          name: "JavaScript",
        },
        {
          logo: "/figma.png",
          name: "Figma",
        },
      ],
    },
    {
      orgName: "Autovista",
      logo: "/autovista.png",
      location: "Baner, Pune",
      designatio: "Web Designer",
      duration: "Jun-19 to Jan-20",
      work: [
        "Developed and maintained web pages for automotive business needs.",
        "Designed Figma prototypes and implemented them with JavaScript.",
        "Improved website aesthetics and usability to boost customer engagement.",
      ],
      working: false,
      technology: [
        {
          logo: "/js.png",
          name: "JavaScript",
        },
        {
          logo: "/figma.png",
          name: "Figma",
        },
      ],
    },
    {
      orgName: "AffinityX",
      logo: "/affinity.png",
      location: "Kharadi, Pune",
      designatio: "Graphic Designer",
      duration: "Nov-18 to Jun-19",
      work: [
        "Designed creative graphics, marketing materials, and brand assets using Illustrator & Photoshop.",
        "Collaborated with clients to translate business ideas into impactful visuals.",
        "Delivered high-quality digital and print-ready designs within tight deadlines.",
      ],
      working: false,
      technology: [
        {
          logo: "/ai.png",
          name: "Illustrator",
        },
        {
          logo: "/photoshop.png",
          name: "Photoshop",
        },
      ],
    },
  ];
  return (
    <div className="md:m-16">
        <p className="md:text-8xl text-4xl font-bold text-primary pb-4">
      Organizations
      </p>
      <p className="md:text-8xl text-4xl font-bold text-tertiory pb-4">
      I’ve Worked With
      </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      {orgDetails.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-3xl md:p-6 p-4 shadow-sm"
        >
          {/* Organization logo box start  */}
          <div className="w-96 h-20 flex items-center mb-2">
            <Image
              className=""
              alt={item.logo}
              width={60}
              height={40}
              src={item.logo}
            />
          </div>
          {/* Organization logo box end  */}
          <div>
            <div className="flex gap-2 items-center">
              <div className="h-12 w-2 bg-tertiory"></div>
              <div>
                <h3 className="text-xl font-bold text-tertiory mb-1">
                  {item.orgName}
                </h3>
                <div className="flex gap-1">
                  <h3 className="text-sm font-medium text-tertiory">
                    {item.designatio}
                  </h3>
                  <div className="border-solid border-l-[1.5px] border-gray-400 h-4 mx-2"></div>
                  <h3 className="text-sm font-medium text-tertiory">
                    {item.duration}
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex m-4">
              {/* Bullet points */}
              <ul className="mt-2">
                {item.work.map((point, idx) => (
                  <li key={idx} className="flex items-start mb-3">
                    {/* Custom icon instead of bullet */}
                    <Image
                      src="/bulletPoint.png"
                      alt="bullet"
                      width={16}
                      height={16}
                      className="mr-2 mt-1"
                    />
                    <span className="text-sm text-tertiory">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 items-center ml-5 mb-4">
              {item.technology.map((tech, ind) => (
                <div key={ind}>
                  <div className="w-7 h-7 flex justify-center my-4">
                    <Image
                      alt={tech.logo}
                      width={30}
                      height={30}
                      src={tech.logo}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Experience;
