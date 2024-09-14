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
        // {
        //     title: "ChatGPT dry-jokes",
        //     description: "description",
        //     imageUrl: "/assets/images/jokes.png",
        //     width: 1080,
        //     height: 720,
        // },
        // {
        //     title: "Foodland",
        //     description: "description",
        //     imageUrl: "/assets/images/foodland.png",
        //     width: 1080,
        //     height: 720,
        // },
        // {
        //     title: "My Blog app",
        //     description: "description",
        //     imageUrl: "/assets/images/blog.png",
        //     width: 1080,
        //     height: 720,
        // },
        // {
        //     title: "Todo List.",
        //     description: "description",
        //     imageUrl: "/assets/images/todo.png",
        //     width: 1080,
        //     height: 720,
        // },
        // {
        //     title: "Password Generator.",
        //     description: "Password.",
        //     imageUrl: "/assets/images/password.png",
        //     width: 1080,
        //     height: 720,
        // },
        // Add more projects as needed
    ];

    return (
        <div id="portfolio" className="">
            <TopNavigation />
            <div className="flex min-h-screen w-full flex-col items-center">
                {works.map((work, index) => (
                    <div key={index} className="card bg-base-100 w-96 shadow-xl my-4">
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
                        <div className="card-body">
                            <h2 className="card-title">{work.title}</h2>
                            <p>{work.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View Project</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Portfolio;
