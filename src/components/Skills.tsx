import React from "react";

const Skills = () => {
    return (
        <main className="flex h-full w-full flex-col items-center text-white pb-14">
            <h1 className="pb-5 text-center text-6xl font-bold text-white lg:text-7xl">Stack</h1>
            <p className="pb-5">LANGUAGES I USE - DEV ARSENAL</p>
            <section className="grid grid-cols-1 gap-10 md:grid-cols-3">
                <article className="col-start-1  p-4 rounded bg-[#171717]">
                    <h2 className="text-5xl font-semibold">Frontend</h2>
                    <ul className="text-lg leading-relaxed text-[#E4DED7] clash-font">
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
                </article>
                <article className="col-start-1  rounded md:col-start-2 bg-[#171717] p-4">
                    <h2 className="text-5xl font-semibold">Backend</h2>
                    <ul className="text-lg leading-relaxed text-[#E4DED7] clash-font">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Typescript</li>
                        <li>MongoDB</li>
                        <li>PostGreSQL</li>
                        <li>prisma</li>
                        {/* <div className="ml-44 flex w-max">
                            <p>80%</p>
                        </div> */}
                        {/* <progress className="progress progress-primary w-56 bg-white" value="80" max="100"></progress> */}
                    </ul>
                </article>
                <article className="col-start-1 md:col-start-3 rounded p-4 bg-[#171717]">
                    <h2 className="text-5xl font-semibold">UI Libraries</h2>
                    <ul className="text-lg leading-relaxed text-[#E4DED7] clash-font">
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
            </section>
        </main>
    );
};

export default Skills;
