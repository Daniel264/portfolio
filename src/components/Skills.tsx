import React from "react";
import { Reveal } from "./Reveal";

const Skills = () => {
    return (
        <main className="flex h-full w-full flex-col items-center pb-14 text-white">
            <Reveal>
                <div>
                    <h1 className="pb-5 text-center text-6xl font-bold text-white lg:text-7xl">Stack</h1>
                    <p className="pb-5">LANGUAGES I USE - DEV ARSENAL</p>
                </div>
            </Reveal>
            <section className="grid grid-cols-1 gap-10 md:grid-cols-3">
                <article className="col-start-1  rounded bg-[#171717] p-4">
                    <Reveal>
                        <div>
                            <h2 className="text-5xl font-semibold">Frontend</h2>
                            <ul className="sf-ui text-sm leading-relaxed text-[#E4DED7] md:text-lg">
                                <li>TypeScript</li>
                                <li>JavaScript(ES6+)</li>
                                <li>ViteTest</li>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>Git/GitHub</li>
                                <li>NextAuth</li>
                                {/* <div className="ml-44 flex w-max">
                                    <p>95%</p>
                                </div> */}
                                {/* <progress className="progress progress-primary w-56 bg-white" value="95" max="100"></progress> */}
                            </ul>
                        </div>
                    </Reveal>
                </article>
                <Reveal>
                    <article className="col-start-1 rounded-badge  border-[1px] border-[#888889] border-opacity-10 shadow-2xl md:col-start-2 ">
                        <div className=" bg-[#0E0F11] px-10 py-12">
                            <h2 className="text-xl font-semibold">Backend technologies i use</h2>
                            <p className="text-[#888889]">I have a deep passion for building robust and scalable backend systems. From designing databases to creating efficient APIs, I thrive on ensuring seamless communication between the server and client.</p>
                        </div>
                        <div className="whitespace-normal break-words bg-[#08090A]  px-10 py-12">
                            <ul className="sf-ui flex h-fit max-w-[470px] flex-wrap  gap-3 text-xs uppercase  leading-relaxed text-[#888889] md:text-sm">
                                <li className="  w-fit rounded-badge border-[2px] border-[#888889] border-opacity-10  bg-[#0E0F11] px-2 opacity-100"><i className="fa-brands fa-node-js text-white"></i>Node.js</li>
                                <li className="  w-fit rounded-badge border-[2px] border-[#888889] border-opacity-10 bg-[#0E0F11]  px-2 opacity-100">Express.js</li>
                                <li className="  rounded-badge border-[2px] border-[#888889] border-opacity-10 bg-[#0E0F11]  px-2 opacity-100"><i className="fa-brands fa-js text-white"></i>Typescript</li>
                                <li className="  rounded-badge border-[2px] border-[#888889] border-opacity-10 bg-[#0E0F11]  px-2 opacity-100"><i className="fa-solid fa-leaf text-white"></i>MongoDB</li>
                                <li className="  rounded-badge border-[2px] border-[#888889] border-opacity-10 bg-[#0E0F11]  px-2 opacity-100">PostGreSQL</li>
                                <li className="  rounded-badge border-[2px] border-[#888889] border-opacity-10 bg-[#0E0F11]  px-2 opacity-100">prisma</li>
                            </ul>
                        </div>
                    </article>
                </Reveal>
                <Reveal>
                    <article className="col-start-1 rounded bg-[#171717] p-4 md:col-start-3">
                        <h2 className="text-5xl font-semibold">UI Libraries</h2>
                        <ul className="sf-ui text-sm leading-relaxed text-[#E4DED7] md:text-lg">
                            <li>GSAP</li>
                            <li>Tailiwind</li>
                            <li>BootStrap</li>
                            <li>SCSS</li>
                            <li>CSS</li>
                            <li>ChakraUi</li>
                            {/* <div className="ml-44 flex w-max">
                                <p>100%</p>
                            </div> */}
                            {/* <progress className="progress progress-primary w-56 bg-white" value="100" max="100"></progress> */}
                        </ul>
                    </article>
                </Reveal>
            </section>
        </main>
    );
};

export default Skills;
