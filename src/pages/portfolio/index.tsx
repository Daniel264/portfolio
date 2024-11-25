import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

const works = [
    {
        title: "Slice",
        description: "This is a website I built for Fintech Startups to showcase their innovative solutions tailored to meet the evolving needs of their clients.",
        imageUrl: "/assets/images/slice.png",
        width: 1080,
        gitHub: "https://github.com/Daniel264/horizon",
        link: "https://horizon-amber-zeta.vercel.app/",
        height: 720,
        status: "Live",
        languages: ["Next.js", "Tailwind", "TypeScript"],
    },
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
        imageUrl: "/assets/images/horiz.png",
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
                        start: "-100px top",
                        end: "+=1400", // Adjust this value as needed
                        pinSpacing: false,
                        markers: true,
                        onEnter: () => {
                            gsap.set(imageContainer.current, { y: 0 });
                        },
                        onLeave: () => {
                            gsap.set(imageContainer.current, { y: 0 });
                        },
                    });

                });
            });
        }
    }, []);

    return (
        <div ref={container} id="portfolio" className="relative w-full p-[10%] text-white">
            {/* <h1 className="beni_regular text-center text-7xl uppercase">Selected Projects</h1> */}
            <div className="flex h-[700px] justify-between gap-[5%]">
                <div ref={imageContainer} data-scroll data-scroll-speed="1" className="relative h-[50%] w-[50%]">
                    <div className="h-full w-full">
                        <Image src={works[selectedProject].imageUrl} fill={true} alt="Project Image" priority={true} className="object-cover" />
                    </div>
                </div>
                <div className="flex h-[100%] w-[20%] text-[1.6vw]">
                    <p>Crafting seamless user experiences with a keen eye for design, I thrive in stylesheets, perfecting layouts and font sizes for modern, intuitive interfaces..</p>
                </div>

                <div className="flex h-[100%] w-[20%] items-end text-[1vw]">
                    <p>In developing JavaScript applications, I leverage the best tools and can work without them to deliver fast, robust solutions. Performance and scalability are always top priorities for me.</p>
                </div>
            </div>
            <div className="relative mt-[200px] flex flex-col">
                <div className="flex w-[100%] justify-end">
                    <h3 className="uppercase">Selected Projects</h3>
                </div>
                {works.map((project, index) => (
                    <div key={index} onMouseOver={() => setSelectedProject(index)} className="flex w-[100%] justify-end border-b-2 border-solid border-[#777] text-[3vw] uppercase text-white">
                        <h2 data-scroll data-scroll-speed="2" className="m-0 mb-[20px] mt-[40px] cursor-default text-[3.8rem] font-medium">
                            {project.title}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
