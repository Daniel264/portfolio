import TopNavigation from "@/components/TopNavigation";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Portfolio: React.FC = () => {
    // const aboutRef = useRef(null);

    // useEffect(() => {
    //     // Trigger animation when "About" section is in view
    //     let t1;
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     // Animation without CSSRulePlugin
    //                     t1 = gsap.timeline({
    //                         defaults: { duration: 2, ease: "power4.inOut" },
    //                     });
    //                     t1.to(".card-card", {
    //                         clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    //                         y: 0,
                        
    //                         opacity: 1,
    //                         duration: 2.5,
    //                     });
    //                 }
    //             });
    //         },
    //         { threshold: 0.10 } // Trigger when 5% of the section is visible
    //     );

    //     if (aboutRef.current) {
    //         observer.observe(aboutRef.current);
    //     }

    //     return () => {
    //         if (aboutRef.current) {
    //             observer.unobserve(aboutRef.current); // Clean up observer
    //         }
    //     };
    // }, []);
    const works = [
        {
            title: "Foodland",
            description: "A company website showcasing Foodland's food offerings and providing easy contact options for customers",
            imageUrl: "/assets/images/foodland.png",
            width: 1080,
            height: 720,
            status: "Live",
        },
        {
            title: "SaveVest",
            description: "A full-stack Next.js and Node.js platform designed to help users save money efficiently with various tools.",
            imageUrl: "/assets/images/save.png",
            width: 1893,
            height: 969,
            status: "inProgress",
        },
        {
            title: "GameHub",
            description: "A platform offering game recommendations, search functionality, and more for gamers.",
            imageUrl: "/assets/images/gamehub.png",
            width: 1080,
            height: 720,
            status: "Live",
        },
        {
            title: "GoDaddy clone",
            description: "A platform offering game recommendations, search functionality, and more for gamers.",
            imageUrl: "/assets/images/godaddy.png",
            width: 1080,
            height: 720,
            status: "Live",
        },
        {
            title: "ChatGPT dry-jokes",
            description: "A platform offering game recommendations, search functionality, and more for gamers.",
            imageUrl: "/assets/images/jokes.png",
            width: 1080,
            height: 720,
            status: "Live",
        },
        {
            title: "Portfolio website",
            description: "A platform offering game recommendations, search functionality, and more for gamers.",
            imageUrl: "/assets/images/portfolioo.png",
            width: 1080,
            height: 720,
            status: "notLive",
        },
        // Add more projects as needed
    ];

    return (
        <div id="portfolio" className="w-full pt-14 lg:px-32">
            <TopNavigation />
            <h1 className="text-center text-3xl font-medium text-white">Few of my Projects</h1>
            <div className="flex min-h-screen w-full flex-col items-center">
                <div className="grid w-full grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-2">
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
                                <h2 className="card-title text-white">{work.title}</h2>
                                <p className="text-white">{work.description}</p>
                                <div className="card-actions justify-end ">
                                    <i className="fa-brands fa-github mt-2 text-3xl text-white md:text-4xl"></i>
                                    <i className="fa-solid fa-link text-white text-3xl mt-2 pl-3"></i>
                                    {/* <button className="btn border-none bg-[#212531] text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                        View Project
                                    </button> */}
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
