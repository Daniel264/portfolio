import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

const works = [
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
    imageUrl: "/assets/images/horizon.png",
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
      // Dynamically import gsap and ScrollTrigger only on the client side
      import("gsap").then((gsap) => {
        import("gsap/ScrollTrigger").then((ScrollTriggerModule) => {
          const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;
          gsap.default.registerPlugin(ScrollTrigger);

          ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
          });
        });
      });
    }
  }, []);

  return (
    <div ref={container} id="portfolio" className="relative w-full pt-14 text-white lg:px-32">
      <h1 className="beni_regular text-center text-7xl uppercase">Few of my Projects</h1>
      <div className="flex h-[700px] justify-between gap-[5%]">
        <div ref={imageContainer} className="relative h-[100%] w-[40%]">
          <Image
            src={works[selectedProject].imageUrl}
            fill={true}
            alt="Project Image"
            priority={true}
            className="object-cover"
          />
        </div>
      </div>
      <div className="relative mt-[200px] flex flex-col">
        {works.map((project, index) => (
          <div
            key={index}
            onMouseOver={() => setSelectedProject(index)}
            className="flex w-[100%] justify-end border-b-2 border-solid border-white text-[3vw] uppercase text-white"
          >
            <h2 className="m-0 mb-[20px] mt-[40px] cursor-default">{project.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
