import TopNavigation from "@/components/TopNavigation";
import Image from "next/image";
import React from "react";

const Portfolio: React.FC = () => {
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
            languages: ["React", "Node.js", "Express", "MongoDB"],
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
            languages: ["Next.js", "Node.js", "Express", "MongoDB"],
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
            languages: ["React", "API", "ChakraUI"],
        },
    ];

    return (
        <div id="portfolio" className="w-full pt-14 lg:px-32">
            <TopNavigation />
            <h1 className="text-center text-6xl font-bold text-white">Few of my Projects</h1>
            <div className="flex min-h-screen w-full flex-col items-center">
                <div className="grid w-full grid-cols-1 gap-4 px-4 lg:grid-cols-2">
                    {works.map((work, index) => (
                        <div key={index} className=" card my-4 w-full rounded bg-transparent shadow-xl">
                            <figure>
                                <Image
                                    src={work.imageUrl}
                                    width={work.width}
                                    height={work.height}
                                    alt={work.title}
                                    className="rounded"
                                    quality={100} // Set image quality to maximum
                                    priority={index < 2} // Prioritize the first two images
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizes
                                />
                            </figure>
                            <div className="card-body relative">
                                <h2 className="card-title text-3xl text-white">{work.title}</h2>
                                <p className="reveal-text text-[#909298] text-lg leading-loose pb-5">{work.description}</p>
                                <p className="text-xl capitalize text-white md:text-2xl">
                                    {work.languages.map((language) => (
                                        <span key={language} className="mx-2 ml-0 md:mx-4">
                                            {language}
                                        </span>
                                    ))}
                                </p>
                                <div className="card-actions justify-end ">
                                    <div
                                        className="rounded-full bg-white px-3 py-1 hover:cursor-pointer lg:px-4 lg:py-2"
                                        onClick={() => work.gitHub && window.open(work.gitHub, "_blank")}
                                    >
                                        <i className="fa-brands fa-github mt-2 text-3xl text-black md:text-4xl"></i>
                                    </div>
                                    <div
                                        className="flex h-fit items-center justify-center  rounded-full  bg-white px-2 py-2 hover:cursor-pointer lg:px-3 lg:py-4"
                                        onClick={() => work.link && window.open(work.link, "_blank")}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 text-black md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
