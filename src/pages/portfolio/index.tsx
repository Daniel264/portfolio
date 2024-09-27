import { Reveal } from "@/components/Reveal";
import TopNavigation from "@/components/TopNavigation";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";

const useMouseMoveAnimation = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["14.5deg", "-14.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-14.5deg", "14.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return { rotateX, rotateY, handleMouseMove, handleMouseLeave };
};

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
        <div id="portfolio" className="w-full pt-14 lg:px-32 text-[#B7AB98]">
            <h1 className="text-center text-6xl font-bold text-[#B7AB98]">Few of my Projects</h1>
            <div className="flex min-h-screen w-full flex-col items-center">
                <div className="grid w-full grid-cols-1 gap-4 px-4 lg:grid-cols-2">
                    {works.map((work, index) => {
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useMouseMoveAnimation();
                        return (
                            <motion.div key={index} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="card my-4 w-full rounded bg-[#181818] shadow-xl">
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
                                    <h2 className="card-title text-3xl ">{work.title}</h2>
                                    <p className="reveal-text sf-ui pb-5 text-sm leading-loose text-[#909298] md:text-base">{work.description}</p>
                                    <p className="text-xl capitalize  md:text-2xl">
                                        {work.languages.map((language) => (
                                            <span key={language} className="sf-ui w-full  text-lg lg:text-xl mx-2 ml-0 rounded-lg border-2 border-[#282828] p-2 md:mx-4">
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
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
