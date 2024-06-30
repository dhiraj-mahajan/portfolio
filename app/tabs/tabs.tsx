import Link from "next/link";
import {
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaFolderOpen,
  FaPhone,
  FaHouse,
} from "react-icons/fa6";

type Prop = {
  page: string;
};

export default function Tabs({ page }: Prop) {
  console.log(page);
  const deselect =
    "flex items-center justify-center m-3 h-12 w-12 bg-white rounded-2xl shadow-xl";
  const selected =
    "flex items-center justify-center m-3 h-12 w-12 bg-gradient-to-b from-[#7755ff] to-[#559fff] rounded-2xl shadow-xl";

  return (
    <div className="fixed bottom-0 right-0 left-0 p-6 flex justify-center">
      <div className="flex w-min bg-[#fafafabe] rounded-2xl">
        <Link href="/">
          <div className={page == "/" ? selected : deselect}>
            <FaHouse
              className={page == "/" ? "text-[#ffffff]" : "text-primary"}
              size={20}
            ></FaHouse>
          </div>
        </Link>
        <Link href="/experience">
          <div className={page == "/experience" ? selected : deselect}>
            <FaBriefcase
              className={
                page == "/experience" ? "text-[#ffffff]" : "text-primary"
              }
              size={20}
            ></FaBriefcase>
          </div>
        </Link>
        <Link href="/about">
          <div className={page == "/about" ? selected : deselect}>
            <FaUser
              className={page == "/about" ? "text-[#ffffff]" : "text-primary"}
              size={20}
            ></FaUser>
          </div>
        </Link>
        
        <Link href="/education">
          <div className={page == "/education" ? selected : deselect}>
            <FaGraduationCap
              className={
                page == "/education" ? "text-[#ffffff]" : "text-primary"
              }
              size={24}
            ></FaGraduationCap>
          </div>
        </Link>
        <Link href="/portfolio">
          <div className={page == "/portfolio" ? selected : deselect}>
            <FaFolderOpen
              className={
                page == "/portfolio" ? "text-[#ffffff]" : "text-primary"
              }
              size={20}
            ></FaFolderOpen>
          </div>
        </Link>
      </div>
    </div>
  );
}
