import Menu from "@/components/Menu";
import TopNavigation from "@/components/TopNavigation";
import React, { useState } from "react";
import Image from "next/image";

const About = () => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        // Simulate a slow network
        setLoading(false);
    }, 1000);
    return (
        <>
            {loading && <div className="loading-animation"></div>}
            <TopNavigation />
            <main className="flex min-h-screen w-full items-center justify-center bg-[#101010] px-[2rem] text-center text-base-200">
            <div className="absolute left-10 top-64 lg:left-16 h-full">
                <Menu />
            </div>

            <div className="flex flex-col lg:flex-row w-full h-full items-center justify-center">
                <div className="w-full flex justify-center lg:justify-end lg:pr-8 lg:pb-24">
                <Image src="/assets/images/aboutpic.png" width={400} height={500} className="h-[400px] rounded-full" alt={""}></Image>
                </div>
                <div className="w-full flex flex-col items-center lg:items-start lg:pl-8">
                <h1 className="text-5xl font-semibold">
                    About <span className="font-medium text-primary">Daniel</span>
                </h1>
                <div className="py-8 text-center lg:text-left">
                    <p className="pb-2 lg:pb-5 text-2xl font-light">
                    <i className="fa-solid fa-code mr-3"></i>Fullstack Developer & Mobile Enthusiast
                    </p>
                    <p className="font-light md:text-xl leading-relaxed tracking-wide">
                    Hi!!! I am a Full-stack developer with a passion for mobile technology and a love for continuous learning. Adept at creating innovative solutions and excited by emerging tech trends
                    </p>
                </div>
                </div>
            </div>
            </main>
        </>
    );
};

export default About;
