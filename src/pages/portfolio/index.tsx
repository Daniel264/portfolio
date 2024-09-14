import TopNavigation from "@/components/TopNavigation";
import Image from "next/image";
import React from "react";

const Portfolio: React.FC = () => {
    const works = [
        {
            title: "Project 1",
            description: "Description of project 1.",
            imageUrl: "/assets/images/portfolio.png",
            width: 1080,
            height: 720,
        },
        {
            title: "Project 2",
            description: "Description of project 2.",
            imageUrl: "/assets/images/save.png",
            width: 1893,
            height: 969,
        },
        {
            title: "Project 3",
            description: "Description of project 3.",
            imageUrl: "/assets/images/gamehub.png",
            width: 1080,
            height: 720,
        },
        {
            title: "Project 4",
            description: "Description of project 4.",
            imageUrl: "/assets/images/jokes.png",
            width: 1080,
            height: 720,
        },
        {
            title: "Project 5",
            description: "Description of project 5.",
            imageUrl: "/assets/images/foodland.png",
            width: 1080,
            height: 720,
        },
        {
            title: "Project 6",
            description: "Description of project 6.",
            imageUrl: "/assets/images/blog.png",
            width: 1080,
            height: 720,
        },
        {
            title: "Project 7",
            description: "Description of project 7.",
            imageUrl: "/assets/images/todo.png",
            width: 1080,
            height: 720,
        },
        {
            title: "Project 8",
            description: "Description of project 8.",
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
                            <h2 className="text-xl lg:text-3xl">{work.title}</h2>
                            <p className="text-lg lg:text-xl">{work.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Portfolio;
