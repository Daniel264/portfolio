import Menu from "@/components/Menu";
import TopNavigation from "@/components/TopNavigation";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const About = () => {
    const [loading, setLoading] = useState(true);
    const aboutRef = useRef(null);

    useEffect(() => {
        // Trigger animation when "About" section is in view
        let t1;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animation without CSSRulePlugin
                        t1 = gsap.timeline({
                            defaults: { duration: 2, ease: "power4.inOut" },
                        });
                        t1.to(
                            ".card-card",
                            {
                                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                                y: 0,
                                opacity: 1,
                                duration: 2.5,
                            },
                            "-=0.6"
                        );
                    }
                });
            },
            { threshold: 0.03 } // Trigger when 5% of the section is visible
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current); // Clean up observer
            }
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            // Simulate a slow network
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div id="about" ref={aboutRef} className="min-h-screen w-full bg-fixed text-[#D1D5DB]">
            {loading ? (
                <div className="loading-animation"></div>
            ) : (
                <>
                    <main className="flex min-h-screen w-full flex-col items-center justify-center px-[2rem] pt-24 text-center md:pt-0 lg:px-[8rem]">
                        <div className="flex h-10 items-center rounded px-3 pb-10">
                            <h1 className="text-5xl font-bold md:text-6xl">About The Creator</h1>
                        </div>
                        <p className="pt-8 text-xl font-light text-white md:text-2xl">Fullstack Developer & Mobile Enthusiast</p>
                        <div className="absolute left-10 top-64 h-full lg:left-16"></div>

                        <div className="flex h-full w-full flex-col items-center justify-center lg:flex-row-reverse">
                            <div className="flex w-full justify-center lg:justify-end lg:pb-24 lg:pr-8">
                                <Image src="/assets/images/me.jpg" alt="my-profile-pic" width={450} height={40} className="h-[22rem] rounded-badge shadow-2xl sm:h-[29rem]" />
                            </div>
                            <div className="flex w-full flex-col items-center lg:items-start lg:pl-8">
                                <div className="py-8 text-center md:pb-44 lg:pl-20 lg:text-left">
                                    <p className="sf-ui card-card font-light tracking-wider md:text-xl md:leading-relaxed">
                                        I’m a full-stack developer with a deep passion for mobile technology, driven by a love for continuous learning and personal growth. My expertise spans both front-end and back-end development, where I enjoy creating innovative and impactful solutions that solve
                                        real-world problems. There&apos;s so much more I look forward to in this dynamic field, and I’m excited about where the journey will take me next.
                                        <span>
                                            Think we could create something together? Feel free to
                                            <span className="text-[#7043E3] hover:cursor-pointer" onClick={() => (window.location.href = "mailto:danieloluwafolajimi@gmail.com")}>
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
