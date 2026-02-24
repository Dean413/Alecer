import { Award, AwardIcon, BadgeCheck, Files, Plus } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff, Copy } from "lucide-react";

export const AddWalletCard = ({ onClick }) => {
  return (
    <div onClick={onClick}
      className="cursor-pointer bg-white border-2 border-dashed border-blue-300  rounded-2xl p-6 w-full max-w-sm flex flex-col items-center justify-center  hover:border-blue-500 hover:bg-blue-50 transition">
      <div className="w-12 h-12 flex items-center justify-center">
        <Plus className="text-blue-600" size={24} />
      </div>
      <p className="font-medium text-blue-600">
        Add Wallet
      </p>
    </div>
  );
}


export const WalletCard = ({currency, flag, balance, showAll, currencyIcon, accountNumber, kycLevel}) => {
    const [showBalance, setShowBalance] = useState(false);
    const verified = kycLevel === "Verified"
    const levelOne = kycLevel === "KYC level 1"
    
    const toggleBalance = () => {
    setShowBalance((prev) => !prev);
    };

    const copyAccount = () => {
      alert("account number copied")
    };

  return (
    <div className="relative bg-white border border-gray-300 rounded-2xl p-6 w-full max-w-sm shadow-sm hover:shadow-md transition">
      <div className={`absolute top-4 right-4 text-xs flex px-3 py-1 rounded-full ${levelOne? "bg-[#D9EBFF] text-[#007BFF]" : "bg-[#E6F9F8] text-[#009387]"} ${verified ? "text-blue-500 bg-white" : ""}    font-medium`}>
        {verified ? <BadgeCheck size={15} color="#007BFF" /> : <Award size={15} color={levelOne ? "#007BFF" : "#009387"} />}
        {kycLevel}
      </div>

      <div className="flex items-center gap-3 mt-4">
        <Image src={flag} alt={currency} width={24} height={24} />
        <span className=" text-sm text-gray-600">{currency}</span>
      </div>

      <div className="flex items-center justify-between mt-6">
        <h2 className="text-2xl font-bold tracking-wide">
          {currencyIcon}{showBalance ? `${balance}` : "****"}
        </h2>

        <button onClick={toggleBalance} className="text-gray-400 hover:text-gray-600">
          {showBalance ? <Eye size={18} /> : <EyeOff size={18} />}
        </button>
      </div>

     
      <div className="flex items-center gap-2 mt-6 text-sm text-gray-400">
        <span>{accountNumber}</span>
        <button onClick={copyAccount} className="hover:text-gray-600">
          <Files size={14} color="#007BFF" />
        </button>
      </div>
    </div>
  );
}

export default WalletCard

