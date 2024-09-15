import Menu from "@/components/Menu";
import TopNavigation from "@/components/TopNavigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import SplitType from "split-type";
import { Sora } from "next/font/google";

const About = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Dynamically import CSSRulePlugin
        let t1;
        import('gsap/CSSRulePlugin').then(({ CSSRulePlugin }) => {
            gsap.registerPlugin(CSSRulePlugin);
            let flagPoles = CSSRulePlugin.getRule(".card-card:before");
            t1 = gsap.timeline({
                defaults: { duration: 2, ease: "power4.inOut" },
            });
            t1.to(".card-card", {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                y: 0,
                opacity: 1,
                duration: 2.5,
            });
        });
    }, []);

    useEffect(() => {
        setTimeout(() => {
            // Simulate a slow network
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div id="about" className="min-h-screen w-full bg-fixed text-[#D1D5DB]">
            {loading ? (
                <div className="loading-animation"></div>
            ) : (
                <>
                    <TopNavigation />
                    <main className="flex min-h-screen w-full flex-col items-center justify-center px-[2rem] text-center lg:px-[8rem]">
                        <div className="flex h-10 items-center rounded border-2 border-[#212531] px-3">
                            <h1 className=" text-xl font-light">About The Creator</h1>
                        </div>
                        <p className="pt-8 text-xl font-light text-white md:text-2xl">Fullstack Developer & Mobile Enthusiast</p>
                        <div className="absolute left-10 top-64 h-full lg:left-16"></div>

                        <div className="flex h-full w-full flex-col items-center justify-center lg:flex-row-reverse">
                            <div className="flex w-full justify-center lg:justify-end lg:pb-24 lg:pr-8">
                                <Image src="/assets/images/me.jpg" alt="my-profile-pic" width={450} height={40} className="h-[22rem] rounded-badge shadow-2xl sm:h-[29rem]" />
                            </div>
                            <div className="flex w-full flex-col items-center lg:items-start lg:pl-8">
                                <div className="py-8 text-center md:pb-44 lg:pl-20 lg:text-left">
                                    <p id="" className="card-card text-sm font-light leading-relaxed tracking-wide md:text-lg">
                                        Hi!!! I am a Full-stack developer with a passion for mobile technology and a love for continuous learning. Adept at creating innovative solutions and excited by emerging tech trends.
                                        <span>
                                            Think we could create something together? Feel free to
                                            <span className="text-[#7043E3]">
                                                {" "}
                                                <br /> drop me an email
                                            </span>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </main>

                    {/* Skills section omitted for brevity */}
                </>
            )}
        </div>
    );
};

export default About;
