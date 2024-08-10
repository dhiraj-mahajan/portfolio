import Tabs from "../tabs/tabs";

export default function About () {
    return (
        <div>
             <div className="flex justify-center bg-dotted-spacing-4 bg-dotted-[#bcbcbc] h-screen"></div>
            <Tabs page="/about"></Tabs>
        </div>
    )
}