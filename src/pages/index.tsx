import dynamic from "next/dynamic";
import Menu from "@/components/Menu";
import SEO from "@/components/SEO";
import Stats from "@/components/Stats";
import TopNavigation from "@/components/TopNavigation";
import Image from "next/image";
import { toast } from "react-toastify";
import { Sora, Poppins } from "@next/font/google";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";
import {gsap} from "gsap";
import { useEffect } from "react";

// const Amination = () => {
//     useEffect(() => {

//     })
// }

const Typed = dynamic(() => import("@/components/Typed"), { ssr: false });

export default function Home() {
    const handleLoading = () => {
        toast.loading("successful!");
    };
    return (
        <div className="bg-gradient-to-r from-[#2c3e50] to-[#000000]">
            <SEO title="Home" />
            <TopNavigation />

            <main className={`flex min-h-screen flex-col items-center p-5 pt-28`}>
                <div className="max-w-8xl flex w-full text-white md:m-auto">
                    <div className="fixed left-10 top-44 hidden h-full md:flex lg:left-12">
                        <Menu />
                    </div>
                    <div className="ml-0 flex h-full w-full flex-col items-center md:ml-20">
                        <div className="flex flex-col sm:flex-row">
                            <div className="hero bg-inherit">
                                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                                    {/* <div className="flex w-full justify-center">
                                        <Image src="/assets/images/me.jpg" alt="my-profile-pic" width={450} height={40} className="h-[22rem]  rounded-full shadow-2xl sm:h-[29rem]" />
                                    </div> */}
                                    <div className="w-full">
                                        <p className="text-lg text-[rgba(174,174,174,1)]">Hello, my name is </p>
                                        <h3 className={`text-[rgba(251, 251, 251,1)] my-5  text-left text-4xl font- sm:text-5xl md:text-7xl`}>
                                            <span className="">Daniel</span> Olatinsu
                                        </h3>
                                        <p className="text-2xl font-light text-[rgba(174,174,174,1)] lg:text-5xl">
                                            Crafting reality from lines
                                            <br className="block sm:hidden" /> of code.
                                        </p>
                                        <p className="pt-8 text-base font-light text-[rgba(174,174,174,1)] md:text-lg">As a software engineer, I weave magic through code, turning the impossible into reality, one algorithm at a time.</p>
                                        <p className="pt-10 text-2xl font-light">
                                            <span className="font-lato font-semibold text-green-400">I&apos;m a</span> <Typed />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ml-0 mt-8 space-y-4 md:ml-0 md:mr-44 md:space-x-5">
                            <button className="bg-gradient-to-r from-[#3a506b] to-[#1c1c24] btn w-full rounded border-none text-white shadow-2xl hover:animate-bounce hover:bg-slate-500 md:w-44">
                                Lets Talk <i className="fa-solid fa-message"></i>
                            </button>
                            <button onClick={handleLoading} className="btn w-full rounded border-2 border-[rgba(174,174,174,1)] bg-transparent text-white shadow-2xl hover:animate-bounce hover:bg-slate-500 md:w-44">
                                Download CV <i className="fa-solid fa-download"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <About />
            <Portfolio />
            <Contact />
        </div>
    );
}
