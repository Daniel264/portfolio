import dynamic from "next/dynamic";
import Menu from "@/components/Menu";
import SEO from "@/components/SEO";
import Stats from "@/components/Stats";
import TopNavigation from "@/components/TopNavigation";
import Image from "next/image";
import { toast } from "react-toastify";
import { Sora, Poppins } from "next/font/google";
import Portfolio from "./portfolio";
import Contact from "./contact";
import gsap from "gsap";
import SplitType from "split-type";
import { useEffect } from "react";
import About from "./about";

const Typed = dynamic(() => import("@/components/Typed"), { ssr: false });

export default function Home() {
    useEffect(() => {
        const splitText = new SplitType("#text, #big");
        gsap.to(".char", {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            delay: 0.2,
            duration: 0.1,
        });

        gsap.to("big", {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            delay: 0.2,
            duration: 0.1,
        });
    }, []);

    const handleLoading = () => {
        toast.loading("successful!");
    };

    return (
        <div className="bg-[#0E0A18]">
            <SEO title="Home" />
            <TopNavigation />

            <main className={`flex h-full min-h-screen flex-col items-center p-5 pt-28`}>
                <div className="max-w-8xl flex w-full text-white md:m-auto">
                    <div className="fixed left-10 top-44 hidden h-full md:flex lg:left-12">
                        <Menu />
                    </div>
                    <div className="ml-0 flex h-full w-full flex-col items-center md:ml-20">
                        <div className="flex flex-col sm:flex-row">
                            <div className="hero bg-inherit">
                                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                                    <div className="w-full">
                                        <p className="text-lg text-[rgba(174,174,174,1)]">Hello, my name is </p>
                                        <h3 className={`text-[rgba(251, 251, 251,1)] font-  font-scale my-5 text-left text-4xl sm:text-5xl md:text-7xl`} style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                                            <span id="big" className=" font-monasans font-extrabold text-6xl sm:text-7xl lg:text-9xl text-center">
                                                DANIEL <br />
                                                OLATINSU
                                            </span>
                                        </h3>
                                        <p className="text-2xl font-light text-[rgba(174,174,174,1)] lg:text-5xl">
                                            Crafting reality from lines
                                            <br className="block sm:hidden" /> of code.
                                        </p>
                                        <p className="pt-10 text-2xl font-light">
                                            <span className="font-lato font-semibold text-[#7043E3]">I&apos;m a</span> <Typed />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ml-0 mt-20 space-y-4 md:ml-0 md:mr-44 md:mt-16 md:space-x-5">
                            <button className="btn w-full rounded border-none bg-[#7043E3] text-white shadow-2xl hover:animate-bounce hover:bg-slate-500 md:w-44">
                                Lets Talk <i className="fa-solid fa-message"></i>
                            </button>
                            <button onClick={handleLoading} className="btn w-full rounded border-2 border-[#7043E3] bg-transparent text-white shadow-2xl hover:animate-bounce hover:bg-slate-500 md:w-44">
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
