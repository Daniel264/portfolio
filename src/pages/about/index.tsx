import Menu from "@/components/Menu";
import TopNavigation from "@/components/TopNavigation";
import React, { useState } from "react";
import Image from "next/image";
import { Sora } from "@next/font/google";

const About = () => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        // Simulate a slow network
        setLoading(false);
    }, 1000);

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[rgba(43,43,43)] via-[rgba(27,27,27)] to-[rgba(26,26,26)] text-[#D1D5DB] bg-fixed">
            {loading && <div className="loading-animation"></div>}
            <TopNavigation />
            <main className="flex min-h-screen w-full flex-col items-center justify-center px-[2rem] pt-44 text-center">
                <h1 className="mb-8 text-4xl font-bold">About Me</h1>
                <div className="absolute left-10 top-64 h-full lg:left-16">
                    <Menu />
                </div>

                <div className="flex h-full w-full flex-col items-center justify-center lg:flex-row-reverse">
                    <div className="flex w-full justify-center lg:justify-end lg:pb-24 lg:pr-8">
                        <Image src="/assets/images/me.jpg" alt="my-profile-pic" width={450} height={40} className="h-[22rem]  rounded-full shadow-2xl sm:h-[29rem]" />
                    </div>
                    <div className="flex w-full flex-col items-center lg:items-start lg:pl-8">
                        <div className="py-8 text-center lg:pl-20 lg:text-left">
                            <p className="pb-2 text-2xl font-light lg:pb-5">
                                <i className="fa-solid fa-code mr-3"></i>Fullstack Developer & Mobile Enthusiast
                            </p>
                            <p className="font-light leading-relaxed tracking-wide md:text-xl">
                                Hi!!! I am a Full-stack developer with a passion for mobile technology and a love for continuous learning. Adept at creating innovative solutions and excited by emerging tech trends.
                                <p>
                                    Think we could create something together? Feel free to
                                    <span className="text-blue-500">
                                        {" "}
                                        <br /> drop me an email
                                    </span>
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <section className="flex w-full flex-col items-center justify-center py-10">
                <h1 className="mb-6 text-center text-3xl font-bold">Skills</h1>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                    <div className="badge bg-[#101010] text-white border-none shadow-xl  flex h-6 w-28 items-center justify-center text-sm sm:h-7 sm:w-36 sm:text-base">
                        <i className="fa-regular fa-star mr-1 text-blue-500 sm:mr-2"></i>Node.js
                    </div>
                    <div className="badge bg-[#101010] text-white border-none shadow-xl  flex h-6 w-28 items-center justify-center text-sm sm:h-7 sm:w-36 sm:text-base">
                        <i className="fa-regular fa-star mr-1 text-blue-500 sm:mr-2"></i>MongoDB
                    </div>
                    <div className="badge bg-[#101010] text-white border-none shadow-xl  flex h-6 w-28 items-center justify-center text-sm sm:h-7 sm:w-36 sm:text-base">
                        <i className="fa-regular fa-star mr-1 text-blue-500 sm:mr-2"></i>Tailwindcss
                    </div>
                    <div className="badge bg-[#101010] text-white border-none shadow-xl  flex h-6 w-28 items-center justify-center text-sm sm:h-7 sm:w-36 sm:text-base">
                        <i className="fa-regular fa-star mr-1 text-blue-500 sm:mr-2"></i>ChakraUI
                    </div>
                </div>
                <div className="mt-2 flex flex-wrap justify-center gap-2 sm:mt-4 sm:gap-4">
                    <div className="badge bg-[#101010] text-white border-none shadow-xl  flex h-6 w-28 items-center justify-center text-sm sm:h-7 sm:w-36 sm:text-base">
                        <i className="fa-regular fa-star mr-1 text-blue-500 sm:mr-2"></i>JavaScript
                    </div>
                    <div className="badge bg-[#101010] text-white border-none shadow-xl  flex h-6 w-28 items-center justify-center text-sm sm:h-7 sm:w-36 sm:text-base">
                        <i className="fa-regular fa-star mr-1 text-blue-500 sm:mr-2"></i>TypeScript
                    </div>
                    <div className="badge bg-[#101010] text-white border-none shadow-xl  flex h-6 w-28 items-center justify-center text-sm sm:h-7 sm:w-36 sm:text-base">
                        <i className="fa-regular fa-star mr-1 text-blue-500 sm:mr-2"></i>React.js
                    </div>
                    <div className="badge bg-[#101010] text-white border-none shadow-xl  flex h-6 w-28 items-center justify-center text-sm sm:h-7 sm:w-36 sm:text-base">
                        <i className="fa-regular fa-star mr-1 text-blue-500 sm:mr-2"></i>Next.js
                    </div>
                </div>
                <div className="mt-2 flex flex-wrap justify-center gap-2 sm:mt-4 sm:gap-4">
                    <div className="badge bg-[#101010] text-white border-none shadow-xl  flex h-6 w-28 items-center justify-center text-sm sm:h-7 sm:w-36 sm:text-base">
                        <i className="fa-regular fa-star mr-1 text-blue-500 sm:mr-2"></i>Express.js
                    </div>
                    <div className="badge bg-[#101010] text-white border-none shadow-xl  flex h-6 w-28 items-center justify-center text-sm sm:h-7 sm:w-36 sm:text-base">
                        <i className="fa-regular fa-star mr-1 text-blue-500 sm:mr-2"></i>Git
                    </div>
                    <div className="badge bg-[#101010] text-white border-none shadow-xl  flex h-6 w-28 items-center justify-center text-sm sm:h-7 sm:w-36 sm:text-base">
                        <i className="fa-regular fa-star mr-1 text-blue-500 sm:mr-2"></i>SASS
                    </div>
                    <div className="badge bg-[#101010] text-white border-none shadow-xl  flex h-6 w-28 items-center justify-center text-sm sm:h-7 sm:w-36 sm:text-base">
                        <i className="fa-regular fa-star mr-1 text-blue-500 sm:mr-2"></i>Restful Apis
                    </div>
                </div>
                <div className="mt-2 flex flex-wrap justify-center gap-2 sm:mt-4 sm:gap-4">
                    <div className="badge bg-[#101010] text-white border-none shadow-xl  flex h-6 w-28 items-center justify-center text-sm sm:h-7 sm:w-36 sm:text-base">
                        <i className="fa-regular fa-star mr-1 text-blue-500 sm:mr-2"></i>HTML
                    </div>
                    <div className="badge bg-[#101010] text-white border-none shadow-xl  flex h-6 w-28 items-center justify-center text-sm sm:h-7 sm:w-36 sm:text-base">
                        <i className="fa-regular fa-star mr-1 text-blue-500 sm:mr-2"></i>CSS
                    </div>
                    <div className="badge bg-[#101010] text-white border-none shadow-xl  flex h-6 w-28 items-center justify-center text-sm sm:h-7 sm:w-36 sm:text-base">
                        <i className="fa-regular fa-star mr-1 text-blue-500 sm:mr-2"></i>Python
                    </div>
                    <div className="badge bg-[#101010] text-white border-none shadow-xl flex h-6 w-36 items-center justify-center text-sm sm:h-7 sm:w-36 sm:text-base">
                        <i className="fa-regular fa-star mr-1 text-blue-500 sm:mr-2"></i>Documentation
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
