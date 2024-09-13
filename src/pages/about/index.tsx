import Menu from "@/components/Menu";
import TopNavigation from "@/components/TopNavigation";
import React, { useState } from "react";

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
            <main className="flex h-[100vh] w-full items-center justify-center bg-[#101010] px-[2rem] text-center text-base-200">
            <div className="absolute left-10 top-64 h-full">
                <Menu />
            </div>

            <div className="flex flex-col md:flex-row">
                <div className="w-full">
                <h1 className="font text-5xl font-semibold">
                    About <span className="font-medium text-primary">Daniel</span>
                </h1>
                <div className="py-8">
                    <p className="pb-2 text-xl">
                    <i className="fa-solid fa-code mr-3"></i>Fullstack Developer & Mobile Enthusiast
                    </p>
                    <p>
                    <i className="fa-solid fa-location-dot mr-4"></i>Currently residing in Lagos, Nigeria
                    </p>
                    <p className="font-light">
                    Hi!!! I am a Full-stack developer with a passion for mobile technology and a <br /> love for continuous learning. Adept at creating innovative solutions and <br /> excited by emerging tech trends
                    </p>
                </div>
                </div>
                {/* <div className="w-full ">
                <div className="w-fit rounded-full bg-slate-500">
                    <Image src="/assets/images/avatar-bg.png" width={400} height={500} className="h-[400px] rounded-full" alt={""}></Image>
                </div>
                </div> */}
            </div>
            </main>
        </>
    );
};

export default About;
