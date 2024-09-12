import Menu from "@/components/Menu";
import React from "react";

const About = () => {
    return (
        <>
            <main className="flex h-[100vh] w-full items-center justify-center bg-[#31363F] px-[2rem] text-center text-base-200 lg:px-[5rem]">
                <Menu />
                <div>
                    <h1 className="font text-5xl font-semibold">
                        About <span className="font-medium text-slate-400">Daniel</span>
                    </h1>
                    <div className="py-8">
                        <p className="pb-2 text-xl">
                            <i className="fa-solid fa-code mr-3"></i>Fullstack Developer & Mobile Enthusiast
                        </p>
                        <p>
                            <i className="fa-solid fa-location-dot mr-4"></i>Currently residing in Lagos, Nigeria
                        </p>
                        <p>
                            Hi!!! I am a Full-stack developer with a passion for mobile technology and a <br /> love for continuous learning. Adept at creating innovative solutions and <br /> excited by emerging tech trends
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default About;
