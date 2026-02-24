"use client"
// import AddWalletCard from "../components/addWallet";
import { AddWalletCard, WalletCard } from "../components/walletCard";
import Sidebar from "../components/sideBar";
import Topbar from "../components/topBar";
import { useState } from "react";
import { transactions, wallets } from "../data/data";
import { ActionCard, Transaction } from "../components/actionsCard";
import { ArrowLeftRight, FileText, Plus, Send } from "lucide-react";

const Dashboard = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="flex min-h-screen ">
            <div className="hidden md:block"><Sidebar /></div>
            {mobileOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)}></div>
                    <div className="relative w-64 h-full  transition-transform duration-300">
                        <Sidebar />
                    </div>
                </div>
            )}
        

            <div className="flex-1">
                <Topbar onClickMobileMenu={() => setMobileOpen(true)} />

                <main className="p-8 mt-15 md:ml-72">
                    <h1 className="text-3xl font-bold">Welcome back, Joy!</h1>
                    <p className="text-gray-500 text-sm mt-2">Here's your financial overview</p>
                    <p className="font-semibold text-2xl mt-6 mb-4">Your Wallets</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {wallets.map((wallet) => (
                            <WalletCard
                                key={wallet.currency}
                                currencyIcon={wallet.currencyIcon}
                                currency={wallet.currency}
                                flag={wallet.flag}
                                balance={wallet.balance}
                                accountNumber={wallet.account}
                                kycLevel={wallet.kycLevel}
                            />
                        ))}
                        <AddWalletCard />
                    </div>
                    <div className="p-6  min-h-screen">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <ActionCard icon={<Plus size={20} />} title="Add Money" />
                            <ActionCard icon={<ArrowLeftRight size={20} />} title="Convert" />
                            <ActionCard icon={<Send size={20} />} title="Send" />
                            <ActionCard icon={<FileText size={20} />} title="Create Invoice" />
                        </div>    
                        <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-300">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-sm md:text-lg font-semibold">Recent Transactions</h2>
                                <button  className="text-blue-600 text-xs md:text-sm font-medium hover:underline">
                                    View All
            
                                </button>
                            </div>
                            {transactions.map((transaction) => (
                                <div key={transaction.name} className="space-y-6">                                
                                    <Transaction
                                        name= {transaction.name}
                                        time= {transaction.time}
                                        amount= {transaction.amount}
                                        status= {transaction.status}
                                        type= {transaction.type}
                                        icon={transaction.icon}   
                                        flag={transaction.flag}                     
                                    />
                                </div>
                            ))}
                        </div>
                    </div> 
                </main>
            </div>
        </div>
    );
}

export default Dashboard