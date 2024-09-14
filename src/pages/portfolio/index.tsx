import TopNavigation from "@/components/TopNavigation";
import Image from "next/image";
import React from "react";

const Portfolio: React.FC = () => {
    const works = [
        {
            title: "My Portfolio Website",
            description: "My Portfolio Website",
            imageUrl: "/assets/images/portfolio.png",
            width: 1080,
            height: 720,
        },
        {
            title: "SaveVest",
            description: "description",
            imageUrl: "/assets/images/save.png",
            width: 1893,
            height: 969,
        },
        {
            title: "GaeHub",
            description: "GameHub",
            imageUrl: "/assets/images/gamehub.png",
            width: 1080,
            height: 720,
        },
        {
            title: "ChatGPT dry-jokes",
            description: "description",
            imageUrl: "/assets/images/jokes.png",
            width: 1080,
            height: 720,
        },
        {
            title: "Foodland",
            description: "description",
            imageUrl: "/assets/images/foodland.png",
            width: 1080,
            height: 720,
        },
        {
            title: "My Blog app",
            description: "description",
            imageUrl: "/assets/images/blog.png",
            width: 1080,
            height: 720,
        },
        {
            title: "Todo List.",
            description: "description",
            imageUrl: "/assets/images/todo.png",
            width: 1080,
            height: 720,
        },
        {
            title: "Password Generator.",
            description: "Password.",
            imageUrl: "/assets/images/password.png",
            width: 1080,
            height: 720,
        },
        // Add more projects as needed
    ];

    return (
        <div className="">
            <TopNavigation />
            <div className="flex min-h-screen w-full flex-col items-center bg-gradient-to-br from-[rgba(43,43,43)] via-[rgba(27,27,27)] to-[rgba(26,26,26)] pt-32 text-[rgba(174,174,174,1)]">
                {works.map((work, index) => (
                    <div key={index} className="py-10">
                        <Image
                            src={work.imageUrl}
                            width={work.width}
                            height={work.height}
                            alt={work.title}
                            className="rounded lg:w-[650px] mb-4 lg:mb-8"
                            quality={100} // Set image quality to maximum
                            priority={index < 2} // Prioritize the first two images
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizes
                        />
                        <div className="portfolio-text h-44 rounded bg-black pt-4 text-center text-white lg:h-56 lg:pt-8">
                            <h2 className="text-xl lg:text-3xl text-blue-500">{work.title}</h2>
                            <p className="text-lg lg:text-xl">{work.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Portfolio;
