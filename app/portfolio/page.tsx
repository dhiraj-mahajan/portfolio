import Tabs from "../tabs/tabs";
import { motion } from "framer-motion";
import { FaFile, FaLocationDot, FaPhone, FaEnvelope, FaArrowRight } from "react-icons/fa6";



export default function Portfolio () {
    return(
        <div>
            <h1>Portfolio</h1>
        <Tabs page="/portfolio"></Tabs>
        </div>
    )
}