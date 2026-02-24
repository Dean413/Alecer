import { Menu, PanelLeft } from "lucide-react";
import Image from "next/image";

const Topbar = ({onClickMobileMenu}) => {
  return (
    <div className="flex fixed w-full z-20 justify-between items-center bg-[#FDFDFD] drop-shadow-sm px-8 py-4 ">
      <button
        onClick={onClickMobileMenu}
        className="md:invisible"
      >
        <PanelLeft size={24} className="text-gray-500" />
      </button>

     
      <div className="flex items-center gap-4">
        <div><Image src="/assets/notification.svg" width={40} height={40} alt="notification" /></div>
        <div className="relative w-8 h-8 rounded-full"><Image src="/assets/joy.jpg" alt="profile" fill className=" rounded-full object-cover " /></div>
        <span className="font-medium text-[#344256]">Joy Keleb</span>
      </div>
    </div>
  );
}

export default Topbar

