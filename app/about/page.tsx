import Tabs from "../tabs/tabs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';


export default function About () {
    return (
        <div className="w-full">
            <footer className=" p-6 rounded-lg mt-8 flex flex-col items-center">
                <p className=" p-6 font-semibold text-4xl">Let's Connect</p>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex items-center gap-2">
                        {/* Mail Icon */}
                        <FontAwesomeIcon icon={faEnvelope} className="text-black" />
                        <a href="mailto:dhirajmahajan595@gmail.com" className="text-gray-800 hover:underline">dhirajmahajan595@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* Phone Icon */}
                        <FontAwesomeIcon icon={faPhone} className="text-black" />
                        <a href="tel:8956866950" className="text-gray-800 hover:underline">8956866950</a>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* LinkedIn Icon */}
                        <FontAwesomeIcon icon={faLinkedin} className="text-blue-700" />
                        <a href="https://www.linkedin.com/in/dhiraj-mahajan-3a4ba9175/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">LinkedIn</a>
                    </div>
                    {/* <div className="flex items-center gap-2">
                        
                        <svg width="20" height="20" fill="currentColor" className="text-pink-500">
                            <path d="M7 2C4.243 2 2 4.243 2 7v6c0 2.757 2.243 5 5 5h6c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h6c1.654 0 3 1.346 3 3v6c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm3 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm4.5-.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                        <a href="https://www.instagram.com/dhirajmahajan" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">Instagram</a>
                    </div> */}
                    <div className="flex items-center gap-2">
                        {/* Twitter Icon */}
                        <FontAwesomeIcon icon={faXTwitter} className="text-black" />
                        <a
                            href="https://x.com/D94095111"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:underline"
                        >
                        X.com
                        </a>
                    </div>
                </div>
                <div className="mt-4 text-xs text-gray-500">© {new Date().getFullYear()} Dhiraj Mahaja. All rights reserved.</div>
            </footer>
        </div>
    )
}