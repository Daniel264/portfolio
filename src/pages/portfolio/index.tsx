import { Reveal } from "@/components/Reveal";
import TopNavigation from "@/components/TopNavigation";
import Image from "next/image";
import React from "react";

const Portfolio: React.FC = () => {
    const handleMouseMove = (e: any) => {
        const rect = e.target.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width;
        console.log(xPct);
    };
    const works = [
        {
            title: "Foodland",
            description: "A company website showcasing Foodland's food offerings and providing easy contact options for customers",
            imageUrl: "/assets/images/foodland.png",
            width: 1080,
            gitHub: "https://github.com/Daniel264/foodland",
            link: "",
            height: 720,
            status: "Live",
            languages: ["React", "Tailwind", "TypeScript"],
        },
        {
            title: "SaveVest",
            description: "A full-stack Next.js and Node.js platform designed to help users save money efficiently with various tools.",
            imageUrl: "/assets/images/save.png",
            width: 1893,
            gitHub: "",
            link: "",
            height: 969,
            status: "inProgress",
            languages: ["Node.js", "Express", "MongoDB"],
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
            title: "GoDaddy clone",
            description: "A platform offering game recommendations, search functionality, and more for gamers.",
            imageUrl: "/assets/images/godaddy.png",
            width: 1080,
            gitHub: "https://github.com/Daniel264/GoDaddy",
            link: "https://godaddy20-daniel-olatinsus-projects.vercel.app/",
            height: 720,
            status: "Live",
            languages: ["Next.js", "Tailwind", "TypeScript"],
        },
    ];

    return (
        <div id="portfolio" className="w-full pt-14 lg:px-32">
            <h1 className="text-center text-6xl font-bold text-white">Few of my Projects</h1>
            <div className="flex min-h-screen w-full flex-col items-center">
                <div className="grid w-full grid-cols-1 gap-4 px-4 lg:grid-cols-2">
                    {works.map((work, index) => (
                        <div key={index} style={{ transformStyle: "preserve-3d" }} onMouseMove={handleMouseMove} className=" card my-4 w-full rounded bg-[#181818] shadow-xl">
                            <figure style={{ transformStyle: "preserve-3d", transform: "translateZ(75px)" }}>
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
                                <h2 className="card-title text-3xl text-white">{work.title}</h2>
                                <p className="reveal-text sf-ui pb-5 text-sm  leading-loose text-[#909298] md:text-base">{work.description}</p>
                                <p className="text-xl capitalize text-white md:text-2xl">
                                    {work.languages.map((language) => (
                                        <span key={language} className="sf-ui mx-2 ml-0 rounded-lg border-2 border-[#282828] p-2 md:mx-4">
                                            {language}
                                        </span>
                                    ))}
                                </p>
                                <div className="card-actions mt-3 justify-end">
                                    <div className="rounded-full border-2  border-[#282828] px-3 py-1 hover:cursor-pointer lg:px-4 lg:py-2" onClick={() => work.gitHub && window.open(work.gitHub, "_blank")}>
                                        <i className="fa-solid fa-arrow-right text-white "></i>
                                    </div>
                                    {/* <div className="flex h-fit items-center justify-center  rounded-full  bg-white px-2 py-2 hover:cursor-pointer lg:px-3 lg:py-4" onClick={() => work.link && window.open(work.link, "_blank")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 text-black md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                    </div> */}
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
