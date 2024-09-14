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
        // Add more projects as needed
    ];

    return (
        <div id="portfolio" className="w-full lg:px-32">
            <TopNavigation />
            <div className="flex min-h-screen w-full flex-col items-center">
                <div className="grid w-full grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-2">
                    {works.map((work, index) => (
                        <div key={index} className="bg-base- card my-4 w-full rounded bg-base-100 py-5 shadow-xl">
                            <span className="badge indicator-item badge-secondary indicator-end indicator-top">top+end</span>
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
        </div>
    );
};

export default Portfolio;
