import dynamic from "next/dynamic";
import Menu from "@/components/Menu";
import SEO from "@/components/SEO";
import Stats from "@/components/Stats";
import TopNavigation from "@/components/TopNavigation";
import { toast } from "react-toastify";
import Portfolio from "./portfolio";
import Contact from "./contact";
import gsap from "gsap";
import SplitType from "split-type";
import { useEffect, useRef, useState } from "react";
import About from "./about";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import PreLoader from "@/components/PreLoader";
import Loader from "@/components/Loader";
import { useMousePosition } from "@/utilities/useMousePosition";
import { motion } from "framer-motion";
import React from "react";
import FramerMagnetic from "@/components/FramerMagnetic";


const Typed = dynamic(() => import("@/components/Typed"), { ssr: false });

export default function Home() {

    const [loading, setLoading] = useState(true);
    const [blinderFinished, setBlinderFinished] = useState(false);

    useEffect(() => {
        // Set a timer for 5 seconds to show the preloader
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2300);

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    const aboutRef = useRef(null);
    const maskRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const [maskPosition, setMaskPosition] = useState({ maskX: 0, maskY: 0 });
    const size = isHovered ? 400 : 40;

    useEffect(() => {
        const handleMouseMove = () => {
            if (maskRef.current) {
                const rect = maskRef.current.getBoundingClientRect(); // Get the bounding box of the mask div
                const maskX = x - rect.left - size / 2;
                const maskY = y - rect.top - size / 2;

                setMaskPosition({ maskX, maskY });
            }
        };

        handleMouseMove();

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y, size]);

    useEffect(() => {
        if (!loading && typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);

            const timeline = gsap.timeline({
                onComplete: () => {
                    setBlinderFinished(true);
                },
            });
            timeline.to(".blinder", {
                y: "-100%",
                stagger: 0.2,
                ease: "power4.inOut",
                duration: 1.5,
            });

            timeline.to(
                ".main-content",
                {
                    opacity: 1,
                    duration: 1.5,
                    ease: "power2.inOut",
                },
                "-=1.5"
            );

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
                    <PreLoader />
                </>
            ) : (
                <>
                    <div>
                        {!blinderFinished && <Loader />}
                        <TopNavigation />
                        <div>
                            <main className="flex min-h-[100vh] flex-col items-center p-5 pb-16 pt-28 md:pb-5">
                                <div className="max-w-8xl flex w-full text-white md:m-auto">
                                    <div className="fixed hidden h-full md:left-10 md:top-44 md:flex lg:left-12">
                                        <Menu />
                                    </div>
                                    <div className="ml-0 flex h-full w-full flex-col items-center md:ml-20">
                                        <div className="flex flex-col sm:flex-row">
                                            <div className="hero bg-inherit">
                                                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                                                    <div className="w-full">
                                                        <h3 className="text-[rgba(251, 251, 251,1)] font-scale my-5 text-center text-4xl sm:text-5xl md:text-7xl" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                                                            <span
                                                                id="big"
                                                                className="formula_condensed text-[5rem] font-extrabold   leading-tight text-[#E4DED7] sm:text-[12rem] md:tracking-wider
                                                        "
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
                                            <a href="/assets/daniel-olatinsu.pdf" download="Daniel_Olatinsu.pdf" className="btn w-full rounded border-2 border-[#212531] bg-transparent text-white shadow-2xl hover:bg-slate-500 md:w-44">
                                                Download CV <i className="fa-solid fa-download"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </main>
                            {/* <hr className="mx-auto w-[80%] pb-10" /> */}
                            <About
                                background={"bg-white"}
                                text={"text-[#000]"}
                                paragraph=" I’m a full-stack developer with a deep passion for mobile technology, driven by a love for continuous learning and personal growth. My expertise spans both front-end and back-end development, where I enjoy creating innovative and impactful solutions that solve
                                        real-world problems. There's so much more I look forward to in this dynamic field, and I’m excited about where the journey will take me next.
                                       "
                            />

                            <Portfolio />

                            <Skills />
                            <Contact text={"text-white"} background={"bg-inherit"} />
                            <hr className="mx-auto w-[80%]" />
                            <Footer text={"white"} background={"black"} />
                        </div>
                    </div>

                    <motion.div
                        ref={maskRef}
                        animate={{
                            WebkitMaskPosition: `${maskPosition.maskX}px ${maskPosition.maskY}px`,
                            WebkitMaskSize: `${size}px`,
                        }}
                        transition={{
                            type: "tween",
                            ease: "backOut",
                        }}
                        className="mask absolute left-0 top-0"
                    >
                        {!blinderFinished && <Loader />}
                        <TopNavigation />
                        <div>
                            <main className="flex  min-h-[100vh] flex-col items-center p-5 pt-28">
                                <div className="max-w-8xl flex w-full text-white md:m-auto">
                                    <div className="fixed hidden h-full md:left-10 md:top-44 md:flex lg:left-12">
                                        <Menu />
                                    </div>
                                    <div className="ml-0 flex h-full w-full flex-col items-center md:ml-20">
                                        <div className="flex flex-col sm:flex-row">
                                            <div className="hero bg-inherit">
                                                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                                                    <div className="w-full">
                                                        <h3 className="text-[rgba(251, 251, 251,1)] font-scale my-5 text-center text-4xl sm:text-5xl md:text-7xl" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                                                            <span
                                                                onMouseEnter={() => setIsHovered(true)}
                                                                onMouseLeave={() => {
                                                                    setIsHovered(false);
                                                                }}
                                                                id="big"
                                                                className="formula_condensed text-[5rem] font-extrabold leading-tight   text-[#000] sm:text-[8.7rem] md:text-[12rem] md:tracking-wider"
                                                            >
                                                                ダニエル <br />
                                                                オラチンス
                                                            </span>
                                                        </h3>
                                                        <p className="pt-10 text-2xl font-light text-black">
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
                                            <a href="/assets/daniel-olatinsu.pdf" download="Daniel_Olatinsu.pdf" className="btn w-full rounded border-2 border-[#212531] bg-transparent text-white shadow-2xl hover:bg-slate-500 md:w-44">
                                                Download CV <i className="fa-solid fa-download"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </main>
                            {/* <hr className="mx-auto w-[80%] pb-10" /> */}
                            <div>
                                <About
                                    background={"bg-black"}
                                    text={"text-white"}
                                    paragraph="I am a passionate coder with nearly four years of experience, specializing in creating innovative solutions that make a difference. As a dedicated 300-level student at Mountain Top University, I strive for academic excellence while honing my skills. I enjoy
                                        playing chess in my spare time, as it sharpens my strategic thinking. A proud Real Madrid supporter, I embody teamwork and dedication both on and off the field."
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => {
                                        setIsHovered(false);
                                    }}
                                />
                            </div>

                            <Portfolio />
                            {/* <hr className="mx-auto w-[80%] pb-10" /> */}
                            <Skills />

                            <Contact
                                text={"text-black"}
                                background={"bg-white"}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => {
                                    setIsHovered(false);
                                }}
                            />
                            <hr className="mx-auto w-[80%]" />
                            <div>
                                <Footer text={"black"} background={"white"} />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </div>
    );
}

// I’m a full-stack developer with a deep passion for mobile technology, driven by a love for continuous learning and personal growth. My expertise spans both front-end and back-end development, where I enjoy creating innovative and impactful solutions that solve
// real-world problems. There&apos;s so much more I look forward to in this dynamic field, and I’m excited about where the journey will take me next.
// <span>
//     Think we could create something together? Feel free to
//     <span className="text-[#7043E3] hover:cursor-pointer" onClick={() => (window.location.href = "mailto:danieloluwafolajimi@gmail.com")}>
//         {" "}
//         <br /> drop me an email
//     </span>
// </span>
