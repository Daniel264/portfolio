import TopNavigation from "@/components/TopNavigation";
import React from "react";

const Portfolio: React.FC = () => {
    const works = [
        {
            title: "Project 1",
            description: "Description of project 1.",
            imageUrl: "path/to/image1.jpg",
        },
        {
            title: "Project 2",
            description: "Description of project 2.",
            imageUrl: "path/to/image2.jpg",
        },
        // Add more projects as needed
    ];

    return (
        <div className="">
            <TopNavigation />
            <div className="flex  min-h-screen w-full flex-col items-center bg-gradient-to-br from-[rgba(43,43,43)] via-[rgba(27,27,27)] to-[rgba(26,26,26)] pt-32 text-[rgba(174,174,174,1)]">
                {works.map((work, index) => (
                    <div key={index} className="portfolio-item">
                        <img src={work.imageUrl} alt={work.title} className="portfolio-image" />
                        <div className="portfolio-text">
                            <h2>{work.title}</h2>
                            <p>{work.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
