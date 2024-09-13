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
            <main className="flex min-h-screen w-full items-center justify-center bg-[#101010] px-[2rem] text-center text-[#D1D5DB]">
            <div className="absolute left-10 top-64 h-full lg:left-16">
                <Menu />
            </div>

            <div className="flex h-full w-full flex-col items-center justify-center lg:flex-row">
                <div className="flex w-full justify-center lg:justify-end lg:pb-24 lg:pr-8">
                <Image src="/assets/images/aboutpic.png" width={400} height={500} className="h-[400px] rounded-full" alt={""}></Image>
                </div>
                <div className="flex w-full flex-col items-center lg:items-start lg:pl-8">
                <h1 className="text-5xl font-semibold">
                    About <span className="font-medium text-primary">Daniel</span>
                </h1>
                <div className="py-8 text-center lg:text-left">
                    <p className="pb-2 text-2xl font-light lg:pb-5">
                    <i className="fa-solid fa-code mr-3"></i>Fullstack Developer & Mobile Enthusiast
                    </p>
                    <p className="font-light leading-relaxed tracking-wide md:text-xl">
                    Hi!!! I am a Full-stack developer with a passion for mobile technology and a love for continuous learning. Adept at creating innovative solutions and excited by emerging tech trends.
                    <p>
                        Think we could create something together? Feel free to<span className="text-primary"> <br /> drop me an email</span>
                    </p>
                    </p>
                </div>
                </div>
            </div>
            </main>
            <section className="w-full h-screen bg-[#101010] text-[#D1D5DB] text-center">
                <h1 className="font-medium text-5xl"><span className="text-primary">My</span> Skills</h1>
            </section>
        </>
    );
};

export default About;
