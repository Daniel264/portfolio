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
            height: 720,
        },
        {
            title: "SaveVest",
            description: "A full-stack Next.js and Node.js platform designed to help users save money efficiently with various tools.",
            imageUrl: "/assets/images/save.png",
            width: 1893,
            height: 969,
        },
        {
            title: "GameHub",
            description: "A platform offering game recommendations, search functionality, and more for gamers.",
            imageUrl: "/assets/images/gamehub.png",
            width: 1080,
            height: 720,
        },
        // Add more projects as needed
    ];

    return (
        <div id="portfolio" className="w-full lg:px-32 pt-14">
            <TopNavigation />
            <h1 className="text-white text-3xl font-medium text-center">Few of my Projects</h1>
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
                                    <button className="btn bg-[#7043E3] border-none text-white">View Project</button>
                                </div>
                                <div className="absolute bottom-0 left-0 mb-8 ml-2">
                                    <span className="badge indicator-item gap-2 border-none bg-green-950 py-3 pl-5 text-white">
                                        live{" "}
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-green-400" height="8" width="8" xmlns="http://www.w3.org/2000/svg">
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
