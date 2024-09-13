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
        <div className="text-[rgba(174,174,174,1)]  min-h-screen w-full bg-gradient-to-br from-[rgba(43,43,43)] via-[rgba(27,27,27)] to-[rgba(26,26,26)]">
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
    );
};

export default Portfolio;
