"use client"
import Image from "next/image";
import {cards, stats, reason} from "./data/data"
import FeatureCard from "./components/featuresCard"
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "./components/modal";

export default function Home() {
  return (  
    <main className=" text-gray-900">
      <Modal />
      <nav className="flex justify-around items-center px-8 py-4 bg-white">
        <h1 className="text-2xl font-bold text-[#007BFF]">AlecerPay</h1>
       
        <div className="hidden md:flex space-x-8 text-sm">
          <a href="#">Features</a>
          <a href="#">Benefits</a>
          <a href="#">Pricing</a>
        </div>

        <div className="space-x-4">
          <button className="text-sm cursor-pointer">Sign In</button>
          <button className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-full  text-sm"><Link href="/dashboard">Sign Up</Link></button>
        </div>
      </nav>

      <section className="text-center py-24 px-6 hero-gradient">
        <span className="text-xs bg-[#00C4B41A] text-[#00C4B4] px-4 py-1 rounded-full">Join 50,000+ users worldwide</span>
        <h1 className="text-2xl md:text-6xl font-bold mt-6 max-w-2xl mx-auto">Empowering global payments for Africa</h1>

        <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
          Send and receive international payments, manage multi-currency wallets,
          issue virtual cards, and take control of your finances globally.
        </p>

        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full">Get Started →</button>
          <button className="border border-gray-300 px-6 py-3 rounded-full">Watch Demo</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white max-w-6xl, mx-auto">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-5xl max-w-2xl mx-auto font-bold">
            Everything you need to manage global payments
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl text-lg mx-auto">Powerful features designed for freelancers, remote workers, and businesses across Africa</p>
          
          {/* Cards */}
          <div className="mt-16  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card) => (
              <FeatureCard 
                key={card.title}
                icon={card.icon}
                alt={card.alt}
                title={card.title}
                text={card.text}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 px-6 max-w-6xl  mx-auto">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl text-center md:text-left md:text-4xl font-bold text-[#1C1C1E]">Why choose Alecer Pay?</h2>
            <div className="mt-8 space-y-6">
              {reason.map((index) => (
                <div key={index.title} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#00C4B4] rounded-full  flex justify-center center "><Image width={14} height={20} src="/assets/check.svg" alt="checkmark" /></div>
                  <div>
                    <h4 className=" font-semibold">{index.title}</h4>
                    <p className="text-gray-500 text-sm">{index.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-96 max-w-4xl p-8 bg-linear-to-br from-[#007BFF1A] to-blue-200 rounded-3xl flex flex-col items-center justify-center">
            <div className="bg-[#007BFF33] p-4 rounded-full"><Image src = "/assets/card2.svg" width={64} height={64} alt="card-icon" /></div>
            <p className="font-bold mt-6">Dashboard Preview</p>
          </div>
        </div>
      </section>

      <section className="mb-20 py-20 mx-auto">
        <div className="mx-auto grid grid-cols-2 md:grid-cols-4 max-w-3xl justify-center gap-30">
          {stats.map((index) => (
            <div key={index.title} className="text-black">
              <h5 className="text-center font-bold text-3xl md:text-5xl text-[#007BFF]">{index.title}</h5>
              <p className="text-gray-500 text-sm text-center mt-2">{index.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 mb-60 px-6 bg-[#00C4B4] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-semibold text-white">Ready to transform your finances?</h2>
          <p className="mt-4 font-extralight text-gray-200 mx-auto max-w-2xl text-[18px]">Join thousands of users who are already managing their global payments with AlecerPay</p>
          <button className="mt-8 bg-white text-[#007BFF] text-sm px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">Create Your Account Now</button>
        </div>
      </section>
    </main>
  )
}