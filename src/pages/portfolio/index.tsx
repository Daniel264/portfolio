import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

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

const Portfolio: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);
    console.log("width", window.innerHeight - 50);

    useLayoutEffect(() => {
        if (typeof window !== "undefined") {
            import("gsap").then((module) => {
                const gsap = module.default;
                import("gsap/ScrollTrigger").then((ScrollTriggerModule) => {
                    const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;
                    gsap.registerPlugin(ScrollTrigger);

                    ScrollTrigger.create({
                      trigger: imageContainer.current,
                      pin: true,
                      start: "top top",
                      end: "+=800", // Adjust this value as needed
                      pinSpacing: false,
                      markers: true,
                      onEnter: () => {
                        gsap.set(imageContainer.current, { y: 0 });
                      },
                    });
                });
            });
        }
    }, []);

    return (
        <div ref={container} id="portfolio" className="relative mt-[25vh] w-full p-[10%] text-white">
            <h1 className="beni_regular text-center text-7xl uppercase">Selected Projects</h1>
            <div className="flex h-[700px] justify-between gap-[5%]">
                <div ref={imageContainer} data-scroll data-scroll-speed="1" className="relative h-[100%] w-[40%]">
                    <Image src={works[selectedProject].imageUrl} fill={true} alt="Project Image" priority={true} className="object-cover" />
                </div>
                <div className="flex h-[100%] w-[20%] text-[1.6vw]">
                    <p>The flora is characterized by the presence of high elevation wetland, as well as yellow straw, broom sedge, tola de agua and tola amaia.</p>
                </div>

                <div className="flex h-[100%] w-[20%] items-end text-[1vw]">
                    <p>
                        Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered species. Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the three flamingo species inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess flamingo)
                        are considered vulnerable.
                    </p>
                </div>
            </div>
            <div className="relative mt-[200px] flex flex-col">
                {works.map((project, index) => (
                    <div key={index} onMouseOver={() => setSelectedProject(index)} className="flex w-[100%] justify-end border-b-2 border-solid border-white text-[3vw] uppercase text-white">
                        <h2 data-scroll data-scroll-speed="2" className="m-0 mb-[20px] mt-[40px] cursor-default font-bold">
                            {project.title}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
