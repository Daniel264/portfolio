import React from "react";
import { Reveal } from "./Reveal";
import SVGIcon from "./SVGIcon";
import MongoDBIcon from "./Icons";

const SkillsObjects = [
    {
        Header: "Frontend i work with",
        Description: "I am passionate about crafting intuitive and visually appealing user interfaces. From responsive design to interactive features, I focus on creating seamless, user-friendly experiences that bring designs to life on the web.",
        Skills: [
            { Icon: "TS", Name: "TypeScript" },
            { Icon: "JS", Name: "JavaScript(ES6+)" },
            { Icon: "ViteTest", Name: "ViteTest" },
            { Icon: "React", Name: "React" },
            { Icon: "Next", Name: "Next.js" },
            { Icon: "GitHub", Name: "Git/GitHub" },
            { Icon: "Next", Name: "NextAuth" },
            { Icon: "SASS", Name: "SASS" },
            { Icon: "CSS", Name: "CSS" },
            { Icon: "HTML", Name: "HTML" },
        ],
    },
    {
        Header: "Backend technologies is use",
        Description: "I have a deep passion for building robust and scalable backend systems. From designing databases to creating efficient APIs, I thrive on ensuring seamless communication between the server and client.",
        Skills: [
            { Icon: "Node", Name: "Node.js" },
            { Icon: "Express", Name: "Express.js" },
            { Icon: "TS", Name: "Typescript" },
            { Icon: "MongoDB", Name: "MongoDB" },
        ],
    },
    {
        Header: "Softwares i work with",
        Description: "I have a deep passion for building robust and scalable backend systems. From designing databases to creating efficient APIs, I thrive on ensuring seamless communication between the server and client.",
        Skills: [
            { Icon: "Node", Name: "Postman" },
            { Icon: "Express", Name: "Vscode" },
            { Icon: "TS", Name: "Github" },
            { Icon: "MongoDB", Name: "Visual Studio" },
            { Icon: "MongoDB", Name: "MongoDB compass" },
            { Icon: "MongoDB", Name: "clion" },
        ],
    },
];

const Skills = () => {
    return (
        <main className="flex h-full w-full flex-col items-center pb-14 text-white">
            <Reveal>
                <div>
                    <h1 className="pb-5 text-center text-6xl font-bold  lg:text-7xl">Stack</h1>
                    <p className="pb-5">LANGUAGES I USE - DEV ARSENAL</p>
                </div>
            </Reveal>
            <section className="md:grid-cols- grid w-full grid-cols-1 justify-center gap-10 lg:w-1/2 z-10">
                {SkillsObjects.map((item, index) => (
                    <Reveal key={index}>
                        <article className="col-start-1 z-10 rounded-badge  border-[1px] border-[#888889] border-opacity-10 shadow-2xl">
                            <div className=" bg-[#0E0F11] px-10 z-10 py-12">
                                <h2 className="text-xl font-semibold">{item.Header}</h2>
                                <p className="text-[#888889]">{item.Description}</p>
                            </div>
                            <div className="whitespace-normal break-words bg-[#08090A]  px-10 py-12">
                                <ul className="sf-ui flex h-fit max-w-[470px] flex-wrap  gap-3 text-xs uppercase  leading-relaxed text-[#888889] md:text-sm">
                                    <li className="flex flex-wrap gap-2">
                                        {item.Skills.map((skill, index) => (
                                            <span key={index} className="flex  w-fit gap-2 rounded-badge border-[2px] border-[#888889] border-opacity-10  bg-[#0E0F11] px-2 py-1 font-semibold opacity-100">
                                                <SVGIcon type={skill.Icon} />
                                                {skill.Name}
                                            </span>
                                        ))}
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </Reveal>
                ))}
                {/* <Reveal>
                    <article className="col-start-1 rounded bg-[#171717] p-4 md:col-start-3">
                        <h2 className="text-5xl font-semibold">UI Libraries</h2>
                        <ul className="sf-ui text-sm leading-relaxed md:text-lg">
                            <li>GSAP</li>
                            <li>Tailiwind</li>
                            <li>BootStrap</li>
                            <li>SCSS</li>
                            <li>CSS</li>
                            <li>ChakraUi</li>
             
                        </ul>
                    </article>
                </Reveal> */}
            </section>
        </main>
    );
};

export default Skills;
