import { Plus } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff, Copy } from "lucide-react";

export const AddWalletCard = ({ onClick }) => {
  return (
    <div onClick={onClick}
      className="cursor-pointer bg-white border-2 border-dashed border-blue-300  rounded-2xl p-6 w-full max-w-sm flex flex-col items-center justify-center  hover:border-blue-500 hover:bg-blue-50 transition">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
        <Plus className="text-blue-600" size={24} />
      </div>
      <p className="font-medium text-blue-600">
        Add Wallet
      </p>
    </div>
  );
}


export const WalletCard = ({currency, flag, balance, currencyIcon, accountNumber, kycLevel}) => {
    const [showBalance, setShowBalance] = useState(false);
    const toggleBalance = () => {
    setShowBalance((prev) => !prev);
    };

    const copyAccount = () => {
      alert("account number copied")
    };

  return (
    <div className="relative bg-white border border-gray-300 rounded-2xl p-6 w-full max-w-sm shadow-sm hover:shadow-md transition">
      <div className={`absolute top-4 right-4 text-xs flex px-3 py-1 rounded-full ${kycLevel === "KYC level 1" ? "bg-[#D9EBFF]" : "bg-[#E6F9F8]"} ${kycLevel === "KYC level 1" ? "text-[#007BFF]" : "text-[#009387]"}    font-medium`}>
        <Image src="assets/kyc.svg" width={14} height={14} alt="kyc" />
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
          {showBalance ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

     
      <div className="flex items-center gap-2 mt-6 text-sm text-gray-400">
        <span>{accountNumber}</span>
        <button onClick={copyAccount} className="hover:text-gray-600">
          <Copy size={14} />
        </button>
      </div>
    </div>
  );
}

export default WalletCard

