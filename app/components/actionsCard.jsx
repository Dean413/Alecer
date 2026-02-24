import Image from "next/image";

export const ActionCard = ({ icon, title }) => (
  <button className="border border-blue-500 text-blue-600 rounded-xl py-6 flex flex-col items-center gap-2 hover:bg-blue-50 transition">
    {icon}
    <span className="font-medium">{title}</span>
  </button>
);

export const Transaction = ({ name, time, icon, amount, status, flag, type }) => {
  const isPositive = amount.startsWith("+");

  return (
    <div className="flex justify-between  items-center ">
        <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 mb-10 rounded-full bg-green-50 flex items-center justify-center">
              {icon}

              {flag && (
              <div className="absolute top-8 left-6">
                <Image src={flag} width={24} height={24} alt="card"/>
              </div>)}
            </div>
            <div className="mb-10">
            <p className="font-medium text-sm md:text-lg text-gray-800">{name}</p>
            <p className="text-xs md:text-sm text-gray-500">{time}</p>
            </div>
        </div>

      
      <div className="text-right mb-10">
        <p className={`font-semibold text-xs md:text-sm ${isPositive ? "text-green-500" : "text-gray-800"}`}>{amount}</p>
        <p className={`text-xs ${type === "income" ? "text-gray-500" : type === "pending" ? "text-[#DAB440]" : "text-red-500"}`}>{status} </p>
      </div>
    </div>
  );
};