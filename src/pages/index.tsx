import dynamic from "next/dynamic";
import Menu from "@/components/Menu";
import SEO from "@/components/SEO";
import Stats from "@/components/Stats";
import TopNavigation from "@/components/TopNavigation";
import Image from "next/image";
import { toast } from "react-toastify";
import Portfolio from "./portfolio";
import Contact from "./contact";
import gsap from "gsap";
import SplitType from "split-type";
import { useEffect } from "react";
import About from "./about";
import Lenis from "@studio-freight/lenis";

const Typed = dynamic(() => import("@/components/Typed"), { ssr: false });
export default function Home() {
    // First animation for the .switch elements

    useEffect(() => {
        const lenis = new Lenis();

        // Log scroll events
        lenis.on("scroll", (e) => {
            console.log(e);
        });

        // Animation frame loop for updating scroll
        function raf(time: DOMHighResTimeStamp) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        if (typeof window !== "undefined") {
            const titles = gsap.utils.toArray(".switch"); // Get all elements with the class "switch"
            const tl = gsap.timeline();

            titles.forEach((title) => {
                const splitTitle = new SplitType(title as HTMLElement); // Split the title into chars
                tl.from(splitTitle.chars, { opacity: 0, y: 5, rotateX: -90, delay: 1.1 }) // Fade in with some vertical movement
                    .to(splitTitle.chars, { opacity: 1, y: -5, rotateX: 90, delay: 1.1 }, "<"); // Reset position to normal
            });
        }
    }, []);

    // Second animation for #text and #big
    useEffect(() => {
        const splitText = new SplitType("#text"); // Split the text inside #text
        const splitBig = new SplitType("#big"); // Split the text inside #big

        // Animate chars inside #text
        gsap.to("#text .char", {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            delay: 0.2,
            duration: 0.1,
        });

        // Animate chars inside #big
        gsap.to("#big .char", {
            y: 0,
            opacity: 1,
            stagger: 0.1, // Stagger and delay can be different
            delay: 0.4, // Add a longer delay for #big
            duration: 0.1,
        });
    }, []);

    const handleLoading = () => {
        toast.loading("successful!");
    };

    return (
        <div className="bg-[#0E1016]">
            <SEO title="Home" />
            <TopNavigation />

            <main className="flex h-full min-h-screen flex-col items-center p-5 pt-28">
                <div className="max-w-8xl flex w-full text-white md:m-auto">
                    <div className="fixed hidden h-full md:left-10 md:top-44 md:flex lg:left-12">
                        <Menu />
                    </div>
                    <div className="ml-0 flex h-full w-full flex-col items-center md:ml-20">
                        <div className="flex flex-col sm:flex-row">
                            <div className="hero bg-inherit">
                                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                                    <div className="w-full">
                                        <p className="text-lg text-[rgba(174,174,174,1)]">Hello, my name is </p>
                                        <h3 className="text-[rgba(251, 251, 251,1)] font-  font-scale my-5 text-left text-4xl sm:text-5xl md:text-7xl" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                                            <span id="big" className=" font-monasans text-center text-5xl font-extrabold sm:text-7xl lg:text-9xl">
                                                DANIEL <br />
                                                OLATINSU
                                            </span>
                                        </h3>
                                        <div className="text-center text-xl md:pt-10 md:text-3xl">
                                            <p className="switch">crafting reality from lines</p>
                                            <p className="switch">Transform ideas into web experiences</p>
                                            <p className="switch">Optimize performance for seamless</p>
                                        </div>
                                        <p className="pt-10 text-2xl font-light">
                                            <span className="font-semibold">I&apos;m a</span> <Typed />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pb-8 md:hidden">
                            <Menu />
                        </div>
                        <div className="ml-0 mt-20 space-y-4 md:ml-0 md:mr-44 md:mt-16 md:space-x-5">
                            <button className="btn w-full rounded border-none bg-[#212531] text-white shadow-2xl hover:animate-bounce hover:bg-slate-500 md:w-44">
                                Lets Talk <i className="fa-solid fa-message"></i>
                            </button>
                            <button onClick={handleLoading} className="btn w-full rounded border-2 border-[#212531] bg-transparent text-white shadow-2xl hover:animate-bounce hover:bg-slate-500 md:w-44">
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
