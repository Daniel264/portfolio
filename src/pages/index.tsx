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
import { useEffect, useState } from "react";
import About from "./about";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import PreLoader from "@/components/PreLoader";
import Loader from "@/components/Loader";

const Typed = dynamic(() => import("@/components/Typed"), { ssr: false });

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Set a timer for 5 seconds to show the preloader
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2300);

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    useEffect(() => {
        if (!loading && typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);

            const splitTypes = document.querySelectorAll(".reveal-text");

            splitTypes.forEach((splitType) => {
                const split = new SplitType(splitType as HTMLElement);
                gsap.from(split.chars, {
                    duration: 0.01,
                    opacity: 0,
                    y: 10,
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: splitType,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: false,
                        markers: false,
                    },
                });
            });

            const lenis = new Lenis();

            lenis.on("scroll", (e: any) => {
                console.log(e);
            });

            const raf = (time: DOMHighResTimeStamp) => {
                lenis.raf(time);
                requestAnimationFrame(raf);
            };

            requestAnimationFrame(raf);

            const titles = gsap.utils.toArray(".switch");
            const tl = gsap.timeline();

            titles.forEach((title) => {
                const splitTitle = new SplitType(title as HTMLElement);
                tl.from(splitTitle.chars, { opacity: 0, y: 5, rotateX: -90, delay: 1.1 }).to(splitTitle.chars, { opacity: 1, y: -5, rotateX: 90, delay: 1.1 }, "<");
            });
        }
    }, [loading]);

    useEffect(() => {
        if (!loading) {
            const splitText = new SplitType("#text");
            const splitBig = new SplitType("#big");

            gsap.to("#text .char", {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                delay: 0.2,
                duration: 0.1,
            });

            gsap.to("#big .char", {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                delay: 0.4,
                duration: 0.1,
                // ease: "power4.inOut",
            });
        }
    }, [loading]);

    const handleLoading = () => {
        toast.loading("successful!");
    };

    return (
        <div className="bg-[#0F0F0F]">
            <SEO title="Home" />
            {loading ? (
                <>
                    <Loader />
                    <PreLoader />
                </>
            ) : (
                <>
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
                                                <h3 className="text-[rgba(251, 251, 251,1)] font-scale my-5 text-center text-4xl sm:text-5xl md:text-7xl" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                                                    <span
                                                        id="big"
                                                        className="font-monasans text-[3.4rem] font-extrabold leading-tight text-[#E4DED7] sm:text-8xl md:tracking-wider
                                                    lg:text-9xl"
                                                    >
                                                        DANIEL <br />
                                                        OLATINSU
                                                    </span>
                                                </h3>
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
                                    <button className="btn w-full rounded border-none bg-[#212531] text-white shadow-2xl hover:bg-slate-500 md:w-44" onClick={() => (window.location.href = "mailto:danieloluwafolajimi@gmail.com")}>
                                        Lets Talk <i className="fa-solid fa-message"></i>
                                    </button>
                                    <button onClick={handleLoading} className="btn w-full rounded border-2 border-[#212531] bg-transparent text-white shadow-2xl hover:bg-slate-500 md:w-44">
                                        Download CV <i className="fa-solid fa-download"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>

                    <hr className="mx-auto w-[80%] pb-10" />
                    <About />
                    <hr className="mx-auto w-[80%]" />
                    <Portfolio />
                    <hr className="mx-auto w-[80%] pb-10" />
                    <Skills />
                    <hr className="mx-auto w-[80%]" />
                    <Contact />
                    <hr className="mx-auto w-[80%]" />
                    <Footer />
                </>
            )}
        </div>
    );
}
