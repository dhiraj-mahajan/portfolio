import Tabs from "../tabs/tabs";
import { motion } from "framer-motion";
import { FaFile, FaLocationDot, FaPhone, FaEnvelope, FaArrowRight } from "react-icons/fa6";



export default function Portfolio () {
    return(
        <div className="md:m-16 my-16">
            <p className="md:text-8xl text-4xl font-bold text-primary pb-4 mb-8">
      Project
      </p>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="flex md:flex-row flex-col items-center gap-10"
            >
                <div style={{ flex: 1 }}>
                    <motion.img
                        src="/project1.png"
                        alt="Project 1"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        style={{ width: "100%", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    style={{ flex: 1 }}
                >
                    <h2 className="text-3xl font-bold">Gemini-Powered RAG Chatbot</h2>
                    <p className="mt-4">
                        An intelligent chatbot built with the Google Gemini API and a RAG architecture, featuring a dual-mode interface for general Q&A and contextual analysis of user-uploaded files.
                    </p>
                    <a
                        href="https://ai-chatbot-steel-eta.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            color: "#0070f3",
                            textDecoration: "none",
                            fontWeight: "bold"
                        }}
                    >
                        Open Project <FaArrowRight />
                    </a>
                </motion.div>
            </motion.div>
        </div>
    )
}