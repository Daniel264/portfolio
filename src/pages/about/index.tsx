import Menu from "@/components/Menu";
import React from "react";

const About = () => {
    return (
        <>
            <main className="flex h-[100vh] w-full items-center justify-center bg-[#31363F] px-[2rem] text-center text-base-200 lg:px-[5rem]">
                <Menu />
                <div>
                    <h1 className="font text-5xl font-semibold">About Me</h1>
                    <div>
                        <p>Fullstack Developer & Mobile Enthusiast</p>
                        <p>Currently residing in Lagos, Nigeria</p>
                        <p>Hi!!! I am a Full-stack developer with a passion for mobile technology and a love for continuous learning. Adept at creating innovative solutions and excited by emerging tech trends</p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default About;
