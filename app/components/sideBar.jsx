import Image from "next/image";
import Link from "next/link";
import {sideBar} from "../data/data"
import { PanelLeft } from "lucide-react";
import {  Inter } from "next/font/google";
import { useState } from "react";
import StateManageMentStore from "../utils/zustand";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("")
  const {open, setOpen, toggleOpen} = StateManageMentStore()
  return (
    <aside className={`${open ? "w-20" : "w-56"} bg-[#E6F2FF] fixed h-screen px-5 transition-all duration-300 z-50 flex flex-col justify-between`}>
      <div>
        <h2 className="max-w-60 mb-5 flex justify-between border-b  border-gray-300">
            {open ? (<Image className=" mb-3 ml-2 md:mb-0 md:mt-5 md:w-7 h-7" src="/assets/logo-only.png"   width={10}  height={10} alt="logo" />) : <Image className="w-34 ml-6 mt-3  mb-3 md:mb-0 md:w-28" src="/assets/logo.svg"   width={100}  height={100} alt="logo" />}
            <div className="mb-10">
              <PanelLeft size={open ? 15 : 24} onClick={toggleOpen} className="text-gray-400 hidden ml-2 md:block" />
            </div>
        </h2>

        <div className="space-y-3 "> 
            {sideBar.map((side) => (
                <div key={side.header}>
                  {!open && (<h1 className={`${inter.className} text-gray-500 hidden md:block font-bold px-4 text-xs`}>{side.header}</h1>)}
                    {side.items.map((index) => (
                      <Link onClick={() => setActiveLink(index.title)} key={index.title} href="#" className="text-gray-500 bg-green-500">
                        <div 
                          className={`${activeLink === index.title ? "bg-[#007BFF]" : ""} ${activeLink === index.title ? "text-white" : ""} ${open ? "justify-center" : ""} px-4 flex text-xs gap-3 font-medium py-3 rounded-lg `}>
                          <p className="justify-center">{index.icon}</p>{!open && (<p>{index.title}</p>)}
                        </div>       
                      </Link>   
                    ))}
                </div>  
            ))}
        </div>
      </div>

      <div className="mb-32 md:mb-48 ">
        <button className={`flex ${open ? "ml-0" : "ml-4"} text-[#DC2626]   gap-3 mb-5   cursor-pointer`}>
          <Image src="/assets/logout.svg" width={18} height={18} alt="arrow" className={`${open ? "ml-2 mt-8" : ""}`} />
          {!open && (<p>Logout</p>)}
        </button>
        
        {!open && (<div className="bg-[#007BFF] hidden md:block  w-48 h-32 px-1 rounded-xl text-[9px]  text-white font-extralight">
        <div className="ml-5 pt-5"><Image src="/assets/user-tag.svg" width={20} height={20} alt="user-tag"/></div>
        <p className="my-5 px-5">Got some questions, inquiries or need help?</p>
        <a href="#" className="px-5 text-gray-300 underline">Visit AlecerPay Help Desk Here</a>
      </div>)}
      </div>
    </aside>
  );
}

export default Sidebar