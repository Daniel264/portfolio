import TopNavigation from "@/components/TopNavigation";
import Image from "next/image";
import React from "react";

const Portfolio: React.FC = () => {
    const works = [
        {
            title: "Project 1",
            description: "Description of project 1.",
            imageUrl: "/assets/images/portfolio.png",
        },
        {
            title: "Project 2",
            description: "Description of project 2.",
            imageUrl: "/assets/images/save.png",
        },
        {
            title: "Project 3",
            description: "Description of project 2.",
            imageUrl: "/assets/images/gamehub.png",
        },
        {
            title: "Project 4",
            description: "Description of project 2.",
            imageUrl: "/assets/images/jokes.png",
        },
        {
            title: "Project 5",
            description: "Description of project 2.",
            imageUrl: "/assets/images/foodland.png",
        },
        {
            title: "Project 6",
            description: "Description of project 2.",
            imageUrl: "/assets/images/blog.png",
        },
        {
            title: "Project 7",
            description: "Description of project 2.",
            imageUrl: "/assets/images/todo.png",
        },
        {
            title: "Project 8",
            description: "Description of project 2.",
            imageUrl: "/assets/images/password.png",
        },

        // Add more projects as needed
    ];

    return (
        <div className="">
            <TopNavigation />
            <div className="flex  min-h-screen w-full flex-col items-center bg-gradient-to-br from-[rgba(43,43,43)] via-[rgba(27,27,27)] to-[rgba(26,26,26)] pt-32 text-[rgba(174,174,174,1)]">
                {works.map((work, index) => (
                    <div key={index} className="py-10">
                        <Image src={work.imageUrl} width={350} height={100} alt={work.title} className="rounded lg:w-[650px]" />
                        <div className="portfolio-text bg-black h-44 lg:h-56">
                            <h2 className="text-3xl">{work.title}</h2>
                            <p className="text-xl">{work.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
