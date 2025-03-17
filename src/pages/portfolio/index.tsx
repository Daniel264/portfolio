import { Reveal } from "@/components/Reveal";
import TopNavigation from "@/components/TopNavigation";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";

const Portfolio: React.FC = () => {
    const works = [
        {
            title: "Deizi Health",
            description: "A company's website offering you a way to talk, heal, and grow right from your phone. The DEIZI app is almost ready to be your go-to space for mental well-being.",
            imageUrl: "/assets/images/deizi.png",
            width: 1080,
            gitHub: "",
            link: "www.deizihealth.com",
            height: 720,
            status: "Live",
            languages: ["Next.js", "Tailwind", "TypeScript"],
        },
        {
            title: "Resonate AI",
            description: "A full-stack Next.js and Node.js AI platform designed help people find christian sermons from youtube shorts and other platforms ",
            imageUrl: "/assets/images/resonate.png",
            width: 1893,
            gitHub: "",
            link: "",
            height: 969,
            status: "inProgress",
            languages: ["Node.js", "Express", "MongoDB", "Next.js"],
        },
        {
            title: "GameHub",
            description: "A platform offering game recommendations, search functionality, and more for gamers.",
            imageUrl: "/assets/images/gamehub.png",
            width: 1080,
            gitHub: "https://github.com/Daniel264/game-hub",
            link: "https://game-hub-eight-theta-95.vercel.app/",
            height: 720,
            status: "Live",
            languages: ["React.js", "Chakra UI", "API"],
        },
        {
            title: "Horizon",
            description: "This is a website I built for Fintech Startups to showcase their innovative solutions tailored to meet the evolving needs of their clients.",
            imageUrl: "/assets/images/horizon.png",
            width: 1080,
            gitHub: "https://github.com/Daniel264/horizon",
            link: "https://horizon-amber-zeta.vercel.app/",
            height: 720,
            status: "Live",
            languages: ["Next.js", "Tailwind", "TypeScript"],
        },
    ];

    return (
        <div id="portfolio" className="w-full pt-14 text-white lg:px-32">
            <h1 className="formula_condensed text-center text-7xl font-bold uppercase">Few of my Projects</h1>
            <div className="flex min-h-screen w-full flex-col items-center">
                <div className="grid w-full grid-cols-1 gap-4 px-4 lg:grid-cols-2">
                    {works.map((work, index) => {
                        return (
                            <div key={index} className="card my-4 w-full rounded bg-[#181818] shadow-xl">
                                <figure>
                                    <Reveal>
                                        <Image
                                            src={work.imageUrl}
                                            width={work.width}
                                            height={work.height}
                                            alt={work.title}
                                            className="rounded hover:scale-105 hover:cursor-pointer hover:transition-transform hover:duration-700 hover:ease-in-out"
                                            quality={100} // Set image quality to maximum
                                            priority={index < 2} // Prioritize the first two images
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizes
                                        />
                                    </Reveal>
                                </figure>
                                <div className="card-body relative">
                                    <div className="flex justify-between">
                                        <h2 className="card-title text-3xl ">{work.title}</h2>
                                        <span className="h-fit rounded-badge border border-[#888888] border-opacity-30 px-1 font-light">
                                            <i className="fa-brands fa-github pr-2"></i>Public
                                        </span>
                                    </div>
                                    <p className="reveal-text  pb-5 text-sm leading-loose text-[#909298] md:text-base">{work.description}</p>
                                    <p className="text-xl capitalize  md:text-2xl">
                                        {work.languages.map((language) => (
                                            <span key={language} className=" mx-2  ml-0 w-full rounded-lg border-2 border-[#282828] p-2 text-lg md:mx-4 lg:text-xl">
                                                {language}
                                            </span>
                                        ))}
                                    </p>
                                    <div className="card-actions mt-3 justify-end">
                                        <div className="rounded-full border-2 border-[#282828] px-3 py-1 hover:cursor-pointer lg:px-4 lg:py-2" onClick={() => work.gitHub && window.open(work.gitHub, "_blank")}>
                                            <i className="fa-solid fa-arrow-right text-white "></i>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 mb-8 ml-2">
                                        <span className={`badge indicator-item gap-2 border-none ${work.status === "Live" ? "bg-green-950" : work.status === "notLive" ? "bg-red-950" : "bg-yellow-900 opacity-80"} py-3 pl-5 text-white`}>
                                            {work.status === "Live" ? "Live" : work.status === "notLive" ? "Not Live" : "In Progress"}
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 16 16"
                                                className={`${work.status === "Live" ? "text-green-400" : work.status === "notLive" ? "text-red-400" : "text-yellow-400"}`}
                                                height="8"
                                                width="8"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="8" cy="8" r="8"></circle>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
